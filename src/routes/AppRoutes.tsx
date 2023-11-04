import { AnimatePresence } from "framer-motion";
import { Route, Routes, Navigate } from "react-router-dom";
import { SuspenseLoader } from "@/components";
import { appPaths, appRoot } from "./paths";
import { AccountPage } from "@/modules/account/AccountPage";
import { Profile } from "@/modules/portal/Profile";
import { AdminShell } from "@/components/layout";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <>
      <SuspenseLoader>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<AdminShell />}>
              <Route element={<ProtectedRoute />}>
                <Route path={appPaths.root} element={<AccountPage />} />
                <Route path={appPaths.profile} element={<Profile />} />
                {/* <Route path="*" element={<Navigate to={appRoot} />} /> */}
              </Route>
            </Route>
          </Routes>
        </AnimatePresence>
      </SuspenseLoader>
    </>
  );
}
export default AppRoutes;
