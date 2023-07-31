import { StyledOpenMenuButton } from "./MenuButton.styled";

type MenuButtonProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

// three divs = menu bars of the menu icon and are used for the animations when opening/closing the menu

export default function MenuButton({ open, setOpen }: MenuButtonProps) {
  return (
    <StyledOpenMenuButton open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledOpenMenuButton>
  );
}
