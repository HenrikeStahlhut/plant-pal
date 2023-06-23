import { StyledSubheadline } from "./Subheadline.styled";

type SubheadlineProps = {
  children: React.ReactNode;
};

export default function Subheadline({ children }: SubheadlineProps) {
  return <StyledSubheadline>{children}</StyledSubheadline>;
}
