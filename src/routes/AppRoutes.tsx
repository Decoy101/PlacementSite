import { Route, Routes, Navigate } from "react-router-dom";
import { SuspenseLoader } from "@/components";
import { appPaths, appRoot } from "./paths";
import { AccountPage } from "@/modules/account/AccountPage";
import { AdminShell } from "@/components/layout";
function AppRoutes() {
  return (
    <>
      <SuspenseLoader>
        <Routes>
          <Route element={<AdminShell />}>
            <Route path={appRoot} element={<AccountPage />} />
            <Route path="*" element={<Navigate to={appRoot} />} />
          </Route>
        </Routes>
      </SuspenseLoader>
    </>
  );
}
export default AppRoutes;
