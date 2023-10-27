import { BrowserRouter, Routes, Route } from "react-router-dom";

import { lazy } from "react";

const HomePage = lazy(() => import("./routes/home/HomePage/HomePage"));
const LoginPage = lazy(() => import("./routes/auth/LoginPage/LoginPage"));
const AccountPage = lazy(
  () => import("./routes/account/AccountPage/AccountPage")
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/auth"} element={<LoginPage />} />
          <Route path={"/account"} element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
