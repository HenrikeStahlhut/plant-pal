import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  .space-left {
    width: 15%;
  }

  .container {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .space-right {
    width: 15%;
  }

  @media (max-width: 600px) {
    .space-left {
      width: 0;
    }

    .container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .space-right {
      width: 0;
    }
  }
`;
