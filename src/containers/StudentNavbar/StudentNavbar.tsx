import { NavbarTwoLevels as LayoutNavbar } from "@/components/navigation";

function StudentNavbar() {
  return (
    <>
      <LayoutNavbar
        footerMenu={{
          name: "",
          email: "",
          avatar: undefined,
          menu: "",
        }}
      />
    </>
  );
}

export default StudentNavbar;
