import { ApiError, ProblemDetails } from '../types/api';

const API_URLS = {
  auth: process.env.NEXT_PUBLIC_AUTH_API_URL,
  user: process.env.NEXT_PUBLIC_USER_API_URL,
} as const;

export async function clientFetcher<T>(
  baseUrl: keyof typeof API_URLS,
  endpoint: string,
  options?: RequestInit,
): Promise<T | undefined> {
  const base = API_URLS[baseUrl];

  const contentType: Record<string, string> =
    options?.body instanceof FormData
      ? {}
      : options?.body
        ? { 'Content-Type': 'application/json' }
        : {};

  const res = await fetch(`${base}${endpoint}`, {
    ...options,
    headers: {
      ...contentType,
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const isJson = res.headers
      .get('content-type')
      ?.includes('application/json');
    const body = isJson
      ? ((await res.json().catch(() => null)) as ProblemDetails | null)
      : null;
    throw new ApiError(body, res.status);
  }

  if (res.status === 204) return undefined;

  return res.json() as Promise<T>;
}
