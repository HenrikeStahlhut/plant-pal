import { RoomType } from "@prisma/client";

// explanation for 'value is RoomType: function returns boolean, and if the value is true it retuirns RoomType, which is why the value is Roomtype

export function isRoomType(value: any): value is RoomType {
  return Object.values(RoomType).some((type) => value === type);
}
