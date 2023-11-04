import { useState, useEffect } from "react";
import { useUserAuth } from "@/contexts/user.context";
import { Text, Paper } from "@mantine/core";
import { getUserDetails } from "@/firebase";

import {
  PersonalDetails,
  defaultPersonalDetailFields,
} from "../components/Personal/PersonalDetails.types";
import {
  AcademicDetails,
  defaultAcademicFields,
} from "../components/Academic/AcademicDetails.types";
import { PreviewPersonalDetails } from "../components/Personal";
import { PreviewAcademicDetails } from "../components/Academic";
import { useStyles } from "./ViewProfile.styles";

function ViewProfile() {
  const { classes } = useStyles();
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
      if (personalDetails && academicDetails) {
        setPersonalDataFields(personalDetails as PersonalDetails);
        setAcademicDataFields(academicDetails as AcademicDetails);
      }
    };
    fetchData();
  }, [currentUser]);
  return (
    <>
      <div className={classes.wrapper}>
        <Paper shadow="xs" p="xl">
          <Text fw={500} size={"lg"}>
            Personal Details
          </Text>
          <PreviewPersonalDetails data={personalDataFields} />
          {/* <PreviewAcademicDetails /> */}
        </Paper>
        <Paper shadow="xs" p="xl" my={"md"}>
          <Text fw={500} size={"lg"}>
            Academic Details
          </Text>
          <PreviewAcademicDetails data={academicDataFields} />
        </Paper>
      </div>
    </>
  );
}
export default ViewProfile;
