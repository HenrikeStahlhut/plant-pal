import styled from "styled-components";
import { BiErrorCircle } from "react-icons/bi";

type ErrorBannerProps = {
  children: React.ReactNode;
};

const StyledErrorBanner = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3a2a2;

  margin: 20px;
  padding: 10px;
  border-radius: 15px;

  div {
    margin: 0px 10px;
  }
`;

export default function ErrorBanner({ children }: ErrorBannerProps) {
  return (
    <StyledErrorBanner>
      <div>
        <BiErrorCircle size={30} color="#a13c3c" />
      </div>
      {children}
    </StyledErrorBanner>
  );
}
