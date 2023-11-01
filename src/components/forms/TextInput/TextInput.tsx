import { memo, useState } from "react";
import { useController } from "react-hook-form";

import { TextInput, useMantineTheme } from "@mantine/core";

import { getValidationMessage } from "@/common/utils";
import { IconCheck } from "@/components/icons";

import { HFTextInputProps } from "./TextInput.types";

function HFTextInput({
  id,
  label,
  placeholder,
  helperText,
  type = "text",
  showCheckMark = true,
  required = false,
  validations,
  control,
  ...props
}: HFTextInputProps) {
  const [canRenderCheckmark, setCanRenderCheckmark] = useState(false);
  const theme = useMantineTheme();
  const {
    field,
    fieldState: { error, isDirty, invalid },
  } = useController({
    control,
    name: id,
    defaultValue: "",
    rules: {
      required: required,
      minLength: validations?.rules?.minLength,
      maxLength: validations?.rules?.maxLength,
      pattern: new RegExp(validations?.rules?.regex || ""),
      validate: validations?.rules?.validate,
    },
  });

  const rightCheckMark = !invalid &&
    isDirty &&
    showCheckMark &&
    canRenderCheckmark && <IconCheck color={theme.colors.green[9]} />;

  return (
    <TextInput
      id={id}
      type={type}
      label={label}
      placeholder={placeholder}
      description={helperText}
      rightSection={rightCheckMark}
      error={getValidationMessage(validations, error)}
      {...field}
      {...props}
      onBlur={(event) => {
        let value = event.target.value;
        value = value.trimStart().trimEnd();
        if (isDirty) {
          field.onChange(value);
          field.onBlur();
          setCanRenderCheckmark(true);
        }
        props?.onBlur && props.onBlur(event);
      }}
    />
  );
}

export default memo(HFTextInput);
