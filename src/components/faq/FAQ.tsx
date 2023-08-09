import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Modal, Button, Group, Text } from "@mantine/core";
import { useStyles } from "./FAQ.styles";
function FAQ() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const faqData = [
    {
      id: 1,
      query:
        "What are the different ways the company can hire the students from the college?",
      ans: "The different ways of recruiting student are: Campus Recruitment Program in which final year students take part and Summer Internship Program for pre-final year students, which can be converted into a pre-placement offer.",
    },
    {
      id: 2,
      query:
        "How can a company register itself for the campus recruitment program?",
      ans: "To participate in the campus recruitment program, a company must first contact the Training and Placement Cell and submit a job notification form (JNF). You can also find the detailed placement procedure in the policy linked above.",
    },
    {
      id: 3,
      query: "Is there any fee associated with the process?",
      ans: "No. There are no fees associated with the registration or the placement process.",
    },
    {
      id: 4,
      query: "What is the procedure to schedule a pre-placement talk?",
      ans: "A company will only be allowed to hold its PPT after filling up the job notification form. The session is scheduled between 6 PM to 9 PM on weekdays and between 10 AM and 5 PM hours on Saturdays and Sundays. Student volunteers will get in touch with the company to fix a mutually convenient time for the session.",
    },
    {
      id: 5,
      query: "When does the recruitment began? ",
      ans: "The recruitment season runs throughout the year (from July to May).",
    },
  ];
  const [id, setId] = useState(1);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        centered
        size="55%"
      >
        <Text fz="xl">
          {faqData.filter((data) => data.id == id).map((data) => data.ans)}
        </Text>
      </Modal>
      <Group position="center" className={classes.wrapper}>
        {faqData.map((data) => {
          return (
            <Button
              size="10%"
              p="md"
              variant="outline"
              color="dark"
              radius="md"
              onClick={() => {
                open();
                setId(data.id);
              }}
            >
              <Text fz={"md"}>{data.query}</Text>
            </Button>
          );
        })}
      </Group>
    </>
  );
}

export default FAQ;
