import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { PiFilmSlateDuotone } from "react-icons/pi";

export const NavbarComp = () => {
  return (
    <Navbar className="bg-[#F2F3F4]">
      <NavbarBrand className="text-2xl">
        <PiFilmSlateDuotone className="text-purple-500 text-4xl" />
        <p className="font-bold ml-2">Skills Up</p>
      </NavbarBrand>
      <NavbarContent as="div" justify="end">
        <NavbarItem className="text-xl font-semibold capitalize">
          catalina castaño
        </NavbarItem>
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
            <DropdownItem color="danger">cerrar sesión</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
