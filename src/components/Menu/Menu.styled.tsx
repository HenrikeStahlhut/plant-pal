import Link from "next/link";
import styled from "styled-components";

export const StyledMenu = styled.nav<{ open: boolean }>`
  @media (max-width: 600px) {
    width: 100%;
  }

  top: 0;
  right: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: var(--dark-green);
  z-index: 1;
  padding: 10rem 0;
  flex-direction: column;
  display: ${({ open }) => (open ? "flex" : "none")};
  align-items: center;
`;

export const StyledNavLink = styled(Link)`
  padding: 0 2rem;
  margin: 1rem 0;
  font-size: 2rem;
  color: var(--white);
  text-decoration: none;

  :hover {
    color: var(--highlight-green);
    cursor: pointer;
  }
`;

// export const StyledOverlay = styled.div`
//   background: rgba(114, 122, 67, 0.5);
//   top: 0px;
//   width: 100vw;
//   height: 100vh;
//   position: fixed;
//   backdrop-filter: blur(1px);
//   z-index: 0;
// `;
