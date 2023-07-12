import styled from "styled-components";

// export const StyledMenu = styled.nav<{ open: boolean }>`
//   @media (max-width: 600px) {
//     width: 100%;
//   }

//   top: 0;
//   right: 0;
//   height: 100vh;
//   width: 35vw;
//   position: fixed;
//   background-color: var(--menu);
//   z-index: 1;
//   padding: 10rem 0;
//   flex-direction: column;
//   display: ${({ open }) => (open ? "flex" : "none")};
//   align-items: center;
// `;

// export const StyledNavLink = styled(Link)`
//   padding: 0 2rem;
//   margin: 1rem 0;
//   font-size: 2rem;
//   color: var(--white);
//   text-decoration: none;

//   :hover {
//     color: var(--dark-green);
//     cursor: pointer;
//   }
// `;

export const StyledNav = styled.div<{ open: boolean }>`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .link {
    color: black;
    text-decoration: none;
    padding: 0px 30px;
    font-size: 1.2em;

    &:hover {
      //..
    }
  }

  @media (max-width: 600px) {
    background-color: var(--menu);
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;

    .link {
      color: white;
      text-decoration: none;
      padding: 30px 0px;
      font-size: 2em;

      &:hover {
        color: var(--dark-green);
      }
    }
  }
`;
