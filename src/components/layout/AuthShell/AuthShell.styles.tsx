import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  loginContainer: {
    padding: `calc(${theme.spacing.lg}*2)`,
    width: `calc(${theme.spacing.xl}*20)`,
  },

  banner: {
    minHeight: `calc(${theme.spacing.xl}*2)`,
  },

  input: {
    paddingBottom: `calc(${theme.spacing.xl}* 10)`,
  },
}));
