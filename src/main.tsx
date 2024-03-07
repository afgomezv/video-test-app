//* React
import React from "react";
import ReactDOM from "react-dom/client";

//* NextUI
import { NextUIProvider } from "@nextui-org/react";

//* Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

//* Auth
import { AuthProvider } from "./context/authContext";

//* Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>
);
