import { ApiErrorResponse } from "@/lib/fetcher";
import prisma from "@/lib/prisma";
import { Plant } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    name: string;
    roomId: string;
  };
}

export type PostPlantSuccessResponse = {
  plant: Plant;
};

export type GetPlantsSuccessResponse = {
  plants: Plant[];
};

type ResponseType =
  | ApiErrorResponse
  | PostPlantSuccessResponse
  | GetPlantsSuccessResponse;

export default async function async(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    if (!req.body.name || !req.body.roomId) {
      return res.status(400).json({ error: "Malformed body" });
    }

    try {
      const plant = await prisma.plant.create({
        data: {
          name: req.body.name,
          roomId: req.body.roomId,
        },
      });

      return res.json({ plant });
    } catch (err) {
      return res.status(500).json({ error: "Could not create plant" });
    }
  }

  if (req.method === "GET") {
    const plants = await prisma.plant.findMany();

    return res.json({ plants });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
