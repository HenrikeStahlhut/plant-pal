import Image from "next/image";
import { RoomTileCaption, RommTileImage } from "./RoomTile.styled";
import Link from "next/link";
import { WrapperLink } from "../WrapperLink/WrapperLink.styled";
import { Room, RoomType } from "@prisma/client";

type RoomTileProps = {
  room: Room;
};

export default function RoomTile({ room }: RoomTileProps) {
  return (
    <>
      <WrapperLink href={"/"}>
        <RommTileImage
          src={`/rooms/${room.type}.png`}
          alt={`Image of ${room.name}`}
          width={130}
          height={130}
        />
        <RoomTileCaption>{room.name}</RoomTileCaption>
      </WrapperLink>
    </>
  );
}
