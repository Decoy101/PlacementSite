import { useState } from "react";

import {
  UnstyledButton,
  Text,
  Paper,
  Group,
  RingProgress,
} from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useStyles } from "./Stats.styles";

function Stats() {
  const { classes, theme } = useStyles();
  const [year, setYear] = useState(new Date().getFullYear());

  const placementData = [
    {
      year: 2023,
      placedPercentage: 68,
      avgCTC: "11.5",
      maxCTC: "35",
    },
    {
      year: 2022,
      placedPercentage: 92,
      avgCTC: "8",
      maxCTC: "25",
    },
    {
      year: 2021,
      placedPercentage: 100,
      avgCTC: "7.3",
      maxCTC: "25",
    },
    {
      year: 2020,
      placedPercentage: 100,
      avgCTC: "7",
      maxCTC: "11",
    },
    {
      year: 2019,
      placedPercentage: 100,
      avgCTC: "6",
      maxCTC: "10",
    },
  ];

  const filteredStats = placementData
    .filter((data) => data.year === year)
    .map((data) => (
      <div key={data.year} className={classes.statsWrapper}>
        <Paper className={classes.stat} radius="md" shadow="md">
          <div>
            <Text align="center" fw={600} fz="lg">
              % of eligible students placed
            </Text>
            {/* <Text>{data.placedPercentage}</Text> */}
            <RingProgress
              size={180}
              roundCaps
              thickness={10}
              sections={[{ value: data.placedPercentage, color: "#051F40" }]}
              label={
                <Text
                  align="center"
                  fz={`calc(${theme.fontSizes.xl}*2)`}
                  fw={700}
                >
                  {data.placedPercentage}
                </Text>
              }
            ></RingProgress>
          </div>
        </Paper>
        <Paper className={classes.stat} radius="md" shadow="md">
          <div>
            <Text align="center" fw={600} fz="lg">
              Highest package <br />
              (Lakhs per annum)
            </Text>
            <Text
              fz={`calc(${theme.fontSizes.xl}*2)`}
              fw={700}
              align="center"
              pt={`calc(${theme.spacing.xl}*2)`}
            >
              {data.maxCTC}
            </Text>
          </div>
        </Paper>
        <Paper className={classes.stat} radius="md" shadow="md">
          <div>
            <Text align="center" fw={600} fz="lg">
              Average package <br /> (Lakhs per annum)
            </Text>
            <Text
              fz={`calc(${theme.fontSizes.xl}*2)`}
              fw={700}
              align="center"
              pt={`calc(${theme.spacing.xl}*2)`}
            >
              {data.avgCTC}
            </Text>
          </div>
        </Paper>
      </div>
    ));
  return (
    <>
      <div className={classes.root}>
        <div className={classes.controls}>
          <UnstyledButton
            className={classes.control}
            onClick={() => setYear(year + 1)}
          >
            <IconChevronUp
              size="1rem"
              className={classes.controlIcon}
              stroke={1.5}
            />
          </UnstyledButton>

          <div className={classes.date}>
            <Text className={classes.day}>{year}</Text>
          </div>

          <UnstyledButton
            className={classes.control}
            onClick={() => setYear(year - 1)}
          >
            <IconChevronDown
              size="1rem"
              className={classes.controlIcon}
              stroke={1.5}
            />
          </UnstyledButton>
        </div>
        <Group sx={{ flex: 1 }}>{filteredStats}</Group>
      </div>
    </>
  );
}

export default Stats;
