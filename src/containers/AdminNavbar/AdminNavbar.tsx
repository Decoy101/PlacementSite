import { NavbarTwoLevels as LayoutNavbar } from "@/components/navigation";
import { useUserAuth } from "@/contexts/user.context";
import { NavbarPopover } from "../NavbarPopover";

type AdminNavbarProps = {
  hidden: boolean;
};

function AdminNavbar({ hidden }: AdminNavbarProps) {
  const { currentUser } = useUserAuth();
  // const { firstName, lastName, email } = currentUser!.details.personalDetails;
  console.log(currentUser);
  return (
    <>
      <LayoutNavbar
        hidden={hidden}
        footerMenu={{
          name: "Aman Gupta",
          email: "20bds024@iiitdwd.ac.in",
          avatar: undefined,
          menu: (
            <NavbarPopover
              name="Aman Gupta"
              email="20bds024@iiitdwd.ac.in"
              avatar={undefined}
            />
          ),
        }}
      />
    </>
  );
}

export default AdminNavbar;
