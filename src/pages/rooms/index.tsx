import Backbutton from "@/components/BackButton/Backbutton";
import Header from "@/components/Header/Header";
import Headline from "@/components/Headline/Headline";
import Menu from "@/components/Menu/Menu";
import PlantTile from "@/components/PlantTile/PlantTile";
import TaskInfo from "@/components/TaskInfo/TaskInfo";
import { ROUTES } from "@/routes";
import Layout from "@/components/Layout/Layout";
import { RiDeleteBin2Fill, RiPencilFill } from "react-icons/ri";
import SubHeaderContainer from "@/components/SubHeaderContainer/SubHeaderContainer";
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import EditButton from "@/components/EditButton/EditButton";

export default function RoomDetailpage() {
  return (
    <>
      <Header>
        <Backbutton href={ROUTES.ROOMS_OVERVIEW} />
        <Menu />
      </Header>

      <Layout>
        <SubHeaderContainer>
          <Headline>Room Detail Page</Headline>
          <div>
            <DeleteButton />
            <EditButton />
          </div>
        </SubHeaderContainer>

        <TaskInfo />
        <PlantTile />
      </Layout>
    </>
  );
}
