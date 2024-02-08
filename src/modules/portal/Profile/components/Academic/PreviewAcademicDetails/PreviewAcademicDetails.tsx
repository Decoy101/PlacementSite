import { Group } from "@mantine/core";
import { AcademicDetails } from "../AcademicDetails.types";
import { TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
type PreviewAcademicDetails = {
  data: AcademicDetails;
};

function PreviewAcademicDetails({ data }: PreviewAcademicDetails) {
  const { programme, academicYear, regNo, branch, category, cpi } = data;
  return (
    <>
      <Group grow>
        <TextInput
          size="md"
          readOnly
          label="Programme"
          value={programme}
          variant="filled"
          my={"xs"}
        />
        <TextInput
          size="md"
          readOnly
          label="Academic Year"
          value={academicYear}
          variant="filled"
          my={"xs"}
        />
        <TextInput
          size="md"
          readOnly
          label="Roll No."
          value={regNo}
          variant="filled"
          my={"xs"}
        />
      </Group>
      <Group grow>
        <TextInput
          size="md"
          readOnly
          label="Branch"
          value={branch}
          variant="filled"
          my={"xs"}
        />
        <TextInput
          size="md"
          readOnly
          label="Category"
          value={category}
          variant="filled"
          my={"xs"}
        />
        <DateInput
          size="md"
          readOnly
          label="Date of Admission"
          variant="filled"
          my={"xs"}
        />
      </Group>
      <TextInput
        size="md"
        readOnly
        label="Current CPI"
        value={cpi}
        variant="filled"
        my={"xs"}
      />
    </>
  );
}
export default PreviewAcademicDetails;
