import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { isRoomType } from "@/lib/typeguards";
import { Room } from "@prisma/client";
import { ApiErrorResponse } from "@/lib/fetcher";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    name?: string;
    type?: string;
  };
}

export type PostRoomSuccessResponse = {
  room: Room;
};

export type GetRoomsSuccessResponse = {
  rooms: Room[];
};

type ResponseType =
  | ApiErrorResponse
  | PostRoomSuccessResponse
  | GetRoomsSuccessResponse;

export default async function async(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    if (!req.body.name || !req.body.type || !isRoomType(req.body.type)) {
      return res.status(400).json({ error: "Malformed body" });
    }

    try {
      const room = await prisma.room.create({
        data: {
          name: req.body.name,
          type: req.body.type,
        },
      });

      return res.json({ room });
    } catch (err) {
      return res.status(500).json({ error: "Could not create room" });
    }
  }

  if (req.method === "GET") {
    const rooms = await prisma.room.findMany();

    return res.json({ rooms });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
