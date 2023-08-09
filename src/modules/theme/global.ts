import { CSSObject } from "@mantine/core";

export const globalStyles = (): CSSObject => ({
  html: {
    height: "100vh",
  },
  body: {
    margin: "0",
    padding: "0",
    overflowX: "hidden",
    height: "100vh",
  },
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
});
