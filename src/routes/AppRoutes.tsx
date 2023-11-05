import { AnimatePresence } from "framer-motion";
import { Route, Routes, Navigate } from "react-router-dom";
import { SuspenseLoader } from "@/components";
import { appPaths, appRoot } from "./paths";

import { Profile } from "@/modules/portal/Profile";
import { AdminShell } from "@/components/layout";
import ProtectedRoute from "./ProtectedRoute";
import { PlacementCalendar } from "@/modules/portal/PlacementCalendar";
import { Companies } from "@/modules/portal/Companies";
import { Dashboard } from "@/modules/dashboard";

function AppRoutes() {
  return (
    <>
      <SuspenseLoader>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<AdminShell />}>
              <Route element={<ProtectedRoute />}>
                <Route path={appPaths.root} element={<Dashboard />} />
                <Route path={appPaths.profile} element={<Profile />} />

                <Route
                  path={appPaths.calendar}
                  element={<PlacementCalendar />}
                />
                <Route path={appPaths.companies} element={<Companies />} />
                <Route path="*" element={<Navigate to={appRoot} />} />
              </Route>
            </Route>
          </Routes>
        </AnimatePresence>
      </SuspenseLoader>
    </>
  );
}
export default AppRoutes;
