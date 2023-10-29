import { useState } from "react";
import { NavbarAsideProps } from "./NavbarAside/NavbarAside.types";
import { Navbar, ScrollArea, UnstyledButton, Text } from "@mantine/core";
import { NavbarAside } from "./NavbarAside";
import { useStyles } from "./NavbarTwoLevels.styles";
function NavbarTwoLevels({ footerMenu }: NavbarAsideProps) {
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const { classes } = useStyles();
  return (
    <Navbar width={{ sm: 200 }} hiddenBreakpoint="sm">
      <Navbar.Section grow className={classes.wrapper}>
        <NavbarAside footerMenu={footerMenu} isSliding={isSliding} />
      </Navbar.Section>
    </Navbar>
  );
}

export default NavbarTwoLevels;
