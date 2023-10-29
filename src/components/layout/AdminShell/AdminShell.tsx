import { AppShell, MediaQuery, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "..";
import { useState } from "react";
import { Navbar } from "../Navbar";

function AdminShell() {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  return (
    <>
      <AppShell
        header={
          <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
            <Header
              opened={isNavbarOpened}
              toggleBar={() => setIsNavbarOpened(!isNavbarOpened)}
            />
          </MediaQuery>
        }
        navbar={<Navbar />}
      >
        <Container sx={{ maxWidth: "1440px" }}>
          <Outlet />
        </Container>
      </AppShell>
    </>
  );
}

export default AdminShell;
