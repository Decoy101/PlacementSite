import { globalStyles } from "./global";
import { MantineThemeOverride } from "@mantine/core";

export const customTheme: MantineThemeOverride = {
  colorScheme: "light",
  globalStyles: globalStyles,
  fontSizes: {
    xxs: "10px",
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
    xxl: "30px",
  },
  spacing: {
    xxs: "6px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "40px",
  },
  radius: {
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "32px",
  },
  primaryShade: 6,
};
