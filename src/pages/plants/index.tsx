import Backbutton from "@/components/BackButton/Backbutton";
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import EditButton from "@/components/EditButton/EditButton";
import Header from "@/components/Header/Header";
import Headline from "@/components/Headline/Headline";
import Layout from "@/components/Layout/Layout";
import Menu from "@/components/Menu/Menu";
import SubHeaderContainer from "@/components/SubHeaderContainer/SubHeaderContainer";
import { ROUTES } from "@/routes";
import styled from "styled-components";
import Image from "next/image";

const StyledPlantImage = styled(Image)`
  /* margin: 0px 30px 0px 0px; */
  border-radius: 15px;
  cursor: pointer;

  @media (max-width: 600px) {
    margin: 20px 5em;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 8em;
  height: 8em;
  background-color: var(--white);
  border-radius: 15px;
  padding: 20px;
  margin: 1em;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 8em;
  }
`;

const StyledText = styled.p`
  margin: 10px 0 0 0;
`;

const DetailsContainer = styled.div`
  display: flex;
  max-width: 700px;
  align-items: center;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media only screen and(max-width: 1033px) and (min-width: 600px) {
    display: flex;

    flex-wrap: wrap;
    justify-content: center;
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default function PlantDetailPage() {
  return (
    <>
      <Header>
        <Backbutton href={ROUTES.ROOMS_OVERVIEW} />
        <Menu />
      </Header>

      <Layout>
        <SubHeaderContainer>
          <Headline>Monstera</Headline>
          <div>
            <DeleteButton contentType={"Plant"} />
            <EditButton contentType={"Plant"} />
          </div>
        </SubHeaderContainer>
        <DetailsContainer>
          <StyledPlantImage
            src="/plant2.png"
            alt="Plant"
            width={300}
            height={300}
          />
          <div>
            <StyledCard>
              <StyledText>Plant Name</StyledText>
            </StyledCard>
            <StyledCard>
              <StyledText>Room</StyledText>
            </StyledCard>
            <StyledCard>
              <StyledText>sunlight</StyledText>
            </StyledCard>
            <StyledCard>
              <StyledText>water</StyledText>
            </StyledCard>
          </div>
        </DetailsContainer>
      </Layout>
    </>
  );
}
