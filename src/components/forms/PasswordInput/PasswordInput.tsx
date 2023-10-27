import { memo } from "react";
import { PasswordInput } from "@mantine/core";
import { HFPasswordInputProps } from "./PasswordInput.types";
import { IconEye, IconEyeOff } from "@/components/icons";
import { useMantineTheme } from "@mantine/core";

function HFPasswordInput({
  id,
  label,
  placeholder,
  helperText,
  ...props
}: HFPasswordInputProps) {
  const theme = useMantineTheme();

  return (
    <PasswordInput
      id={id}
      label={label}
      placeholder={placeholder}
      description={helperText}
      visibilityToggleIcon={({ reveal }) =>
        reveal ? (
          <IconEyeOff color={theme.colors.dark[2]} />
        ) : (
          <IconEye color={theme.colors.dark[2]} />
        )
      }
      {...props}
    />
  );
}

export default memo(HFPasswordInput);
