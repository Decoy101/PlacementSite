export interface IAccount {
  email: string;
  password: string;
}
export interface INewStudent {
  email: string;
  password: string;
  confirmPassword?: string;
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
  email: string;
  uid: string;
  role: string;
};
