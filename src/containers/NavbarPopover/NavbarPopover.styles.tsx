import { createStyles } from "@mantine/core";

export const useStyles = createStyles(
  (theme, { truncateMaxWidth }: { truncateMaxWidth: number }) => ({
    themeSwitcher: {
      display: "flex",
      alignItems: "center",
    },
    avatar: {
      gap: theme.spacing.sm,
      "> div:nth-of-type(2)": {
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[1]
            : theme.colors.black,
      },
    },
    truncate: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: truncateMaxWidth,
    },
  })
);
