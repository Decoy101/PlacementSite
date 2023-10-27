/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";
import { ContentValidation } from "@/projectX-sdk";
export type ValidationErrorsType = {
  required?: string;
  pattern?: string;
  custom?: string;
  maxLength?: string;
  minLength?: string;
};

export type ValidationObject =
  | {
      rules: ContentValidation & { validate?: (value: string) => boolean };
      messages: ValidationErrorsType & { validate?: string };
    }
  | undefined;
export type FormInputType = {
  id: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  showCheckMark?: boolean;
  required?: boolean;
  validations?: ValidationObject;
  control?: Control<any, any>;
};
