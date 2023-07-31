import Menu from "../Menu/Menu";
import { LayoutContainer } from "./Layout.styled";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <LayoutContainer>
        <div className="space-left"> </div>
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="space-right"> </div>
      </LayoutContainer>
      <LayoutContainer>
        <div className="space-left"> </div>
        <div className="container">{children}</div>
        <div className="space-right"> </div>
      </LayoutContainer>
    </>
  );
}
