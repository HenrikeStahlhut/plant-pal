import Image from "next/image";

interface roomPops {
  title: string;
  type: string;
}

export const RoomType = Object.freeze({
  INVALID: "INVALID",
  KITCHEN: "KITCHEN",
  LIVING_ROOM: "LIVING_ROOM",
  BEDROOM: "BEDROOM",
  BATHROOM: "BATHROOM",
  DINING_ROOM: "DINING_ROOM",
  HALLWAY: "HALLWAY",
  OFFICE: "OFFICE",
});

export default function RoomTile({ title, type }: roomPops) {
  return (
    <>
      <Image
        src={`/rooms/${type}.png`}
        alt={`Image of ${title}`}
        width={150}
        height={150}
      />
      <p>{title}</p>
    </>
  );
}

// TODO: style image caption and images in styled components file
