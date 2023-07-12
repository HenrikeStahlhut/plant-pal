import { WrapperLink } from "../WrapperLink/WrapperLink.styled";
import {
  StyledCard,
  StyledImage,
  StyledPlantDetails,
} from "./PlantList.styled";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { GetPlantsSuccessResponse } from "@/pages/api/plants";
import ErrorBanner from "../Banner/ErrorBanner";

export default function PlantList() {
  const { data, error, isLoading } = useSWR<GetPlantsSuccessResponse>(
    "/api/plants",
    fetcher
  );

  if (error || (!isLoading && !data)) {
    return <ErrorBanner>Failed to load</ErrorBanner>;
  }

  if (isLoading || !data) {
    return <div>loading...</div>;
  }
  return (
    <>
      {data.plants.map((plant) => (
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
              Room: {}
            </StyledPlantDetails>
          </StyledCard>
        </WrapperLink>
      ))}
    </>
  );
}
