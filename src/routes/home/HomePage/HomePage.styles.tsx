import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  coverText: {
    display: "flex",
    flexDirection: "column",
    color: "#ffffff",
    zIndex: 100,
  },

  recruitWrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  statsWrapper: {
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },
  teamWrapper: {
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  contactUsWrapper: {
    paddingBottom: `calc(${theme.spacing.xl} * 5)`,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    textDecoration: "underline",
    textUnderlineOffset: 10,
    textDecorationThickness: `calc(${theme.spacing.sm} * 0.3)`,
  },

  accordionItem: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  card: {
    width: `calc(${theme.spacing.xl}*15)`,
    marginTop: theme.spacing.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },
}));
