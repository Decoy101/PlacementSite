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

export interface IAccount {
  email: string;
}

export enum UserRoleEnum {
  STUDENT = "student",
  CGC = "cgc",
}

export interface IAvatar {
  image?: string;
  color?: string;
}
