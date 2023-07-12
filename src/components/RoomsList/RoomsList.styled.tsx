import styled from "styled-components";

export const RoomsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5em;

  .link {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    justify-items: center;
    margin: 0px 25px;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  border-radius: 15px;
  padding: 15px;
  /* margin: 20px 20px 20px 0px; */

  .styledImage {
    border-radius: 15px;
  }

  @media (max-width: 600px) {
    background-color: transparent;
    flex-direction: column;

    padding: 0px;
  }
`;

export const StyledRoomDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;

  .cardHeadline {
    font-weight: 800;
  }

  @media (max-width: 600px) {
    margin: 10px 0px;

    .details {
      visibility: hidden;
    }
  }
`;

export const RoomTilesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
