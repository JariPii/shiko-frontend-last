import { cacheLife } from 'next/cache';
import { ApiError, ProblemDetails } from '../types/api';

const API_URLS = {
  auth: () => {
    const url = process.env.AUTH_API_URL;
    if (!url) throw new Error('Missing AUTH_API_URL env var');
    return url;
  },
  user: () => {
    const url = process.env.USER_API_URL;
    if (!url) throw new Error('Missing USER_API_URL env var');
    return url;
  },
} as const;

type ApiKey = keyof typeof API_URLS;

export async function serverFetcher<T>(
  baseUrl: ApiKey,
  endpoint: string,
  options?: RequestInit,
): Promise<T | undefined> {
  return performRequest<T>(baseUrl, endpoint, options);
}

export async function cachedServerFetcher<T>(
  baseUrl: ApiKey,
  endpoint: string,
  options?: RequestInit,
): Promise<T | undefined> {
  'use cache';
  cacheLife('days');
  return performRequest<T>(baseUrl, endpoint, options);
}

async function performRequest<T>(
  baseUrl: ApiKey,
  endpoint: string,
  options?: RequestInit,
): Promise<T | undefined> {
  const base = API_URLS[baseUrl]();

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
