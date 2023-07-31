import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;

  .menuContainer {
    width: 60%;
  }

  .space-left {
    width: 20%;
  }

  .container {
    width: 60%;
  }

  .space-right {
    width: 20%;
  }

  @media (max-width: 600px) {
    .space-left {
      width: 0;
    }

    .container {
      width: 100%;
    }

    .space-right {
      width: 0;
    }
  }
`;
