import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  navbar: {
    height: "100vh",
    top: 0,
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      height: "calc(100vh - 3.75rem)",
    },
  },
  navbarRight: {
    position: "fixed",
    left: 0,
    bottom: 0,
    zIndex: 99,
    width: "216px",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    height: "100vh",
    transform: "translateX(280px)",
    transition: "transform 0.3s",
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      height: "calc(100vh - 3.75rem)",
      width: "100vh",
      transform: "translateX(0px)",
    },
  },
  navbarRightSliding: {
    transform: "translateX(64px) !important",
  },
  wrapper: {
    display: "flex",
    position: "relative",
    overflowX: "hidden",
  },
  navContent: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    display: "flex",
    flexDirection: "column",
    maxHeight: "100vh",
    position: "absolute",
    height: "100vh",
    width: "calc(100vh - 64px)",
    left: "100vh",
    transition: "left 0.3s",
    paddingInline: theme.spacing.md,
  },
  navSection: {
    padding: `0px ${theme.spacing.md}`,
    margin: "0px 0px 4px 0px",
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 500,
    lineHeight: "14.12px",
    color: theme.colors.dark[2],
    "&:not(:first-of-type)": {
      marginTop: theme.spacing.md,
    },
  },
  sliding: {
    left: 64,
  },
  leftPanelContainer: {
    paddingInline: theme.spacing.md,
    paddingTop: theme.spacing.lg,
  },
  backLeftPanel: {
    display: "flex",
    alignItems: "center",
    marginBlock: theme.spacing.sm,
    borderRadius: theme.radius.xs,
    paddingInline: theme.spacing.xs,
    paddingBlock: theme.radius.xs,
    transition: "background-color 0.2s",
    "> svg:first-of-type": {
      marginRight: theme.spacing.xs,
    },
    "&:hover": {
      backgroundColor: theme.colors.dark[3],
      "> p": {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
      svg: {
        path: {
          stroke: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },
  },
  rightPanelTruncate: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 600,
    lineHeight: "normal",
    marginLeft: theme.spacing.xs,
    maxWidth: 130,
    color: theme.colors.dark[2],
  },
}));
