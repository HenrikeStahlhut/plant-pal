import AddRoomModal from "@/components/AddRoomModal/AddRoomModal";
import ErrorBanner from "@/components/Banner/ErrorBanner";
import Headline from "@/components/Headline/Headline";
import RoomsList from "@/components/RoomsList/RoomsList";
import SubHeaderContainer from "@/components/SubHeaderContainer/SubHeaderContainer";
import { fetcher } from "@/lib/fetcher";
import { GetRoomsSuccessResponse } from "@/pages/api/rooms";
import useSWR from "swr";
import LoadingBanner from "@/components/Banner/LoadingBanner";

const AllRoomsWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <SubHeaderContainer>
      <Headline>All Rooms</Headline>
      <div>
        <AddRoomModal />
      </div>
    </SubHeaderContainer>

    {children}
  </>
);

export default function AllRooms() {
  const { data, error, isLoading } = useSWR<GetRoomsSuccessResponse>(
    "/api/rooms",
    fetcher
  );

  if (error || (!isLoading && !data)) {
    return (
      <AllRoomsWrapper>
        <ErrorBanner>Failed to load</ErrorBanner>
      </AllRoomsWrapper>
    );
  }

  if (isLoading || !data) {
    // TODO style error banner
    return (
      <AllRoomsWrapper>
        <LoadingBanner>Loading your rooms...</LoadingBanner>
      </AllRoomsWrapper>
    );
  }

  return (
    <AllRoomsWrapper>
      <RoomsList rooms={data.rooms} />
    </AllRoomsWrapper>
  );
}
