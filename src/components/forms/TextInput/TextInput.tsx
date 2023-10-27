import { memo } from "react";

import { TextInput } from "@mantine/core";

import { HFTextInputProps } from "./TextInput.types";

function HFTextInput({
  id,
  label,
  placeholder,
  helperText,
  type = "text",
  ...props
}: HFTextInputProps) {
  return (
    <>
      <TextInput
        id={id}
        label={label}
        placeholder={placeholder}
        type={type}
        description={helperText}
        {...props}
      />
    </>
  );
}

export default memo(HFTextInput);
