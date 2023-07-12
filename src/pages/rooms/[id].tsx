import DeleteButton, {
  DeleteButtonContentType,
} from "@/components/DeleteButton/DeleteButton";
import EditButton from "@/components/EditButton/EditButton";
import Headline from "@/components/Headline/Headline";
import PlantTile from "@/components/PlantList/PlantList";
import SubHeaderContainer from "@/components/SubHeaderContainer/SubHeaderContainer";
import TaskInfo from "@/components/TaskInfo/TaskInfo";
import { fetcher } from "@/lib/fetcher";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useSWR from "swr";
import { GetRoomSuccessResponse } from "../api/rooms/[id]";
import ErrorBanner from "@/components/Banner/ErrorBanner";
import LoadingBanner from "@/components/Banner/LoadingBanner";
import { useState } from "react";
import Subheadline from "@/components/Subheadline/Subheadline";
import PlantsInRoom from "@/components/PlantsInRoom/PlantsInRoom";

function RoomDetailpage() {
  const router = useRouter();
  // TODO: handle id being undefined
  const { id } = router.query;

  const [deleteError, setDeleteError] = useState<string | null>(null);

  console.log("id", id);

  const { data, error, isLoading } = useSWR<GetRoomSuccessResponse>(
    `/api/rooms/${id}`,
    fetcher
  );

  if (error || (!isLoading && !data)) {
    return <ErrorBanner>Failed to load</ErrorBanner>;
  }

  if (isLoading || !data) {
    return <LoadingBanner>Loading your room...</LoadingBanner>;
  }

  // TODO: error handling and success state
  // Handle delete room
  async function handleDeleteRoom() {
    const res = await fetch(`/api/rooms/${id}`, { method: "DELETE" });

    if (res.ok) {
      router.push("/rooms");
    }
    setDeleteError((await res.json()).error ?? "Could not delete plant");
  }

  return (
    <>
      <SubHeaderContainer>
        <Headline>{data.room.name}</Headline>
        <div>
          <DeleteButton
            contentType={DeleteButtonContentType.ROOM}
            handleDelete={handleDeleteRoom}
            error={null}
            setError={setDeleteError}
          />
          <EditButton contentType={"Room"} />
        </div>
      </SubHeaderContainer>
      <Subheadline>{data.room.plants.length} Plants</Subheadline>
      <TaskInfo />

      <PlantsInRoom plants={data.room.plants} />
    </>
  );
}

export default dynamic(() => Promise.resolve(RoomDetailpage), { ssr: false });
