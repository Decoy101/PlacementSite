import { createStyles } from "@mantine/core";

type NavbarAsideStylesProps = {
  showFullWidth: boolean;
  isSliding: boolean;
  truncateMaxWidth: number;
};

export const useStyles = createStyles(
  (
    theme,
    { showFullWidth, isSliding, truncateMaxWidth }: NavbarAsideStylesProps
  ) => ({
    aside: {
      flex: showFullWidth && !isSliding ? "1 1 100%" : "0 0 64px",
      display: "flex",
      flexDirection: "column",
      alignItems: showFullWidth && !isSliding ? "flex-start" : "center",
      maxHeight: "100vh",
      maxWidth: showFullWidth && !isSliding ? "100%" : "64px",
      "> div": {
        width: "100%",
      },
    },
    links: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: showFullWidth && !isSliding ? "0px 16px" : "0px 0px",
      overflowX: "hidden",
    },
    linksOptions: {
      paddingInline: theme.spacing.md,
    },
    listSites: {
      paddingTop: theme.spacing.sm,
      paddingBottom: theme.spacing.sm,
    },
    navSection: {
      padding: `11px ${theme.spacing.xs}`,
      margin: 0,
      textAlign: showFullWidth && !isSliding ? "left" : "center",
      textTransform: "uppercase",
      fontSize:
        showFullWidth && !isSliding ? theme.fontSizes.xs : theme.fontSizes.xxs,
      fontWeight: 500,
      lineHeight: "14px",
      color: theme.colors.dark[2],
      width: "100%",
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.sm,
      },
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
