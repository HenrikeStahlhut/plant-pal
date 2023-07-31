import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Plant } from "@prisma/client";
import { ApiErrorResponse, ApiSuccessResponse } from "@/lib/fetcher";

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

export type GetPlantSuccessResponse = {
  plant: Plant;
};

type ResponseType =
  | ApiErrorResponse
  | ApiSuccessResponse
  | GetPlantSuccessResponse;

export default async function async(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  // GET
  if (req.method === "GET") {
    const plant = await prisma.plant.findFirst({
      where: {
        id: req.query.id,
      },
    });

    if (!plant) {
      return res.status(404).json({ error: "Plant not found" });
    }

    return res.status(200).json({ plant });
  }

  // DELETE
  if (req.method === "DELETE") {
    console.log("req", req.query);

    const deletePlant = await prisma.plant.delete({
      where: {
        id: req.query.id,
      },
    });

    if (!deletePlant) {
      return res.status(404).json({ error: "Couldn't delete plant" });
    }

    return res.status(200).json({ success: "Deleted plant" });
  }

  // TODO: how to update only name/type?
  // PUT
  if (req.method === "PUT") {
    if (!(req.body.name || req.body.roomId)) {
      return res.status(400).json({ error: "Malformed body" });
    }

    try {
      const plant = await prisma.plant.update({
        where: {
          id: req.query.id,
        },
        data: {
          name: req.body.name,
          roomId: req.body.roomId,
        },
      });

      return res.json({ plant });
    } catch (err) {
      console.log(err);

      return res.status(500).json({ error: "Could not update room" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
