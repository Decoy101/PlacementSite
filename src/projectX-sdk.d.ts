export interface ILogin {
  email: string;
  password: string;
}

export interface IResetPassword {
  password: string;
}

export interface ContentValidation {
  regex?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export type IUser = {
  name: string;
  email: string;
};
