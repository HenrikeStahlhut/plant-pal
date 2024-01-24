import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Plant } from "@prisma/client";
import { ApiErrorResponse, ApiSuccessResponse } from "@/lib/fetcher";
import { WateringStatus } from "@/lib/wateringStatus";

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

export type GetPlantSuccessResponse = {
  plant: Plant & { wateringStatus: WateringStatus };
};

export type UpdatPlamtSuccessResponse = {
  plant: Plant;
};

type ResponseType =
  | ApiErrorResponse
  | ApiSuccessResponse
  | GetPlantSuccessResponse
  | UpdatPlamtSuccessResponse;

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

    // determine wether the plant needs to be watered today by checking todays date and comparing to the watering schedule
    // set needsWatering to true or false

    let needsWatering = false;

    // as const is used to make array of typed strings and not only strings (can be used instead of switch statement )
    const needsWateringX =
      plant[
        (
          [
            "wateringScheduleSunday",
            "wateringScheduleMonday",
            "wateringScheduleTuesday",
            "wateringScheduleWednesday",
            "wateringScheduleThursday",
            "wateringScheduleFriday",
            "wateringScheduleSaturday",
          ] as const
        )[new Date().getDay()]
      ];

    switch (new Date().getDay()) {
      case 0:
        // Sunday
        needsWatering = plant.wateringScheduleSunday;
        break;
      case 1:
        // Monday
        needsWatering = plant.wateringScheduleMonday;
        break;
      case 2:
        // Tuesday
        needsWatering = plant.wateringScheduleTuesday;
        break;
      case 3:
        // Wednesday
        needsWatering = plant.wateringScheduleWednesday;
        break;
      case 4:
        // Thursday
        needsWatering = plant.wateringScheduleThursday;
        break;
      case 5:
        // Friday
        needsWatering = plant.wateringScheduleFriday;
        break;
      case 6:
        // Saturday
        needsWatering = plant.wateringScheduleSaturday;
        break;
    }

    if (!needsWatering) {
      return res.status(200).json({
        plant: {
          ...plant,
          wateringStatus: WateringStatus.NO_TODO,
        },
      });
    }

    /* Explaination: get wateringjobs where plantId is id of current plant and createdAt is greater than or equal to today. 
    Order by is used to sort the results by createdAt in descending order --> most recent watering jobs are first.
    The take option is used to limit the results to the first record only. */

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const wateringJob = await prisma.wateringJob.findFirst({
      where: {
        plantId: plant.id,
        createdAt: {
          gte: today,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // If there is no watering job, then return the plant here with status TODO_OPEN
    if (!wateringJob) {
      return res.status(200).json({
        plant: {
          ...plant,
          wateringStatus: WateringStatus.TODO_OPEN,
        },
      });
    }

    // If there is a watering job, then return the plant with status TODO_DONE
    return res.status(200).json({
      plant: {
        ...plant,
        wateringStatus: WateringStatus.TODO_DONE,
      },
    });
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
