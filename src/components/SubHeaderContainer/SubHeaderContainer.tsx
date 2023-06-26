import { StyledSubHeaderContainer } from "./SubHeaderContainer.styled";

type SubHeaderContainerProps = {
  children: React.ReactNode;
};

export default function SubHeaderContainer({
  children,
}: SubHeaderContainerProps) {
  return <StyledSubHeaderContainer>{children}</StyledSubHeaderContainer>;
}
