import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconBell } from "@/components/icons";
import { Navbar, Flex, ScrollArea, Divider } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import NavbarAsideSkeleton from "./NavbarAsideSkeleton";
import NavbarFooter from "../NavbarFooter/NavbarFooter";
import { useStyles } from "./NavbarAside.styles";
import { LinksGroup } from "../NavbarLink/NavbarLink";
import { NavbarAsideProps } from "./NavbarAside.types";
function NavbarAside({ isSliding, footerMenu }: NavbarAsideProps) {
  const [isAsideFullWidth, setIsAsideFullWidth] = useState(true);

  const truncateMaxWidth = 130;
  const { classes, theme } = useStyles({
    showFullWidth: isAsideFullWidth,
    isSliding,
    truncateMaxWidth,
  });

  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <>
      <div
        className={classes.aside}
        style={{ minWidth: isSliding ? 280 : "unset" }}
      >
        <Navbar.Section className={classes.linksOptions}>
          <LinksGroup
            icon={<IconBell />}
            label="Home"
            width={280}
            isActive={false}
          />
          <LinksGroup
            icon={<IconBell />}
            label="Home"
            width={280}
            isActive={false}
          />
          <LinksGroup
            icon={<IconBell />}
            label="Home"
            width={280}
            isActive={false}
          />
          <LinksGroup
            icon={<IconBell />}
            label="Home"
            width={280}
            isActive={false}
          />
          <Divider mt="md" />
        </Navbar.Section>
        <Navbar.Section grow component={ScrollArea} className={classes.links}>
          <NavbarAsideSkeleton />
          {/* <Flex align="center" direction="column" className={classes.listSites}>
                    {isLoadingNavbar ? (
                        <NavbarAsideSkeleton />
                    ) : (
                        asideLinks.map((linksGroup, index) => (
                            <Fragment key={linksGroup.name}>
                                {index > 0 && <Divider mt="md" style={{ width: '100%' }} />}
                                <p className={classes.navSection}>{asideLinkGroupConfig[linksGroup.name]}</p>
                                {linksGroup.links.map((link) => (
                                    <div
                                        style={{ width: '100%' }}
                                        key={link.id}
                                        onMouseEnter={() => {
                                            if (link.onHover && !matches && isAsideFullWidth) link.onHover(false)
                                        }}
                                        onClick={() => {
                                            if (link.onHover && (matches || !isAsideFullWidth)) link.onHover(true)
                                        }}>
                                        <LinksGroup
                                            icon={link.icon}
                                            image={link.image}
                                            label={link.label}
                                            width={280}
                                            isActive={link.id === activeLinkId}
                                            onlyIcon={!isAsideFullWidth}
                                            handleClick={() => {
                                                if (link.onClickUrl) {
                                                    navigate(link.onClickUrl)
                                                }
                                            }}
                                        />
                                    </div>
                                ))}
                            </Fragment>
                        ))
                    )}
                </Flex> */}
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
