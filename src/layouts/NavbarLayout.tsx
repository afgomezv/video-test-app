import { Outlet } from "react-router-dom";
import { NavbarComp } from "../components";

export const NavbarLayout = () => {
  return (
    <>
      <NavbarComp />
      <Outlet />
    </>
  );
};
