import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#04091E",
    color: theme.colors.gray[0],
    padding: `calc(${theme.spacing.xl} * 1.5) calc(${theme.spacing.xl} * 10)`,
  },
}));
