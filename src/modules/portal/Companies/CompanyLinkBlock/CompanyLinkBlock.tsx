import { Group, Paper, Text } from "@mantine/core";
import { Company } from "../Company.types";
function CompanyLinkBlock({ name, formLink, lastDateToApply, roles }: Company) {
  return (
    <>
      <a href={formLink} style={{ textDecoration: "none" }} target="blank">
        <Paper shadow="md" radius="md" p="xl" withBorder>
          <Group position="apart">
            <Text>{name}</Text>
            <Group>
              <Text>Roles:</Text>
              <Text>{roles}</Text>
            </Group>
            <Group>
              <Text>Last Date To Apply:</Text>
              <Text>{lastDateToApply}</Text>
            </Group>
          </Group>
        </Paper>
      </a>
    </>
  );
}
export default CompanyLinkBlock;
