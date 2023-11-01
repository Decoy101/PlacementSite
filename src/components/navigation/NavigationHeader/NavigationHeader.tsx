import {
  Container,
  Header,
  Group,
  Center,
  Image,
  Button,
  Drawer,
  ScrollArea,
  Divider,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link as LinkScroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./NavigationHeader.styles";
import CollegeLogo from "../../../assets/CollegeLogo-long-white.jpg";

function NavigationHeader() {
  const { classes, theme } = useStyles();

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", link: "/#home" },
    { label: "Why Recruit", link: "why-recruit" },
    { label: "Statistics", link: "statistics" },
    { label: "Featured Stars", link: "featured-stars" },
    { label: "Past Recruiters", link: "past-recruiters" },
    { label: "Our Team", link: "team" },
    { label: "Policy", link: "policy" },
    { label: "Contact Us", link: "contact-us" },
  ];

  const items = menuItems.map((item) => {
    return (
      <LinkScroll
        to={item.link}
        className={classes.link}
        smooth={true}
        duration={300}
      >
        <Center className={classes.linkLabel}>{item.label}</Center>
      </LinkScroll>
    );
  });

  return (
    <>
      <Header height={85}>
        <Container fluid className={classes.innerHeader}>
          <Image src={CollegeLogo} width={210} />
          <Group spacing={0} className={classes.hiddenMobile}>
            {items}
          </Group>
          <Button
            className={classes.hiddenMobile}
            onClick={() => navigate("auth")}
          >
            CGC Portal
          </Button>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Container>
      </Header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="75%"
        padding={"md"}
        zIndex={100000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="md">
          {items}
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <Button onClick={() => navigate("/portal")}>CGC Portal</Button>
        </ScrollArea>
      </Drawer>
    </>
  );
}
export default NavigationHeader;
