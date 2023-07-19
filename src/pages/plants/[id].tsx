import DeleteButton, {
  DeleteButtonContentType,
} from "@/components/DeleteButton/DeleteButton";
import EditButton, {
  EditButtonContentType,
} from "@/components/EditButton/EditButton";
import Headline from "@/components/Headline/Headline";
import SubHeaderContainer from "@/components/SubHeaderContainer/SubHeaderContainer";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";
import { GetPlantSuccessResponse } from "../api/plants/[id]";
import { fetcher } from "@/lib/fetcher";
import ErrorBanner from "@/components/Banner/ErrorBanner";
import LoadingBanner from "@/components/Banner/LoadingBanner";
import { useState } from "react";
import { FaCouch } from "react-icons/fa";
import { PiPottedPlantFill, PiSunFill } from "react-icons/pi";
import { IoWaterSharp } from "react-icons/io5";
import ChangeRoomsButton from "@/components/ChangeRoomsButton/ChangeRoomsButton";

const StyledPlantImage = styled(Image)`
  border-radius: 15px;
  cursor: pointer;

  @media (max-width: 600px) {
    margin: 20px 5em;
  }
`;

export const StyledCard = styled.div`
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

export const DetailsContainer = styled.div`
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
  const router = useRouter();
  const { id } = router.query;

  const [deleteError, setDeleteError] = useState<string | null>(null);

  const { data, error, isLoading } = useSWR<GetPlantSuccessResponse>(
    `/api/plants/${id}`,
    fetcher
  );

  if (error || (!isLoading && !data)) {
    return <ErrorBanner>Failed to load</ErrorBanner>;
  }

  if (isLoading || !data) {
    return <LoadingBanner>Loading your room...</LoadingBanner>;
  }

  // Handle delete Plant
  async function handleDeletePlant() {
    const res = await fetch(`/api/plants/${id}`, { method: "DELETE" });

    console.log("res", res.ok);

    if (res.ok) {
      router.push("/plants/all");
      return;
    }

    setDeleteError((await res.json()).error ?? "Could not delete plant");
  }

  // TODO: Display plants room --> how to access rooms name when only roomId is included in plants?
  // TODO (later): add sunlight and watering info

  return (
    <>
      <SubHeaderContainer>
        <Headline>{data.plant.name}</Headline>
        <div>
          <DeleteButton
            contentType={DeleteButtonContentType.PLANT}
            handleDelete={handleDeletePlant}
            error={deleteError}
            setError={setDeleteError}
          />
          <EditButton contentType={EditButtonContentType.PLANT} />
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
            <PiPottedPlantFill size={30} />
            <StyledText>{data.plant.name}</StyledText>
          </StyledCard>
          <StyledCard>
            <FaCouch size={30} />
            <StyledText>
              {data.plant.roomId ? data.plant.roomId : "No room assigned"}
            </StyledText>
          </StyledCard>
          <StyledCard>
            <PiSunFill size={30} />
            <StyledText>sunlight</StyledText>
          </StyledCard>
          <StyledCard>
            <IoWaterSharp size={30} />
            <StyledText>water</StyledText>
          </StyledCard>
        </div>
        <ChangeRoomsButton />
      </DetailsContainer>
    </>
  );
}
