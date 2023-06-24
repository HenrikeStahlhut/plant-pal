import Backbutton from "@/components/BackButton/Backbutton";
import Header from "@/components/Header/Header";
import Headline from "@/components/Headline/Headline";
import Menu from "@/components/Menu/Menu";
import PlantTile from "@/components/PlantTile/PlantTile";
import RoomsList from "@/components/RoomsList/RoomsList";
import { ROUTES } from "@/routes";

export default function AllPlants() {
  return (
    <>
      <Header>
        <Backbutton href={ROUTES.HOME} />
        <Menu />
      </Header>
      <Headline>All Plants</Headline>
      <PlantTile />
    </>
  );
}
