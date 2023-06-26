import {
  StyledCard,
  StyledImage,
  StyledPlantDetails,
} from "./PlantTile.styled";

const dummyPlants = [
  {
    id: 1,
    name: "Monstera",
    room: "Living Room",
    lastWatered: "2021-06-01",
    wateringInterval: 7,
  },
];

export default function PlantTile() {
  return (
    <>
      {dummyPlants.map((plant) => (
        <StyledCard key={plant.id}>
          <StyledImage src="/plant.png" width={100} height={100} alt="Plant" />
          <StyledPlantDetails>
            {plant.name} <br />
            Room: {plant.room}
          </StyledPlantDetails>
        </StyledCard>
      ))}
    </>
  );
}
