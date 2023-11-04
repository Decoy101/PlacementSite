import { Divider, UnstyledButton, Text } from "@mantine/core";
import { memo } from "react";
import { IconXClose } from "@/components/icons";

import { useStyles } from "./NotificationToaster.styles";
import { NotificationToasterProps } from "./NotificationToaster.types";

function NotificationToaster({
  type,
  message,
  rightContent,
}: NotificationToasterProps) {
  const { classes } = useStyles();

  return (
    <>
      <div className={`bg-${type}`}></div>
      <div className="notification">
        <span>{message}</span>
        <Divider orientation="vertical" ml="lg" mr="lg" sx={{ height: 24 }} />
        <UnstyledButton
          className={classes.closeBtn}
          onClick={rightContent.action}
        >
          {rightContent.icon ? rightContent.icon : <IconXClose color="white" />}
          <Text color="white" fw={600}>
            {rightContent.text ? rightContent.text : "Close"}
          </Text>
        </UnstyledButton>
      </div>
    </>
  );
}

export default memo(NotificationToaster);
