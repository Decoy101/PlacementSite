import { useStyles } from "./AuthShell.styles";
import { Flex, Paper } from "@mantine/core";
import { Outlet } from "react-router-dom";

function AuthShell() {
  const { classes } = useStyles();
  return (
    <>
      <Flex align={"flex-start"} justify={"center"}>
        <div className={classes.loginContainer}>
          <Paper shadow="xl" radius="md" withBorder p="xl">
            <Outlet />
          </Paper>
        </div>
      </Flex>
    </>
  );
}

export default AuthShell;
