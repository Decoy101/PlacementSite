import { NavbarTwoLevels as LayoutNavbar } from "@/components/navigation";
function AdminNavbar() {
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

export default AdminNavbar;
