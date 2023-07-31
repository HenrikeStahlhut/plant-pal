import AddPlantModal from "@/components/AddPlantModal/AddPlantModal";
import Headline from "@/components/Headline/Headline";
import PlantList from "@/components/PlantList/PlantList";
import SubHeaderContainer from "@/components/SubHeaderContainer/SubHeaderContainer";

export default function AllPlants() {
  return (
    <>
      <SubHeaderContainer>
        <Headline>All Plants</Headline>

        <AddPlantModal />
      </SubHeaderContainer>

      <PlantList />
    </>
  );
}
