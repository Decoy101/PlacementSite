import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import { customTheme } from "./modules/theme/theme.ts";
import { UserProvider } from "./contexts/user.context.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
        <Notifications
          style={{ display: "flex", justifyContent: "center" }}
          containerWidth="100vw"
        />
        <App />
      </MantineProvider>
    </UserProvider>
  </React.StrictMode>
);
