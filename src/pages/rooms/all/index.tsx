import RoomsList from "@/components/RoomsList/RoomsList";
import { Room, RoomType } from "@prisma/client";
import Headline from "@/components/Headline/Headline";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import Backbutton from "@/components/BackButton/Backbutton";
import { ROUTES } from "@/routes";

const dummyRooms: Room[] = [
  {
    id: "d826819d-07d8-49ce-9785-fd704f400f1c",
    name: "Kitchen",
    type: RoomType.KITCHEN,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "f738a061-459d-4b71-b77e-66131589b0c2",
    name: "Living Room",
    type: RoomType.LIVING_ROOM,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "f951c15a-f29b-4966-9fea-0f16e2356d17",
    name: "Bathroom",
    type: RoomType.BATHROOM,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "461c6967-3d08-4263-ba1b-1c27ca533a01",
    name: "Bedroom",
    type: RoomType.BEDROOM,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "1cf2ef8a-6e3b-4226-8e14-8fec6f107e90",
    name: "Office",
    type: RoomType.OFFICE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "a5651e7c-1c7a-46ce-8094-b6747cd1439a",
    name: "Hallway",
    type: RoomType.HALLWAY,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "42b6c09b-31d6-45d5-b95d-bccb40c9864d",
    name: "Dining Room",
    type: RoomType.DINING_ROOM,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "33c68cc0-aeaf-4f47-88c7-4ddf0387befb",
    name: "Guest Bedroom",
    type: RoomType.BEDROOM,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function AllRooms() {
  return (
    <>
      <Header>
        <Backbutton href={ROUTES.HOME} />
        <Menu />
      </Header>
      <Headline>All Rooms</Headline>
      <RoomsList rooms={dummyRooms} />
    </>
  );
}
