import styled from "styled-components";

type LoadingBannerProps = {
  children: React.ReactNode;
};

const StyledLoadingBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LoadingBanner({ children }: LoadingBannerProps) {
  return <StyledLoadingBanner>{children}</StyledLoadingBanner>;
}
