import { Routes, Route, Navigate } from "react-router-dom";
import { authPaths, authRoot } from "./paths";
import { AuthShell } from "@/components/layout";
import { LoginForm, SignUpForm } from "@/modules/auth/components";
import { HomePage } from "@/modules/home/HomePage";
import { SuspenseLoader } from "@/components";
function AuthRoutes() {
  return (
    <>
      <SuspenseLoader>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<AuthShell />}>
            <Route path={authRoot} element={<LoginForm />} />
            <Route path={authPaths.login} element={<LoginForm />} />
            <Route path={authPaths.signUp} element={<SignUpForm />} />
            <Route path="*" element={<Navigate to={authRoot} />} />
          </Route>
        </Routes>
      </SuspenseLoader>
    </>
  );
}

export default AuthRoutes;
