export type ProblemDetails = {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;

  extensions?: {
    errorCode?: string;
    traceId?: string;
    timestamp?: string;
    [key: string]: unknown;
  };
};

export class ApiError extends Error {
  status: number;
  title?: string;
  detail?: string;
  errorCode?: string;
  traceId?: string;

  constructor(problem: ProblemDetails | null, fallbackStatus: number) {
    super(problem?.detail || problem?.title || `API Error (${fallbackStatus})`);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = 'ApiError';

    this.status = problem?.status ?? fallbackStatus;
    this.title = problem?.title;
    this.detail = problem?.detail;
    this.errorCode = problem?.extensions?.errorCode as string | undefined;
    this.traceId = problem?.extensions?.traceId as string | undefined;
  }

  get isNotFount() {
    return this.status === 404;
  }
  get isUnauthorized() {
    return this.status === 401;
  }
  get isForbidden() {
    return this.status === 403;
  }
  get isConflict() {
    return this.status === 409;
  }
  get isServerError() {
    return this.status >= 500;
  }
}
