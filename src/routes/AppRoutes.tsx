import { Route, Routes, Navigate } from "react-router-dom";
import { SuspenseLoader } from "@/components";
import { appPaths, appRoot } from "./paths";
import { AccountPage } from "@/modules/account/AccountPage";
function AppRoutes() {
  return (
    <>
      <SuspenseLoader>
        <Routes>
          <Route path={appRoot} element={<AccountPage />} />
          <Route path="*" element={<Navigate to={appRoot} />} />
        </Routes>
      </SuspenseLoader>
    </>
  );
}
export default AppRoutes;
