import { FieldError } from "react-hook-form";

import {
  ValidationErrorsType,
  ValidationObject,
} from "@/components/forms/types";

export type ValidationObjectSchema<T> = {
  [key in keyof T]: ValidationObject;
};

/**
 * Extract validation message from react-hook-form
 */
export const getValidationMessage = (
  validations: ValidationObject,
  error: FieldError | undefined
) =>
  validations?.messages[
    (error as FieldError)?.type as keyof ValidationErrorsType
  ];

/**
 * Validations
 */
export const emailRegex =
  "^[+_.0-9a-zA-Z-]+@([0-9a-z][0-9a-z-]+)+((.)[a-z]{2,})+$";
export const passwordRegex =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]).{8,}$";
export const passwordRequirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
  { re: /^.{8,}$/, label: "8+ characters required" },
];
