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

    // return res.status(400).json({ error: "dummy error bla bla api" });

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

  // TODO: PUT, but same problem like with update room

  return res.status(405).json({ error: "Method not allowed" });
}
