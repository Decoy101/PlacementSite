import { Group } from "@mantine/core";
import { PersonalDetails } from "../PersonalDetails.types";
import { TextInput, Textarea } from "@mantine/core";

type PreviewPersonalDetails = {
  data: PersonalDetails;
};
function PreviewPersonalDetails({ data }: PreviewPersonalDetails) {
  const {
    firstName,
    lastName,
    middleName,
    dob,
    fathersName,
    gender,
    email,
    phoneNo,
    parentsPhoneNo,
    address,
    city,
    pincode,
  } = data;
  return (
    <>
      <Group grow>
        <TextInput
          size="md"
          readOnly
          label="First Name"
          value={firstName}
          variant="filled"
          my={"xs"}
        />
        <TextInput
          readOnly
          size="md"
          label="Middle Name"
          value={middleName}
          variant="filled"
          my={"xs"}
        />
        <TextInput
          readOnly
          size="md"
          label="Last Name"
          value={lastName}
          variant="filled"
          my={"xs"}
        />
      </Group>
      <Group grow>
        <TextInput
          readOnly
          size="md"
          label="Gender"
          value={gender}
          variant="filled"
          my={"xs"}
        />
        <TextInput
          readOnly
          size="md"
          label="Date of Birth"
          value={dob}
          variant="filled"
          my={"xs"}
        />
        <TextInput
          readOnly
          size="md"
          label="Phone No"
          value={phoneNo}
          variant="filled"
          my={"xs"}
        />
      </Group>
      <Group grow>
        <TextInput
          label="Alternate Email Id:"
          readOnly
          size="md"
          value={email}
          variant="filled"
          my={"xs"}
        />
        <TextInput
          label="Father's/Guardian's Name"
          readOnly
          size="md"
          value={fathersName}
          variant="filled"
          my={"xs"}
        />
        <TextInput
          label="Guardian's Phone No."
          readOnly
          size="md"
          value={parentsPhoneNo}
          variant="filled"
          my={"xs"}
        />
      </Group>
      <Group grow>
        <TextInput
          readOnly
          label="City"
          size="md"
          value={city}
          variant="filled"
          my={"xs"}
        />
        <TextInput
          readOnly
          label="Pincode"
          size="md"
          value={pincode}
          variant="filled"
          my={"xs"}
        />
      </Group>
      <Textarea
        label="Address"
        size="md"
        readOnly
        value={address}
        variant="filled"
      />
    </>
  );
}

export default PreviewPersonalDetails;
