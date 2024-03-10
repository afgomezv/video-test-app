//* React Router
import { createBrowserRouter } from "react-router-dom";

//* Page
import {
  AuthPage,
  CategoryPage,
  DetailPage,
  HomePage,
  RegisterPage,
} from "../page";

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
          {
            path: ":path",
            element: <CategoryPage />,
          },
          {
            path: ":path/:id",
            element: <DetailPage />,
          },
        ],
      },

      {
        path: "login",
        element: <AuthPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);
