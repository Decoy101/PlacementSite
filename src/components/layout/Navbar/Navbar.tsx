import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { StudentNavbar, AdminNavbar } from "@/containers";

function Navbar() {
  const location = useLocation();
  const [navbarView, setNavbarView] = useState("");
  useEffect(() => {
    if (location.pathname.startsWith("/account")) {
      setNavbarView("student");
    } else if (location.pathname.startsWith("/account/admin")) {
      setNavbarView("admin");
    }
  }, [location.pathname, setNavbarView]);
  if (navbarView === "student") return <StudentNavbar />;
  if (navbarView === "admin") return <AdminNavbar />;
}

export default Navbar;
