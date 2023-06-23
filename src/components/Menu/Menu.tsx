import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { StyledMenu, StyledNavLink } from "./Menu.styled";
import { StyledOpenMenuButton } from "../MenuButton/MenuButton.styled";
import MenuButton from "../MenuButton/MenuButton";

export default function Navigation() {
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
        <StyledNavLink href={"/"} onClick={() => closeMenu()}>
          Home
        </StyledNavLink>
        <StyledNavLink href={"/"} onClick={() => closeMenu()}>
          Plants
        </StyledNavLink>
        <StyledNavLink href={"/"} onClick={() => closeMenu()}>
          Rooms
        </StyledNavLink>
      </StyledMenu>
    </>
  );
}
