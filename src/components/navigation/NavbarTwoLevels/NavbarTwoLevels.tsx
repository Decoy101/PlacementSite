import { useState } from "react";

import { Navbar } from "@mantine/core";
import { NavbarAside } from "./NavbarAside";
import { useStyles } from "./NavbarTwoLevels.styles";
import { NavbarFooterProps } from "./NavbarFooter/NavbarFooter.types";

type NavbarProps = {
  hidden: boolean;
  footerMenu: NavbarFooterProps;
};
function NavbarTwoLevels({ footerMenu, hidden }: NavbarProps) {
  const [isSliding] = useState<boolean>(false);
  const { classes } = useStyles();
  return (
    <Navbar
      width={{ sm: 280 }}
      hiddenBreakpoint="sm"
      className={classes.navbar}
      hidden={hidden}
    >
      <Navbar.Section grow className={classes.wrapper}>
        <NavbarAside footerMenu={footerMenu} isSliding={isSliding} />
      </Navbar.Section>
    </Navbar>
  );
}

export default NavbarTwoLevels;
