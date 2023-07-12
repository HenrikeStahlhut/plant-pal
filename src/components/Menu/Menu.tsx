import { useState } from "react";
import { StyledNav } from "./Menu.styled";
import MenuButton from "../MenuButton/MenuButton";
import { ROUTES } from "@/routes";
import Link from "next/link";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  // TODO: add Profile to menu

  return (
    // <>
    //   <MenuButton open={menuOpen} setOpen={setMenuOpen} />

    //   <StyledMenu open={menuOpen}>
    //     <StyledNavLink href={ROUTES.HOME} onClick={() => closeMenu()}>
    //       Home
    //     </StyledNavLink>
    //     <StyledNavLink
    //       href={ROUTES.PLANTS_OVERVIEW}
    //       onClick={() => closeMenu()}
    //     >
    //       Plants
    //     </StyledNavLink>
    //     <StyledNavLink href={ROUTES.ROOMS_OVERVIEW} onClick={() => closeMenu()}>
    //       Rooms
    //     </StyledNavLink>
    //   </StyledMenu>
    // </>
    <>
      <MenuButton open={menuOpen} setOpen={setMenuOpen} />
      <StyledNav className="topnav" open={menuOpen}>
        <Link href={ROUTES.HOME} className="link" onClick={() => closeMenu()}>
          Home
        </Link>
        <Link
          href={ROUTES.PLANTS_OVERVIEW}
          className="link"
          onClick={() => closeMenu()}
        >
          Plants
        </Link>
        <Link
          href={ROUTES.ROOMS_OVERVIEW}
          className="link"
          onClick={() => closeMenu()}
        >
          Rooms
        </Link>
      </StyledNav>
    </>
  );
}
