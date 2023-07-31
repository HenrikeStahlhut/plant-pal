import styled from "styled-components";

export const StyledOpenMenuButton = styled.button<{ open: boolean }>`
  @media (max-width: 600px) {
    position: ${({ open }) => (open ? "absolute" : "relative")};
    margin: 20px 50px;
    padding: 0;
    z-index: 2;
    background: transparent;
    color: ${({ open }) => (open ? "var(--white)" : "var(--dark-green)")};

    div {
      position: relative;
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      margin-top: 0.4rem;
      background-color: ${({ open }) =>
        open ? "var(--white)" : "var(--dark-green)"};

      transition: all 0.3s linear;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }
      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
