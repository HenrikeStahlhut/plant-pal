import { Room } from "@prisma/client";
import { WrapperLink } from "../WrapperLink/WrapperLink.styled";
import { RommTileImage } from "./RoomTile.styled";

type RoomTileProps = {
  room: Room;
};

export default function RoomTile({ room }: RoomTileProps) {
  return (
    <WrapperLink href={"/rooms"}>
      <RommTileImage
        src={`/rooms/${room.type}.png`}
        alt={`Image of ${room.name}`}
        width={130}
        height={130}
      />
    </WrapperLink>
  );
}
