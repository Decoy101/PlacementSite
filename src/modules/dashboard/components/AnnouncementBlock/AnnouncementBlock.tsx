import { Announcement } from "../Announcements/Announcements.types";
import { Paper, Text, Flex } from "@mantine/core";
type AnnouncementBlockProps = {
  announcement: Announcement;
};
function AnnouncementBlock({ announcement }: AnnouncementBlockProps) {
  return (
    <>
      <Paper shadow="xl" p="xl">
        <div style={{ borderLeft: "3px solid black", paddingLeft: "1rem" }}>
          <Flex justify={"space-between"}>
            <Text size={"xl"} fw={500}>
              {announcement.title}
            </Text>
            <Text c={"gray"}>Announced at: {announcement.createdAt}</Text>
          </Flex>

          <Text>{announcement.content}</Text>
        </div>
      </Paper>
    </>
  );
}
export default AnnouncementBlock;
