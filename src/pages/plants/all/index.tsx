import Backbutton from "@/components/BackButton/Backbutton";
import Header from "@/components/Header/Header";
import Headline from "@/components/Headline/Headline";
import Menu from "@/components/Menu/Menu";
import PlantTile from "@/components/PlantTile/PlantTile";
import { ROUTES } from "@/routes";
import Layout from "@/components/Layout/Layout";

export default function AllPlants() {
  return (
    <>
      <Header>
        <Backbutton href={ROUTES.HOME} />
        <Menu />
      </Header>

      <Layout>
        <Headline>All Plants</Headline>
        <PlantTile />
      </Layout>
    </>
  );
}
