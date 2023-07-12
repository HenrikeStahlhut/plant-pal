import styled from "styled-components";

type LoadingProps = {
  children: React.ReactNode;
};

const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LoadingBanner({ children }: LoadingProps) {
  return <StyledLoading>{children}</StyledLoading>;
}
