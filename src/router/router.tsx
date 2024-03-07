//* React Router
import { createBrowserRouter } from "react-router-dom";

//* Page
import { AuthPage, HomePage } from "../page";

//* Layaout
import { NavbarLayout } from "../layouts";

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
        element: <AuthPage />,
      },
    ],
  },
]);
