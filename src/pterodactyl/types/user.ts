export type CreateUserParams = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password?: string;
  language?: string;
};

export type UpdateUserParams = {
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  password?: string;
  language?: string;
};

export interface User {
  id: number;
  external_id: string;
  uuid: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  language: string;
  root_admin: boolean;
  "2fa": boolean;
  created_at: string;
  updated_at: string;
}
