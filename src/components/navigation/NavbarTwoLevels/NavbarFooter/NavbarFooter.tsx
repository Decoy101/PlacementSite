/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  Navbar,
  Group,
  Text,
  Divider,
  Menu,
  useMantineTheme,
  UnstyledButton,
} from "@mantine/core";
import NavbarFooterSkeleton from "./NavbarFooterSkeleton";
import { NavbarFooterProps } from "./NavbarFooter.types";
import { useStyles } from "./NavbarFooter.styles";
import { AvatarImage } from "@/components/core/AvatarImage";
import { IconBell } from "@/components/icons";
import { useAtomValue } from "jotai";
import { navStore } from "@/data/store/navbar.store";
function NavbarFooter({ name, email, avatar, menu }: NavbarFooterProps) {
  const isAsideFullWidth = useAtomValue(navStore.isAsideFullWidth);
  const isLoadingNavbar = useAtomValue(navStore.isLoadingNavbarAtom);
  const { classes } = useStyles({ showFullWidth: isAsideFullWidth });
  const theme = useMantineTheme();
  return (
    <>
      <Navbar.Section className={classes.navFooter}>
        <Divider my="md" className={classes.noMarginTop} />
      </Navbar.Section>
      <Group className={classes.footerInfoContainer}>
        <>
          <Menu
            width={240}
            position="top"
            transitionProps={{ transition: "fade" }}
          >
            <Menu.Target>
              <div className={classes.footerMenuTarget}>
                <AvatarImage
                  alt={name}
                  size={36}
                  bgColor={avatar?.color}
                  src={avatar?.image}
                />
                {isAsideFullWidth && (
                  <div className={classes.footerInfo}>
                    <Text
                      size="md"
                      weight={600}
                      className="word-break"
                      lineClamp={1}
                    >
                      {name}
                    </Text>

                    <Text color="dimmed" size="xs">
                      {email}
                    </Text>
                  </div>
                )}
              </div>
            </Menu.Target>

            <Menu.Dropdown
              sx={{
                transform: isAsideFullWidth
                  ? "translateX(20%)"
                  : "translateX(10%)",
              }}
            >
              {menu}
            </Menu.Dropdown>
          </Menu>
          <Menu
            width={432}
            position="top-start"
            transitionProps={{ transition: "pop-top-left" }}
          >
            <Menu.Target>
              <UnstyledButton className={classes.footerNotificationsTarget}>
                <IconBell color={theme.colors.dark[1]} />
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown sx={{ position: "fixed" }}>
              {/* <NavbarFooterNotifications /> */}
            </Menu.Dropdown>
          </Menu>
        </>
      </Group>
    </>
  );
}

export default NavbarFooter;
