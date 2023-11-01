import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  forgotPasswordLink: {
    textDecoration: "none",
    color: theme.colors.dark[0],
    fontWeight: 600,
    fontSize: theme.fontSizes.sm,
  },
}));
