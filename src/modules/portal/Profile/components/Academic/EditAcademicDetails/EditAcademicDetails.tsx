import { Text, Grid, TextInput, Select } from "@mantine/core";
import {
  AcademicDetails,
  BRANCH_ENUM,
  CATEGORY_ENUM,
} from "../AcademicDetails.types";
import { DateInput } from "@mantine/dates";
type EditAcademicDetails = {
  formFields: AcademicDetails;
  setFormFields: React.Dispatch<React.SetStateAction<AcademicDetails>>;
};
function EditAcademicDetails({
  formFields,
  setFormFields,
}: EditAcademicDetails) {
  const handleChange = (name: string, value: string | number | Date | null) => {
    setFormFields({ ...formFields, [name]: value });
  };
  const {
    programme,
    academicYear,
    regNo,
    branch,
    category,
    dateOfAdmission,
    cpi,
  } = formFields;
  return (
    <>
      <div>
        <Text c="purple" fw={600} my={"md"}>
          Academic Details
        </Text>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Programme</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              disabled
              id="programme"
              value={programme ? programme : "B.Tech"}
              onChange={(e) => handleChange("programme", e.target.value)}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Academic Year</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              type="number"
              id="academicYear"
              value={academicYear}
              onChange={(e) => handleChange("academicYear", e.target.value)}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Roll No.</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              id="regNo"
              value={regNo}
              onChange={(e) =>
                handleChange("regNo", e.target.value.toUpperCase())
              }
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Branch</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Select
              id="branch"
              value={branch}
              data={[BRANCH_ENUM.cse, BRANCH_ENUM.dsai, BRANCH_ENUM.ece]}
              onChange={(value) => handleChange("branch", value)}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Category</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Select
              id="category"
              value={category}
              data={[
                CATEGORY_ENUM.general,
                CATEGORY_ENUM.obc,
                CATEGORY_ENUM.sc,
              ]}
              onChange={(value) => handleChange("category", value)}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>Date of Admission</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <DateInput
              placeholder="Pick a Date"
              id="dateOfAdmission"
              value={dateOfAdmission ? new Date(dateOfAdmission) : new Date()}
              onChange={(value) =>
                handleChange("dateOfAdmission", value!.toDateString())
              }
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3} p={"md"}>
            <Text size={"lg"}>CPI</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextInput
              type="float"
              id="cpi"
              value={cpi}
              onChange={(e) => handleChange("cpi", e.target.value)}
            />
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}

export default EditAcademicDetails;
