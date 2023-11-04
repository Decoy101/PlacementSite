import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { StudentNavbar, AdminNavbar } from "@/containers";
import { NavbarProps } from "./Navbar.types";

function Navbar({ hidden }: NavbarProps) {
  const location = useLocation();
  const [navbarView, setNavbarView] = useState("");
  useEffect(() => {
    if (location.pathname.startsWith("/student")) {
      setNavbarView("student");
    } else if (location.pathname.startsWith("/")) {
      setNavbarView("admin");
    }
  }, [location.pathname, setNavbarView]);
  if (navbarView === "student") return <StudentNavbar />;
  if (navbarView === "admin") return <AdminNavbar hidden={hidden} />;
}

export default Navbar;
