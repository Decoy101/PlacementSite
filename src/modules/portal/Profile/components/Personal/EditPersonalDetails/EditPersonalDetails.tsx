import { TextInput, Text, Textarea, Grid, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { GENDER_ENUM, PersonalDetails } from "../PersonalDetails.types";

export type EditPersonalDetails = {
  formFields: PersonalDetails;
  setFormFields: React.Dispatch<React.SetStateAction<PersonalDetails>>;
};
function EditPersonalDetails({
  formFields,
  setFormFields,
}: EditPersonalDetails) {
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
  } = formFields;

  const handleChange = (name: string, value: string | Date | null | number) => {
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <>
      <div>
        <Text c="purple" fw={600} my={"md"}>
          Edit Personal Details
        </Text>

        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>First Name</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              value={firstName}
              id="firstName"
              onChange={(e) =>
                handleChange("firstName", e.target.value.toUpperCase())
              }
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Middle Name</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              value={middleName}
              id="middleName"
              onChange={(e) =>
                handleChange("middleName", e.target.value.toUpperCase())
              }
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Last Name</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              value={lastName}
              id="lastName"
              onChange={(e) =>
                handleChange("lastName", e.target.value.toUpperCase())
              }
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Date of Birth</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <DateInput
              placeholder="Pick a Date"
              id="dob"
              value={dob ? new Date(dob) : new Date()}
              onChange={(value) => handleChange("dob", value!.toDateString())}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Father's Name</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              value={fathersName}
              id="fathersName"
              onChange={(e) =>
                handleChange("fathersName", e.target.value.toUpperCase())
              }
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Parent's Phone No.</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              type="number"
              value={parentsPhoneNo}
              id="parentsPhoneNo"
              onChange={(e) => handleChange("parentsPhoneNo", e.target.value)}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Alternate Email</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              type="email"
              value={email}
              id="email"
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Phone No.</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              value={phoneNo}
              type="number"
              id="phoneNo"
              onChange={(e) => handleChange("phoneNo", e.target.value)}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Address</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Textarea
              value={address}
              id="address"
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>City</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              value={city}
              id="city"
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Pincode</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              value={pincode}
              type="number"
              id="pincode"
              onChange={(e) => handleChange("pincode", e.target.value)}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Gender</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Select
              id="gender"
              value={gender}
              data={[GENDER_ENUM.male, GENDER_ENUM.female]}
              onChange={(value) => handleChange("gender", value)}
            />
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
export default EditPersonalDetails;
