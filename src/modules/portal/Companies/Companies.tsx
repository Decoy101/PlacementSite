import { Text, Flex, Button, Drawer, Stack } from "@mantine/core";
import { useState, useEffect } from "react";
import { CompanyProfile } from "./CompanyProfile";
import { useUserAuth } from "@/contexts/user.context";
import { useDisclosure } from "@mantine/hooks";
import { getAllCompanies, getUser } from "@/firebase";
import { Company } from "./Company.types";
import { CompanyLinkBlock } from "./CompanyLinkBlock";
// const companies: Company[] = [
//   {
//     name: "XYA Inc.",
//     formLink: "sadandowianawd",
//     lastDateToApply: new Date().toDateString(),
//     roles: "SDE",
//   },
//   {
//     name: "Cred",
//     formLink: "sadandowianawd",
//     lastDateToApply: new Date().toDateString(),
//     roles: "Backend Developer",
//   },
// ];
function Companies() {
  const { currentUser } = useUserAuth();
  const [opened, { open, close }] = useDisclosure(false);
  const [userRole, setUserRole] = useState("");
  const [companies, setCompanies] = useState<Company[]>([]);
  console.log(currentUser);
  useEffect(() => {
    const fetchData = async () => {
      const userSnapshot = await getUser(currentUser!);
      const companies = await getAllCompanies();

      console.log(userSnapshot);
      console.log(companies);
      setUserRole(userSnapshot?.role);
      setCompanies(companies);
    };
    fetchData();
  }, []);
  return (
    <>
      <Flex justify={"space-between"}>
        <Text size={"xl"} fw={500}>
          List of All Companies
        </Text>
        {userRole === "student" ? (
          <Button onClick={open}>Add A Company</Button>
        ) : (
          <></>
        )}
      </Flex>
      <div>
        <Drawer opened={opened} onClose={close} position="right">
          <CompanyProfile close={close} />
        </Drawer>
      </div>
      <Stack mt={"xl"}>
        {companies.map((company) => (
          <CompanyLinkBlock
            name={company.name}
            formLink={company.formLink}
            lastDateToApply={company.lastDateToApply}
            roles={company.roles}
          />
        ))}
      </Stack>
    </>
  );
}

export default Companies;
