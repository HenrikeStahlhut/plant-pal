import styled from "styled-components";
import { BiErrorCircle } from "react-icons/bi";

type ErrorProps = {
  children: React.ReactNode;
};

const StyledBanner = styled.div`
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

export default function ErrorBanner({ children }: ErrorProps) {
  return (
    <StyledBanner>
      <div>
        <BiErrorCircle size={30} color="#a13c3c" />
      </div>
      {children}
    </StyledBanner>
  );
}
