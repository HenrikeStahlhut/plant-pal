import { Room } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { StyledCard } from "../RoomsList/RoomsList.styled";
import { RoomsContainer, StyledRoomDetails } from "./RoomsList.styled";
import { ROUTES } from "@/routes";

type RoomsListProps = {
  rooms: Room[];
};

export default function RoomsList({ rooms }: RoomsListProps) {
  return (
    <RoomsContainer>
      {rooms.map((room, index) => (
        <Link
          href={`${ROUTES.ROOMS_OVERVIEW}/${room.id}`}
          key={index}
          className="link"
        >
          <StyledCard key={index}>
            <Image
              className="styledImage"
              src={`/rooms/${room.type}.png`}
              alt={`Image of ${room.name}`}
              width={130}
              height={130}
            />
            <StyledRoomDetails>
              <p className="cardHeadline">{room.name}</p>
            </StyledRoomDetails>
          </StyledCard>
        </Link>
      ))}
    </RoomsContainer>
  );
}
