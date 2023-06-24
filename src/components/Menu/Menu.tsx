import { useState } from "react";
import { StyledMenu, StyledNavLink } from "./Menu.styled";
import MenuButton from "../MenuButton/MenuButton";
import { ROUTES } from "@/routes";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  // TODO: add Profile to menu

  return (
    <>
      <MenuButton open={menuOpen} setOpen={setMenuOpen} />

      <StyledMenu open={menuOpen}>
        <StyledNavLink href={ROUTES.HOME} onClick={() => closeMenu()}>
          Home
        </StyledNavLink>
        <StyledNavLink
          href={ROUTES.PLANTS_OVERVIEW}
          onClick={() => closeMenu()}
        >
          Plants
        </StyledNavLink>
        <StyledNavLink href={ROUTES.ROOMS_OVERVIEW} onClick={() => closeMenu()}>
          Rooms
        </StyledNavLink>
      </StyledMenu>
    </>
  );
}
