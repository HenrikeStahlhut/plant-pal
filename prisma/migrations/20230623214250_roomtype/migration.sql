/*
  Warnings:

  - You are about to drop the column `roomType` on the `Room` table. All the data in the column will be lost.
  - Added the required column `type` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RoomType" AS ENUM ('INVALID', 'KITCHEN', 'LIVING_ROOM', 'BEDROOM', 'BATHROOM', 'DINING_ROOM', 'HALLWAY', 'OFFICE');

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "roomType",
ADD COLUMN     "type" "RoomType" NOT NULL;
