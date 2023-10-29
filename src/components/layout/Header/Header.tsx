import { Flex, Text, Burger, Header as MantineHeader } from "@mantine/core";
import { HeaderProps } from "./Header.types";

function Header({ opened, toggleBar, ...props }: HeaderProps) {
  return (
    <MantineHeader height={60} {...props}>
      <Flex>
        <Text>IIIT DWD Logo</Text>
        <Burger opened={opened} onClick={toggleBar} size="sm" mr="xl" />
      </Flex>
    </MantineHeader>
  );
}

export default Header;
