import { clientFetcher } from './fetcher.client';
import { UpdateUserDTO, UserDTO } from '../types/dto/user';
import { serverFetcher } from './fetcher.server';

export const userService = {
  getMe: (token: string, signal?: AbortSignal) =>
    serverFetcher<UserDTO>('user', '/users/me', {
      headers: { Authorization: `Bearer ${token}` },
      signal,
    }),

  updateProfile: (token: string, dto: UpdateUserDTO) =>
    clientFetcher<void>('user', '/users/me', {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(dto),
    }),

  updateAvatar: (token: string, file: File) => {
    const form = new FormData();
    form.append('file', file);

    return clientFetcher<void>('user', '/users/me/avatar', {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    });
  },

  deleteAccount: (token: string) =>
    clientFetcher<void>('user', '/users/me', {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    }),
};
