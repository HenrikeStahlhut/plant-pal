import RoomTile from "../RoomTile/RoomTile";
import { RoomsContainer, RoomTilesContainer } from "./ListOfAllRooms.styled";

const dummyRooms = [
  {
    id: 1,
    name: "Kitchen",
    roomType: "KITCHEN",
  },
  {
    id: 2,
    name: "Living room",
    roomType: "LIVING_ROOM",
  },
  {
    id: 3,
    name: "Bedroom",
    roomType: "BEDROOM",
  },
  {
    id: 4,
    name: "Bathroom",
    roomType: "BATHROOM",
  },
];

export default function ListOfAllRooms() {
  return (
    <>
      <RoomsContainer>
        {dummyRooms.map((room) => (
          <RoomTilesContainer key={room.id}>
            <RoomTile title={room.name} type={room.roomType} />
          </RoomTilesContainer>
        ))}
      </RoomsContainer>
    </>
  );
}
