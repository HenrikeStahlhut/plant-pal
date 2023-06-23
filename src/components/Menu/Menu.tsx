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

  // return (
  //   <>
  //     <StyledOpenMenuButton onClick={openMenu}>
  //       <TbMenu2 onClick={openMenu} />
  //     </StyledOpenMenuButton>
  //     {menuOpen && (
  //       <>
  //         <StyledMenu open={menuOpen}>
  //           <StyledCloseMenuButton onClick={openMenu}>
  //             <IoClose size={30} />
  //           </StyledCloseMenuButton>
  //           <StyledNavLink href={"/"}>Home</StyledNavLink>
  //           <StyledNavLink href={"/"}>Plants</StyledNavLink>
  //           <StyledNavLink href={"/"}>Rooms</StyledNavLink>
  //         </StyledMenu>
  //       </>
  //     )}
  //   </>
  // );
}
