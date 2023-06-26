import Backbutton from "@/components/BackButton/Backbutton";
import Header from "@/components/Header/Header";
import Headline from "@/components/Headline/Headline";
import Menu from "@/components/Menu/Menu";
import PlantTile from "@/components/PlantTile/PlantTile";
import TaskInfo from "@/components/TaskInfo/TaskInfo";
import { ROUTES } from "@/routes";
import Layout from "@/components/Layout/Layout";

export default function RoomDetailpage() {
  return (
    <>
      <Header>
        <Backbutton href={ROUTES.ROOMS_OVERVIEW} />
        <Menu />
      </Header>

      <Layout>
        <Headline>Room Detail Page</Headline>
        <TaskInfo />
        <PlantTile />
      </Layout>
    </>
  );
}
