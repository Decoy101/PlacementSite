import { Announcements } from "./components/Announcements";
import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
  rem,
} from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

const data = [
  {
    label: "Total Companies",
    stats: "45",
    progress: 65,
    color: "teal",
    icon: "up",
  },
  {
    label: "Total Students",
    stats: "255",
    progress: 72,
    color: "blue",
    icon: "up",
  },
  {
    label: "Students Placed",
    stats: "47",
    progress: 52,
    color: "red",
    icon: "down",
  },
] as const;

function Dashboard() {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    return (
      <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon
                  style={{ width: rem(20), height: rem(20) }}
                  stroke={1.5}
                />
              </Center>
            }
          />

          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });
  return (
    <>
      <SimpleGrid cols={3} mb={"xl"}>
        {stats}
      </SimpleGrid>
      <Announcements />
    </>
  );
}
export default Dashboard;
