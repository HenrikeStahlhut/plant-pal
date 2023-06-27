import styled from "styled-components";

export const RoomsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 20px;
  margin: 25px 80px 100px 80px;

  @media (max-width: 600px) {
    margin: 25px 40px 100px 40px;
  }
`;

export const RoomTilesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
