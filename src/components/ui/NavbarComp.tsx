//* NextUI
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

//* Iconos
import { PiFilmSlateDuotone } from "react-icons/pi";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

export const NavbarComp = () => {
  const { user, isLoading, logout } = useAuth();

  const navigate = useNavigate();

  if (isLoading) return <h1>...Loading</h1>;
  if (user === null) return <Navigate to="/login" />;

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Navbar className="bg-gray-200 shadow">
      <NavbarBrand>
        <Link href="/home">
          <PiFilmSlateDuotone className="text-purple-500 text-4xl" />
          <p className="text-2xl font-bold ml-2">Skills Up</p>
        </Link>
      </NavbarBrand>
      <NavbarContent as="div" justify="end">
        <NavbarItem className="text-xl font-semibold">{user?.email}</NavbarItem>
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="profile actions"
            className="capitalize"
            variant="flat"
          >
            <DropdownItem>perfil</DropdownItem>
            <DropdownItem>configuración</DropdownItem>
            <DropdownItem>ayuda</DropdownItem>
            <DropdownItem onClick={handleLogout} color="danger">
              cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
