-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "wateringScheduleFriday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "wateringScheduleMonday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "wateringScheduleSaturday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "wateringScheduleSunday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "wateringScheduleThursday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "wateringScheduleTuesday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "wateringScheduleWednesday" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "WateringJob" (
    "id" TEXT NOT NULL,
    "plantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WateringJob_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WateringJob" ADD CONSTRAINT "WateringJob_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
