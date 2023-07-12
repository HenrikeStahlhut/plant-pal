import { WrapperLink } from "../WrapperLink/WrapperLink.styled";
import {
  StyledCard,
  StyledImage,
  StyledPlantDetails,
} from "../PlantList/PlantList.styled";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { GetPlantsSuccessResponse } from "@/pages/api/plants";
import ErrorBanner from "../Banner/ErrorBanner";
import LoadingBanner from "../Banner/LoadingBanner";
import { Plant, Room } from "@prisma/client";

type PlantsInRoomProps = {
  plants: Plant[];
};

// displays plants in respective room

export default function PlantsInRoom({ plants }: PlantsInRoomProps) {
  const { data, error, isLoading } = useSWR<GetPlantsSuccessResponse>(
    "/api/rooms",
    fetcher
  );

  if (error || (!isLoading && !data)) {
    return <ErrorBanner>Failed to load Plants</ErrorBanner>;
  }

  if (isLoading || !data) {
    return <LoadingBanner>Loading your plants...</LoadingBanner>;
  }

  return (
    <>
      {plants.map((plant) => (
        <WrapperLink key={plant.id} href={`/plants/${plant.id}`}>
          <StyledCard key={plant.id}>
            <StyledImage
              src="/plant2.png"
              width={100}
              height={100}
              alt="Plant"
            />
            <StyledPlantDetails>
              {plant.name} <br />
            </StyledPlantDetails>
          </StyledCard>
        </WrapperLink>
      ))}
    </>
  );
}
