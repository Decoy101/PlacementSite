import { useState } from "react";
import { TextInput, Text, Group, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Company } from "../Company.types";
import { addCompany } from "@/firebase";

function CompanyProfile() {
  const defaultCompanyDetails: Company = {
    name: "",
    lastDateToApply: new Date().toDateString(),
    roles: "",
    formLink: "",
  };
  const [formFields, setFormFields] = useState<Company>(defaultCompanyDetails);
  const handleChange = (name: string, value: string) => {
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = async () => {
    await addCompany(formFields);
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <Text size={"lg"} fw={500}>
            Add Company Details
          </Text>
          <TextInput
            label="Company's Name"
            placeholder="XYZ Inc."
            value={formFields.name}
            onChange={(e) => handleChange("name", e.target.value)}
            my={"md"}
            required
          />
          <TextInput
            label="Application Form Link"
            placeholder="https://docs.google.com/forms/DsaFF"
            value={formFields.formLink}
            onChange={(e) => handleChange("formLink", e.target.value)}
            my={"md"}
            required
          />
          <TextInput
            label="Roles to applied for"
            placeholder="Software Developer / Data Scientist"
            value={formFields.roles}
            onChange={(e) => handleChange("roles", e.target.value)}
            my={"md"}
          />
          <DateInput
            label="Last Date to Apply"
            value={new Date(formFields.lastDateToApply)}
            onChange={(value) =>
              handleChange("lastDateToApply", value!.toDateString())
            }
            my={"md"}
            required
          />
        </form>

        <Group grow>
          <Button
            onClick={() => {
              onSubmit();
              close();
            }}
          >
            Save
          </Button>
          <Button variant="default" onClick={close}>
            Cancel
          </Button>
        </Group>
      </div>
    </>
  );
}

export default CompanyProfile;
