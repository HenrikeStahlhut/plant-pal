import DeleteButton, {
  DeleteButtonContentType,
} from "@/components/DeleteButton/DeleteButton";
import EditButton, {
  EditButtonContentType,
} from "@/components/EditButton/EditButton";
import Headline from "@/components/Headline/Headline";
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
  const { id } = router.query;

  const [deleteError, setDeleteError] = useState<string | null>(null);

  const { data, error, isLoading } = useSWR<GetRoomSuccessResponse>(
    `/api/rooms/${id}`,
    fetcher
  );

  // ? handle id being undefined?
  if (error || (!isLoading && !data) || !id) {
    return <ErrorBanner>Failed to load</ErrorBanner>;
  }

  if (isLoading || !data) {
    return <LoadingBanner>Loading your room...</LoadingBanner>;
  }

  const plantsArrayLength = data.room.plants.length;

  // Handle delete room
  async function handleDeleteRoom() {
    const res = await fetch(`/api/rooms/${id}`, { method: "DELETE" });

    if (!res.ok) {
      setDeleteError((await res.json()).error ?? "Could not delete plant");
    }
    router.push("/rooms");
    return;
  }

  return (
    <>
      <SubHeaderContainer>
        <Headline>{data.room.name}</Headline>
        <div>
          <DeleteButton
            contentType={DeleteButtonContentType.ROOM}
            handleDelete={handleDeleteRoom}
            error={deleteError}
            setError={setDeleteError}
            plants={plantsArrayLength}
          />
          <EditButton contentType={EditButtonContentType.ROOM} />
        </div>
      </SubHeaderContainer>
      <Subheadline>{data.room.plants.length} Plants</Subheadline>
      <TaskInfo />

      <PlantsInRoom plants={data.room.plants} />
    </>
  );
}

export default dynamic(() => Promise.resolve(RoomDetailpage), { ssr: false });
