import { PasswordInputProps } from "@mantine/core";
import { FormInputType } from "..";

export type HFPasswordInputProps = Omit<FormInputType, "showCheckMark"> &
  PasswordInputProps & {
    forgotPassword?: {
      text: string;
      link: string;
    };
    showTooltip?: boolean;
  };

export type PasswordRequirementsProps = {
  meets: boolean;
  label: string;
};
