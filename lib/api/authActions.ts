import { clientFetcher } from './fetcher.client';
import type {
  AuthResponseDTO,
  LoginDto,
  LogoutDTO,
  RefreshDTO,
  RegisterDTO,
} from '../types/dto/auth';

export const authService = {
  register: (dto: RegisterDTO) =>
    clientFetcher<AuthResponseDTO>('auth', '/auth/register', {
      method: 'POST',
      body: JSON.stringify(dto),
    }),

  login: (dto: LoginDto) =>
    clientFetcher<AuthResponseDTO>('auth', '/auth/login', {
      method: 'POST',
      body: JSON.stringify(dto),
    }),

  refresh: (dto: RefreshDTO) =>
    clientFetcher<AuthResponseDTO>('auth', '/auth/refresch', {
      method: 'POST',
      body: JSON.stringify(dto),
    }),

  logout: (dto: LogoutDTO) =>
    clientFetcher<AuthResponseDTO>('auth', '/auth/logout', {
      method: 'POST',
      body: JSON.stringify(dto),
    }),

  logoutAll: (token: string) =>
    clientFetcher<void>('auth', '/auth/logout-all', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    }),
};
