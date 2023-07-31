import { HeaderContainer } from "./Header.styled";

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <HeaderContainer>
      <div className="space-left"> </div>
      <div className="container">{children}</div>
      <div className="space-right"> </div>
    </HeaderContainer>
  );
}
