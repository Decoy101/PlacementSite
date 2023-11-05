// import { useNavigate } from "react-router-dom";

import { IconBell } from "@/components/icons";
import { Navbar, ScrollArea, Divider, Text, Image, Space } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import NavbarAsideSkeleton from "./NavbarAsideSkeleton";
import NavbarFooter from "../NavbarFooter/NavbarFooter";
import { useStyles } from "./NavbarAside.styles";
import { LinksGroup } from "../NavbarLink/NavbarLink";
import { NavbarAsideProps } from "./NavbarAside.types";
import { navStore } from "@/data/store/navbar.store";
import { useAtomValue } from "jotai";
import { appPaths } from "@/routes/paths";
import CGCLogo from "../../../../assets/cgc-nav-logo.png";
function NavbarAside({ isSliding, footerMenu }: NavbarAsideProps) {
  const isAsideFullWidth = useAtomValue(navStore.isAsideFullWidth);
  const isLoadingNavbar = useAtomValue(navStore.isLoadingNavbarAtom);
  const truncateMaxWidth = 130;
  const navigate = useNavigate();

  const { classes } = useStyles({
    showFullWidth: isAsideFullWidth,
    isSliding,
    truncateMaxWidth,
  });

  return (
    <>
      <div
        className={classes.aside}
        style={{ minWidth: isSliding ? 380 : "unset" }}
      >
        {/* <Image src={CGCLogo} fit="contain" height={80} width={200} ml={"xs"} /> */}
        {/* Here is where the logo goes */}
        <Space h={"xl"} />
        <Navbar.Section className={classes.linksOptions} mt={"xl"}>
          <LinksGroup
            icon={<IconBell />}
            label="Home"
            width={280}
            isActive={false}
          />
          <LinksGroup
            icon={<IconBell />}
            label="Companies"
            width={280}
            isActive={false}
            handleClick={() => navigate(appPaths.companies)}
          />
          <LinksGroup
            icon={<IconBell />}
            label="Academic Calendar"
            width={280}
            isActive={false}
            handleClick={() => navigate(appPaths.calendar)}
          />
          <LinksGroup
            icon={<IconBell />}
            label="Work Ex"
            width={280}
            isActive={false}
          />
          <Divider mt="md" />
        </Navbar.Section>
        <Navbar.Section grow component={ScrollArea} className={classes.links}>
          {isLoadingNavbar ? (
            <NavbarAsideSkeleton />
          ) : (
            <>
              <Text fw={400} mt={"lg"} fz={"sm"} c={"purple"}>
                Quick Links
              </Text>
              <LinksGroup icon={null} label="College Site" width={280} />
              <LinksGroup icon={null} label="AIMS" width={280} />
              <Text mt={"lg"} fz={"sm"} fw={400} c={"purple"}>
                Support
              </Text>
              <LinksGroup icon={null} label="cgc@iiitdwd.ac.in" />
              <LinksGroup icon={null} label="velocity@iiitdwd.ac.in" />
              <Text mt={"lg"} fz={"sm"} fw={400} c={"purple"}>
                Module Designer
              </Text>
              <LinksGroup icon={null} label="Aman Gupta" />
            </>
          )}
        </Navbar.Section>
        <NavbarFooter
          name={footerMenu.name}
          email={footerMenu.email}
          menu={footerMenu.menu}
          avatar={footerMenu.avatar}
        />
      </div>
    </>
  );
}
export default NavbarAside;
