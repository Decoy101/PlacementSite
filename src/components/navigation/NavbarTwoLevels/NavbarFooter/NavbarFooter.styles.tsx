import { createStyles } from "@mantine/core";

export const useStyles = createStyles(
  (theme, { showFullWidth }: { showFullWidth: boolean }) => ({
    navFooter: {
      padding: `0px ${theme.spacing.xl} ${theme.spacing.sm} ${theme.spacing.md}`,
    },
    footerInfoContainer: {
      flexFlow: showFullWidth ? "row" : "column-reverse",
      justifyContent: "space-between",
      marginBottom: theme.spacing.md,
      gap: 0,
      "> button": {
        marginBottom: showFullWidth ? 0 : theme.spacing.xl,
      },
    },
    footerMenuTarget: {
      display: "flex",
      padding: theme.spacing.xs,
      borderRadius: theme.radius.xs,
      alignItems: "center",
      "&:hover, &[data-expanded]": {
        flexGrow: 1,
        cursor: "pointer",
        div: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
      "&:hover": {
        backgroundColor: theme.colors.dark[3],
      },
      "&[data-expanded]": {
        backgroundColor: theme.fn.primaryColor(),
      },
    },
    footerNotificationsTarget: {
      padding: theme.spacing.xs,
      borderRadius: theme.radius.xs,
      marginLeft: theme.spacing.xxs,
      "&:hover, &[data-expanded]": {
        div: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
      "&:hover": {
        backgroundColor: theme.colors.dark[3],
      },
      "&[data-expanded]": {
        backgroundColor: theme.fn.primaryColor(),
      },
    },
    footerInfo: {
      marginLeft: theme.spacing.sm,
      "> div": {
        "&:first-of-type": {
          marginBottom: 2,
          lineHeight: "normal",
        },
        "&:nth-of-type(2)": {
          lineHeight: theme.fontSizes.sm,
          color: theme.fn.lighten(theme.colors.dark[2], 0.3),
        },
      },
    },
    noMarginTop: {
      marginTop: "0px !important",
    },
  })
);
