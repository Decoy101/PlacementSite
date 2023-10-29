import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { lazy } from "react";
import { AdminShell } from "./components/layout";

const HomePage = lazy(() => import("./routes/home/HomePage/HomePage"));
const LoginPage = lazy(() => import("./routes/auth/LoginPage/LoginPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/auth"} element={<LoginPage />} />
          <Route path={"/account"} element={<AdminShell />}>
            <Route path="*" element={<Navigate to={"./"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
