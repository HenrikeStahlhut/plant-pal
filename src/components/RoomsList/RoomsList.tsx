import { Room, RoomType } from "@prisma/client";
import RoomTile from "../RoomTile/RoomTile";
import { RoomsContainer, RoomTilesContainer } from "./RoomsList.styled";

type RoomsListProps = {
  rooms: Room[];
};

export default function RoomsList({ rooms }: RoomsListProps) {
  return (
    <>
      <RoomsContainer>
        {rooms.map((room) => (
          <RoomTilesContainer key={room.id}>
            <RoomTile room={room} />
          </RoomTilesContainer>
        ))}
      </RoomsContainer>
    </>
  );
}
