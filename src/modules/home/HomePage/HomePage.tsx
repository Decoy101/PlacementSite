import {
  AspectRatio,
  Overlay,
  Image,
  Text,
  Button,
  Container,
  Title,
  Accordion,
  Flex,
  Card,
  Avatar,
  Group,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { NavigationHeader, Footer, Stats, FAQ } from "../../../components";
import CoverImg from "../../../assets/m1.jpg";
import { useStyles } from "./HomePage.styles";
import { Element } from "react-scroll";

function HomePage() {
  const { classes } = useStyles();

  const whyRecruitData = [
    {
      title: "Institute Background",
      placeholder:
        "IIIT Dharwad is an Institute of National Importance set up in 2015 in Public-Private-Partnership mode between the Ministry of Education, Government of India, Government of Karnataka and industry partner Keonics under an Act of Parliament (23 of 2017). The primary objective of setting up IIIT-Dharwad is to address the skill gap in high-end information technology and thereby enable India to retain its global leadership role in IT and allied areas. Towards this end, IIIT-Dharwad offers BTech degree programmes in Computer Science and Engineering, Electronics and Communication Engineering, and Data Science and Artificial Intelligence.",
    },
    {
      title: "Finest Curriculum",
      placeholder:
        "Teaching-Learning:  Being a technical institute of national importance, a special emphasis is given to practice-based teaching and learning process. The curriculum at IIIT Dharwad is evolving and dynamic to ensure that the courses taught are current and relevant. The Institute has not hesitated to break out of outdated conventions and has introduced an IT-focused curriculum from the first semester (e.g., no chemistry) with elective subjects offered in areas such as data science, AI, machine learning, IoT, cloud computing and Blockchain to name a few. Ample opportunities are provided to learn these cutting-edge areas practically through mini and major projects and events like hackathons.",
    },
    {
      title: "Students Achievements",
      placeholder:
        "Our institution boasts one of the finest academic curricula in India, and our students actively participate in prestigious programming and robotics competitions such as ACM ICPC, Google Hash Code, e-Yantra, and various hackathons, including the renowned Smart India Hackathon at the national level. They consistently excel and leave a significant impact in these competitions. Additionally, numerous students sharpen their coding abilities on platforms like Codeforces, CodeChef, and Leetcode. They also contribute to open-source projects on GitHub and offer assistance to others on platforms like Stack Overflow.",
    },
    {
      title: "Industrial Experience",
      placeholder:
        "Practical training, including summer internships, is a crucial part of technical education, providing students with valuable real-world experience. The Training and Placement Cell helps students secure training opportunities in reputable national and international organizations. Some students also receive research internship offers from foreign institutes. Many alumni have found placements in top multinational companies, contributing to the institution's impressive placement records.",
    },
    {
      title: "All-Round Development",
      placeholder:
        "The Institute is dedicated to fostering the holistic development of students. They are given ample opportunities to enhance crucial soft skills such as communication, conflict resolution, creative problem-solving, strategic thinking, and team building through a combination of classroom and co-curricular activities. The curriculum also includes open-ended learning elements that encourage students to unleash their creativity, leading to the development of innovative solutions and projects.",
    },
  ];

  const contactData = [
    {
      name: "Dr. Rajendra Hegadi",
      post: "Chairman, CGC",
      email: "cgc@iiitdwd.ac.in",
    },
    {
      name: "Mr. Ujwal Dodlani",
      post: "Placement Co-ordinator, CGC",
      email: "ujwal@iiitdwd.ac.in",
      phoneNo: "+91 9886376600",
    },
    {
      name: "Dr. Sunil Saumya",
      post: "Chairman, Technical Committee",
      email: "sunil.saumya@iiitdwd.ac.in",
      phoneNo: "+91 8863830309",
    },
    {
      name: "Mr. Ravi B Vitlapur",
      post: "Document Verification Co-ordinator",
      email: "ravi.vitlaput@iiitdwd.ac.in",
    },
  ];

  const policy = [
    "The CGC Coordinator is responsible for coordinating and communicating with companies/organizations to seek placement/internship opportunities.",
    "An SRF (Student Recruitment Form) has been made available on the web portal to ensure seamless communication between the institution and the companies/organizations.",
    "The companies/organizations provide their JDs (Job Descriptions) along with the details of the job offer (pay package, location, allowances and other bonuses) and the preferred dates of the campus visits in the SRF.",
    "Companies visit the campus on the allotted date(s) and conduct PPTs (Pre-Placement Talks), tests and/or interviews in accordance with their recruitment processes.",
    "The company/organization is required to furnish the final list of selected students preferably on the same day of the campus visit to CGC.",
    "In case the company/organisation is unable to declare the result on the same day, then the student is allowed to participate in other recruitment processes & the final decision will depend upon who declares the result first.",
    "The purview of the CGC is restricted to the offers made as part of the campus placement process only.",
    "The company shall route the offer letters to the students through the CGC and not directly to the students.",
  ];

  const teamData = [
    {
      name: "Shreyas Bulbule",
      imgSrc: "src/assets/team/shreyas.jpeg",
      linkDin: "https://www.linkedin.com/in/shreyas-bulbule-3912301b3/",
    },
    {
      name: "Om Morendra",
      imgSrc: "src/assets/team/om.jpeg",
      linkDin: "https://www.linkedin.com/in/om-morendha/",
    },
    {
      name: "Gaurang Belekar",
      imgSrc: "src/assets/team/gaurang.jpeg",
      linkDin: "https://www.linkedin.com/in/gaurang-belekar-ba27171b7/",
    },
    {
      name: "Harsh Rawat",
      imgSrc: "src/assets/team/harsh.jpeg",
      linkDin: "https://www.linkedin.com/in/harshrawat20/",
    },
  ];

  const team = (
    <Group spacing="xl" position="center">
      {teamData.map((data) => {
        return (
          <Flex direction="column" align="center">
            {" "}
            <Link to={data.linkDin} target="_blank">
              <Avatar radius="xl" size="xl" src={data.imgSrc} />
            </Link>
            <Text>{data.name}</Text>
            <Text c="dimmed">Student Co-ordinator</Text>
          </Flex>
        );
      })}
    </Group>
  );
  return (
    <>
      <NavigationHeader />
      <AspectRatio ratio={20 / 9} maw={2000}>
        <div style={{ zIndex: 1 }}>
          <Image src={CoverImg} fit="contain" width={"100vw"} />
          <Overlay color="#000" opacity={0.7} />
        </div>
        <div className={classes.coverText}>
          <Text fz="3rem" fw={400} ta="center">
            Career Guidance & Placement Cell
            <br /> IIIT Dharwad
          </Text>
          <Text fz="1rem" ta="center">
            We serve as a facilitator for training and placement, and we are{" "}
            committed to the <br /> students entire development by assisting
            them in connecting with industries.
          </Text>
          <Button my="xl" radius="xl">
            Download Brochure
          </Button>
        </div>
      </AspectRatio>
      <Element name="why-recruit">
        <Container size={"sm"} className={classes.recruitWrapper}>
          <Title align="center" className={classes.title}>
            Why Recruit
          </Title>
          <Accordion>
            {whyRecruitData.map((data) => {
              return (
                <Accordion.Item
                  className={classes.accordionItem}
                  value={data.title}
                >
                  <Accordion.Control>
                    <Text fw={500}>{data.title}</Text>
                  </Accordion.Control>
                  <Accordion.Panel>{data.placeholder}</Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Container>
      </Element>

      <Element name="statistics">
        <Container size="md" className={classes.statsWrapper}>
          <Title align="center" className={classes.title}>
            Placement Statistics
          </Title>
          <Stats />
        </Container>
      </Element>
      <Element name="past-recruiters">
        <Container size="sm" className={classes.statsWrapper}>
          <Title align="center" className={classes.title}>
            Past Recruiters
          </Title>
        </Container>
      </Element>
      <Element name="policy">
        <Container size="md" className={classes.statsWrapper}>
          <Title align="center" className={classes.title}>
            Placement Policy
          </Title>
          <ul>
            {policy.map((rule) => {
              return (
                <li>
                  <Text fz="lg" mb="md">
                    {rule}
                  </Text>
                </li>
              );
            })}
          </ul>
        </Container>
      </Element>
      <Element name="team">
        <Container size="md" className={classes.teamWrapper}>
          <Title align="center" className={classes.title}>
            Team
          </Title>
          <Flex direction="column" align="center" pb="xl">
            <Link
              to="https://www.linkedin.com/in/ujwaldoddamani/"
              target="_blank"
            >
              <Avatar radius="xl" size="xl" src="src/assets/team/ujwal.jpeg" />
            </Link>
            <Text>Mr. Ujwal Dodamani</Text>
            <Text c="dimmed">CGC Co-Ordinator</Text>
          </Flex>
          {team}
        </Container>
      </Element>
      <Element name="past-recruiters">
        <Container size="sm">
          <Title align="center" className={classes.title}>
            Frequently Asked Questions
          </Title>
          <FAQ />
        </Container>
      </Element>
      <Element name="contact-us">
        <Container size="md" className={classes.contactUsWrapper}>
          <Title align="center" className={classes.title}>
            Contact Us
          </Title>
          <Flex justify={"space-between"} wrap="wrap">
            {contactData.map((contact) => {
              return (
                <Card
                  key={contact.name}
                  shadow="md"
                  padding="xl"
                  className={classes.card}
                >
                  <Text fz="xl" fw={500} mt="md">
                    {contact.name}
                  </Text>
                  <Text fz="lg" c="dimmed" mt="sm">
                    {contact.post}
                  </Text>
                  <Text fz="md" c="blue" mt="sm">
                    {contact.email}
                  </Text>
                  <Text fz="sm" c="dimmed">
                    {contact.phoneNo}
                  </Text>
                </Card>
              );
            })}
          </Flex>
        </Container>
      </Element>

      <Footer />
    </>
  );
}

export default HomePage;
