import { ValidationObjectSchema, emailRegex } from "@/common/utils";

import { IAccount } from "@/projectX-sdk";

import strings from "@/common/strings/validations.json";

/**
 * Get validation schema for Login Form
 */
export const validationSchema: ValidationObjectSchema<IAccount> = {
  email: {
    rules: {
      regex: emailRegex,
    },
    messages: {
      required: strings.emptyEmail,
      pattern: strings.invalidEmail,
      custom: " ",
    },
  },
  password: {
    rules: {},
    messages: {
      required: strings.emptyPassword,
      custom: strings.invalidCredentials,
    },
  },
};
