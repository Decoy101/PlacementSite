import { useState } from "react";
import { Text, TextInput, Textarea, Button, Group } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Announcement } from "../Announcements/Announcements.types";
import { addAnnouncement } from "@/firebase";
function AddAnnouncement() {
  const defaultAnnouncement: Announcement = {
    title: "",
    content: "",
    createdAt: new Date().toDateString(),
  };
  const [formFields, setFormFields] =
    useState<Announcement>(defaultAnnouncement);
  const handleChange = (name: string, value: string) => {
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = async () => {
    await addAnnouncement(formFields);
    console.log("Announcement Done!");
  };
  return (
    <>
      <Text>Add Announcement</Text>
      <TextInput
        label="Title"
        value={formFields.title}
        required
        onChange={(e) => handleChange("title", e.target.value)}
      />
      <Textarea
        label="Content"
        value={formFields.content}
        required
        onChange={(e) => handleChange("content", e.target.value)}
      />
      <DateInput readOnly label="Created At" value={new Date()} />
      <Group grow mt={"xl"}>
        <Button onClick={onSubmit}>Announce</Button>
        <Button variant="default">Cancel</Button>
      </Group>
    </>
  );
}
export default AddAnnouncement;
