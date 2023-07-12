import { RoomType } from "@prisma/client";

// function isRoomType(value: any): boolean { --> function gibt boolean zurück, aber wenn die function true ist wird RoomType zurück gegeben (hence value is RoomType)
export function isRoomType(value: any): value is RoomType {
  return Object.values(RoomType).some((type) => value === type);
}
