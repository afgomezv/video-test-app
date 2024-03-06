//* React Router
import { createBrowserRouter } from "react-router-dom";

//* Page
import { HomePage, AuthPage } from "../page";

//* Layaout
import { AuthLayout, NavbarLayout } from "../layouts";

//* Root
import Root from "../Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <NavbarLayout />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
        ],
      },
      {
        path: "login",
        element: <AuthLayout />,
        children: [
          {
            path: "",
            element: <AuthPage />,
          },
        ],
      },
    ],
  },
]);
