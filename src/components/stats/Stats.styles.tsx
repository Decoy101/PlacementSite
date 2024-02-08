import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    padding: `calc(${theme.spacing.xl}*1.5)`,
    borderRadius: theme.radius.md,
    display: "flex",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  icon: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.lg,
    color: theme.colors[theme.primaryColor][6],
  },
  statsWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  stat: {
    padding: theme.spacing.xl,
    minHeight: `calc(${theme.spacing.xl}*10)`,
    minWidth: `calc(${theme.spacing.xl}*8)`,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.white,
    margin: theme.spacing.sm,
  },

  label: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colors.gray[6],
    lineHeight: 1.2,
  },

  value: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    color: theme.black,
  },

  count: {
    color: theme.colors.gray[6],
  },

  day: {
    fontSize: rem(44),
    fontWeight: 700,
    color: theme.white,
    lineHeight: 1,
    textAlign: "center",
    marginBottom: 5,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  month: {
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    lineHeight: 1,
    textAlign: "center",
  },

  controls: {
    display: "flex",
    flexDirection: "column",
    marginRight: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 0,
      marginBottom: theme.spacing.xl,
    },
  },

  date: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  control: {
    height: rem(28),
    width: "100%",
    color: theme.colors[theme.primaryColor][2],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.md,
    transition: "background-color 50ms ease",

    [theme.fn.smallerThan("xs")]: {
      height: rem(34),
      width: rem(34),
    },

    "&:hover": {
      backgroundColor: theme.colors[theme.primaryColor][5],
      color: theme.white,
    },
  },

  controlIcon: {
    [theme.fn.smallerThan("xs")]: {
      transform: "rotate(-90deg)",
    },
  },
}));
