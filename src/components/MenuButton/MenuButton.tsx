import { StyledOpenMenuButton } from "./MenuButton.styled";

type MenuButtonProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function MenuButton({ open, setOpen }: MenuButtonProps) {
  return (
    <StyledOpenMenuButton open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledOpenMenuButton>
  );
}
