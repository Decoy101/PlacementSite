import { AppShell, MediaQuery, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "..";
import { useState } from "react";
import { Navbar } from "../Navbar";
import { useAtom } from "jotai";
import { navStore } from "@/data/store/navbar.store";
import { useNavbar } from "@/data/hooks/useNavbar";

function AdminShell() {
  const [isNavbarOpened, setIsNavbarOpened] = useAtom(navStore.isNavbarOpened);

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
        navbar={<Navbar hidden={!isNavbarOpened} />}
      >
        <Container sx={{ maxWidth: "1440px" }}>
          <Outlet />
        </Container>
      </AppShell>
    </>
  );
}

export default AdminShell;
