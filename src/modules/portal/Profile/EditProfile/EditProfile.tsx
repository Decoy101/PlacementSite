import { useEffect, useState } from "react";
import { EditAcademicDetails } from "../components/Academic";
import { Group, Text, Flex, Button } from "@mantine/core";
import { IconFile, IconPhoto, IconUpload, IconX } from "@tabler/icons-react";

import {
  AcademicDetails,
  defaultAcademicFields,
} from "../components/Academic/AcademicDetails.types";
import { EditPersonalDetails } from "../components/Personal";
import {
  PersonalDetails,
  defaultPersonalDetailFields,
} from "../components/Personal/PersonalDetails.types";
import { Dropzone, IMAGE_MIME_TYPE, PDF_MIME_TYPE } from "@mantine/dropzone";
import { updateDetails, getUserDetails } from "@/firebase";
import { useUserAuth } from "@/contexts/user.context";

function EditProfile() {
  const { currentUser } = useUserAuth();

  const [personalDataFields, setPersonalDataFields] = useState<PersonalDetails>(
    defaultPersonalDetailFields
  );
  const [academicDataFields, setAcademicDataFields] = useState<AcademicDetails>(
    defaultAcademicFields
  );

  useEffect(() => {
    const fetchData = async () => {
      const { personalDetails, academicDetails } = await getUserDetails(
        currentUser!
      );
      // const userSnapshot = await getUser(currentUser!);
      // setUserEmail(userSnapshot!.email);
      if (personalDetails && academicDetails) {
        setPersonalDataFields(personalDetails as PersonalDetails);
        setAcademicDataFields(academicDetails as AcademicDetails);
      }
    };
    fetchData();
  });

  const handleSubmit = async () => {
    if (currentUser) {
      await updateDetails(currentUser!, personalDataFields, academicDataFields);
    }
  };

  return (
    <>
      <EditPersonalDetails
        formFields={personalDataFields}
        setFormFields={setPersonalDataFields}
      />
      <EditAcademicDetails
        formFields={academicDataFields}
        setFormFields={setAcademicDataFields}
      />
      <Group grow my={"md"}>
        <Dropzone
          accept={IMAGE_MIME_TYPE}
          onDrop={(files) => console.log("Pic Accepted", files)}
        >
          <Flex justify={"center"} gap={10} align={"center"}>
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "var(--mantine-color-dimmed)",
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>
            <Text ta="center">Upload Your Profile Photo</Text>
          </Flex>
        </Dropzone>
        <Dropzone
          accept={PDF_MIME_TYPE}
          onDrop={() => console.log("Resume Accepted")}
        >
          <Flex justify={"center"} gap={10} align={"center"}>
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "var(--mantine-color-red-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconFile
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "var(--mantine-color-dimmed)",
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>
            <Text ta="center">Upload Your Resume</Text>
          </Flex>
        </Dropzone>
      </Group>
      <Group grow mt={"xl"}>
        <Button onClick={handleSubmit}>Save Changes</Button>
        <Button variant="default">Cancel</Button>
      </Group>
    </>
  );
}
export default EditProfile;
