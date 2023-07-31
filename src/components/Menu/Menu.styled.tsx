import styled from "styled-components";

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
