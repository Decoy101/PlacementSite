import { Container, ActionIcon, Text, Group } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { useStyles } from "./Footer.styles";
function Footer() {
  const { classes } = useStyles();
  return (
    <Container className={classes.footer} fluid>
      <Text>Career Guidance & Placement Cell, IIIT Dharwad</Text>
      <Group spacing={0} position="right" noWrap>
        <ActionIcon size="lg">
          <IconBrandTwitter size="1.05rem" stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg">
          <IconBrandYoutube size="1.05rem" stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg">
          <IconBrandInstagram size="1.05rem" stroke={1.5} />
        </ActionIcon>
      </Group>
    </Container>
  );
}
export default Footer;
