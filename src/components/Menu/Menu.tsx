import { useState } from "react";
import { StyledNav } from "./Menu.styled";
import MenuButton from "../MenuButton/MenuButton";
import { ROUTES } from "@/routes";
import Link from "next/link";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  // TODO: add Profile to menu

  return (
    <>
      <MenuButton open={menuOpen} setOpen={setMenuOpen} />
      <StyledNav className="topnav" open={menuOpen}>
        <Link
          href={ROUTES.HOME}
          className="link"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href={ROUTES.PLANTS_OVERVIEW}
          className="link"
          onClick={() => setMenuOpen(false)}
        >
          Plants
        </Link>
        <Link
          href={ROUTES.ROOMS_OVERVIEW}
          className="link"
          onClick={() => setMenuOpen(false)}
        >
          Rooms
        </Link>
      </StyledNav>
    </>
  );
}
