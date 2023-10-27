import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { MantineProvider } from "@mantine/core";
import { customTheme } from "./routes/theme/theme.ts";
import { UserProvider } from "./contexts/user.contexts.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
        <App />
      </MantineProvider>
    </UserProvider>
  </React.StrictMode>
);
