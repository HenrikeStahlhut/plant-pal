import styled from "styled-components";
import Image from "next/image";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  border-radius: 15px;
  padding: 15px;
  margin: 20px 0px;

  @media (max-width: 600px) {
    margin: 20px 50px;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 10px;
  margin: 0px 10px;
`;

export const StyledPlantDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NoPlantsDisclaimer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20%;
  font-weight: 800;
  font-size: 20px;
`;
