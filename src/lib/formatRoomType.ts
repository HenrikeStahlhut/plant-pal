import { RoomType } from "@prisma/client";

export const formatRoomType = (roomType: RoomType): string => {
  switch (roomType) {
    default:
    case RoomType.INVALID:
      return "Invalid room type";
    case RoomType.KITCHEN:
      return "Kitchen";
    case RoomType.BATHROOM:
      return "Bathroom";
    case RoomType.BEDROOM:
      return "Bedroom";
    case RoomType.DINING_ROOM:
      return "Dining Room";
    case RoomType.HALLWAY:
      return "Hallway";
    case RoomType.LIVING_ROOM:
      return "Living Room";
    case RoomType.OFFICE:
      return "Office";
  }
};
