import { useRef } from "react";
import { Group, Text, Menu, Divider, Tooltip } from "@mantine/core";
import { useStyles } from "./NavbarPopover.styles";

import { useNavigate } from "react-router-dom";
import { IAvatar } from "@/projectX-sdk";
import { AvatarImage } from "@/components/core/AvatarImage";
import { IconBell, IconSettings, IconLogout } from "@/components/icons";
import { signOutUser } from "@/firebase";
type NavbarPopoverProps = {
  name: string;
  email: string;
  avatar?: IAvatar;
};
function NavbarPopover({ name, email, avatar }: NavbarPopoverProps) {
  const truncateMaxWidth = 130;
  const { classes } = useStyles({ truncateMaxWidth });
  //   const matches = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const navigate = useNavigate();
  const userNameRef = useRef<HTMLDivElement>(null);
  const showUserTooltip =
    userNameRef?.current?.offsetWidth === truncateMaxWidth;

  const signOut = async () => {
    await signOutUser();
  };
  return (
    <>
      <Menu.Label>Account</Menu.Label>
      <Tooltip
        sx={{ position: "fixed" }}
        withArrow
        arrowSize={6}
        events={{
          hover: showUserTooltip,
          focus: showUserTooltip,
          touch: showUserTooltip,
        }}
        label={name}
      >
        <Menu.Item>
          <Group
            className={classes.avatar}
            onClick={() => navigate("/profile")}
          >
            <AvatarImage
              alt={name}
              size={31}
              src={avatar?.image}
              bgColor={avatar?.color}
            />
            <div>
              <Text
                size="sm"
                weight={600}
                ref={userNameRef}
                className={classes.truncate}
              >
                {name}
              </Text>

              <Text color="dimmed" size="xs">
                {email}
              </Text>
            </div>
          </Group>
        </Menu.Item>
      </Tooltip>
      <Menu.Item icon={<IconBell />}>Notifications Settings</Menu.Item>
      <Menu.Item icon={<IconSettings />}>Change Password</Menu.Item>
      <Divider my="sm" color="dark.1" />
      <Menu.Item icon={<IconLogout />} onClick={signOut}>
        Sign Out
      </Menu.Item>
    </>
  );
}

export default NavbarPopover;
