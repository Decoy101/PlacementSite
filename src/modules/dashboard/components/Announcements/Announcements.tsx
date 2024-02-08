import { Text, Group, Flex, Button, Drawer } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import AddAnnouncement from "../AddAnnouncement/AddAnnouncement";
import { Announcement } from "./Announcements.types";
import { AnnouncementBlock } from "../AnnouncementBlock";
import { useEffect, useState } from "react";
import { getAllAnnouncements, getUser } from "@/firebase";
import { useUserAuth } from "@/contexts/user.context";
import { IconArrowBadgeRight } from "@tabler/icons-react";

// const announcements: Announcement[] = [
//   {
//     title: "Fill Up the form",
//     content: `Guys fill the XYZ inc. form as requested.`,
//     createdAt: new Date().toDateString(),
//   },
// ];

function Announcements() {
  const [opened, { open, close }] = useDisclosure();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const { currentUser } = useUserAuth();
  const [role, setRole] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const announcements = await getAllAnnouncements();
      const userSnapshot = await getUser(currentUser!);

      setAnnouncements(announcements);
      setRole(userSnapshot?.role);
    };
    fetchData();
  }, [opened]);
  console.log(announcements);
  return (
    <>
      <Flex justify={"space-between"}>
        <Group>
          <IconArrowBadgeRight size={"3rem"} />
          <Text size={"2rem"} fw={500}>
            Announcements
          </Text>
        </Group>

        {role === "cgc" ? (
          <Button onClick={open}>Add Announcement</Button>
        ) : (
          <></>
        )}
        <Drawer opened={opened} onClose={close} position="right">
          <AddAnnouncement />
        </Drawer>
      </Flex>
      {announcements.map((announcement) => (
        <AnnouncementBlock announcement={announcement} />
      ))}
    </>
  );
}
export default Announcements;
