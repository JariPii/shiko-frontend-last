export type UserDTO = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string | null;
  avatarUrl?: string | null;
  rowVersion: string;
};

export type UpdateUserDTO = {
  id: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  avatarUrl?: string | null;
  rowVersion: string;
};

export type UpdateUserFromValuesDTO = Pick<UpdateUserDTO, 'id'> & {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};
