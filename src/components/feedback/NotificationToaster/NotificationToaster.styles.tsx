import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  closeBtn: {
    display: "flex",
    alignItems: "center",
    paddingRight: theme.spacing.md,
    gap: theme.spacing.xs,
  },
}));
