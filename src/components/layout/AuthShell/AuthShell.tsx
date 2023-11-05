import { useStyles } from "./AuthShell.styles";
import { Flex, Paper } from "@mantine/core";
import { Outlet } from "react-router-dom";
import CGCLogo from "../../../assets/cgc-full-logo.jpeg";
function AuthShell() {
  const { classes } = useStyles();
  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <img src={CGCLogo} alt="CGC Logo" />
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
