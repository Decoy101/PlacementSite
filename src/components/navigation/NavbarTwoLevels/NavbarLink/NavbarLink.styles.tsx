import { createStyles } from "@mantine/core";

import { getColorBySchema } from "@/common/utils/colors.utils";

export const useStyles = createStyles(
  (theme, { onlyIcon, width }: { onlyIcon: boolean; width?: number }) => ({
    control: {
      fontWeight: 500,
      display: "block",
      width: onlyIcon ? "48px" : "100%",
      padding: onlyIcon ? `6px 0px` : `6px 8px`,
      margin: onlyIcon ? "0px 8px" : "0px",
      color: getColorBySchema(theme, 1),
      fontSize: theme.fontSizes.sm,
      borderRadius: theme.radius.xs,
      transition: "all 0.2s",

      "&:hover": {
        backgroundColor: theme.colors.dark[3],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },

      "svg path": {
        stroke: getColorBySchema(theme, 1),
      },
    },

    active: {
      backgroundColor: `${theme.fn.primaryColor()} !important`,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },

    linkContainer: {
      display: "flex",
      alignItems: "center",
      height: 20,
    },
    imgIcon: {
      height: 16,
      width: 16,
    },
    truncate: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: width ? `calc(${width}px - 75px)` : "100%",
      whiteSpace: "nowrap",
    },
  })
);
