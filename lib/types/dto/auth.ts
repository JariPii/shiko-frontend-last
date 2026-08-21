export type AuthResponseDTO = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type RegisterDTO = {
  email: string;
  password: string;
  role: string;
};

export type RefreshDTO = {
  refreshToken: string;
};

export type LogoutDTO = {
  refreshToken: string;
};
