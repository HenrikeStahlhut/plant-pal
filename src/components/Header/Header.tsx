import { HeaderContainer } from "./Header.styled";

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return <HeaderContainer>{children}</HeaderContainer>;
}
