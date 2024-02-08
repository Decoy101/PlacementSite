import { Group, Paper, Text, SimpleGrid } from "@mantine/core";
import { Company } from "../Company.types";
function CompanyLinkBlock({ name, formLink, lastDateToApply, roles }: Company) {
  return (
    <>
      <a href={formLink} style={{ textDecoration: "none" }} target="blank">
        <Paper shadow="md" radius="md" p="xl" withBorder>
          <SimpleGrid cols={3}>
            <Text>{name}</Text>
            <Group>
              <Text>Roles:</Text>
              <Text>{roles}</Text>
            </Group>
            <Group>
              <Text>Last Date To Apply:</Text>
              <Text>{lastDateToApply}</Text>
            </Group>
          </SimpleGrid>
        </Paper>
      </a>
    </>
  );
}
export default CompanyLinkBlock;
