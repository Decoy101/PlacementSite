import { Center, Text, Box, useMantineTheme } from "@mantine/core";

import { IconCheck } from "@/components/icons";

import { PasswordRequirementsProps } from "./PasswordInput.types";

function PasswordRequirements({ meets, label }: PasswordRequirementsProps) {
  const theme = useMantineTheme();

  return (
    <Text color={meets ? "teal" : "dark.1"} mt={5} size="sm">
      <Center inline>
        {meets ? <IconCheck color={theme.colors.green[9]} /> : <></>}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

export default PasswordRequirements;
