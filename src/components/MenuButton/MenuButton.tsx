import { TbMenu2 } from "react-icons/tb";
import { StyledOpenMenuButton } from "./MenuButton.styled";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function MenuButton({ open, setOpen }: Props) {
  return (
    <StyledOpenMenuButton open={open} onClick={() => setOpen(!open)}>
      {/* <TbMenu2 size={30} /> */}
      <div />
      <div />
      <div />
    </StyledOpenMenuButton>
  );
}
