import { ForwardRefRenderFunction, forwardRef, memo } from "react";

import { Button } from "@mantine/core";

import { LoadingButtonProps } from "./LoadingButton.types";

const LoadingButton: ForwardRefRenderFunction<
  HTMLButtonElement,
  LoadingButtonProps
> = ({ isLoading, disabled, children, ...buttonProps }, ref) => {
  return (
    <Button
      ref={ref}
      loading={isLoading}
      loaderPosition="center"
      disabled={isLoading || disabled}
      {...buttonProps}
    >
      {!isLoading && children}
    </Button>
  );
};

export default memo(forwardRef(LoadingButton));
