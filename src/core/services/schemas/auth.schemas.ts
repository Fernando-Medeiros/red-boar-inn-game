export type AccessTokenSchema = {
  pubId: string;
  access: string;
  refresh: string;
  type?: string;
};

export type RefreshTokenSchema = {
  pubId: string;
  access: string;
  refresh: string;
  type?: string;
};

export type LoginSchema = {
  email: string;
  password: string;
};
