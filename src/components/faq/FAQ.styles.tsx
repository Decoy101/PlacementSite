import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gapColumn: `calc(${theme.spacing.xl}*2)`,
    paddingBottom: theme.spacing.xl,
  },
}));
