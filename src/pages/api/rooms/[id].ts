import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Plant, Room } from "@prisma/client";
import { ApiErrorResponse, ApiSuccessResponse } from "@/lib/fetcher";

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

export type GetRoomSuccessResponse = {
  room: Room & { plants: Plant[] };
};

export type UpdateRoomSuccessResponse = {
  room: Room;
};

type ResponseType =
  | ApiErrorResponse
  | ApiSuccessResponse
  | GetRoomSuccessResponse
  | UpdateRoomSuccessResponse;

export default async function async(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  // GET
  if (req.method === "GET") {
    const room = await prisma.room.findFirst({
      where: {
        id: req.query.id,
      },
      include: {
        plants: true,
      },
    });

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    return res.status(200).json({ room });
  }

  // DELETE
  if (req.method === "DELETE") {
    const room = await prisma.room.findFirst({
      where: {
        id: req.query.id,
      },
      include: {
        plants: true,
      },
    });

    if (!room) {
      return res.status(200).json({ success: "Room deleted" });
    }

    if (room.plants.length) {
      return res.status(400).json({
        error: "Can't delete room with active plants",
      });
    }

    const deleteRoom = await prisma.room.delete({
      where: {
        id: req.query.id,
      },
    });

    if (!deleteRoom) {
      return res.status(404).json({ error: "Couldn't delete room" });
    }

    return res.status(200).json({ success: "Room deleted" });
  }

  // PUT/Edit room

  if (req.method === "PUT") {
    if (!req.body.name) {
      return res.status(400).json({ error: "Malformed body" });
    }

    try {
      const room = await prisma.room.update({
        where: {
          id: req.query.id,
        },
        data: {
          name: req.body.name,
        },
      });

      return res.json({ room });
    } catch (err) {
      console.log(err);

      return res.status(500).json({ error: "Could not update room" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
