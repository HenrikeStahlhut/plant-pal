/*
  Warnings:

  - The values [INVALID] on the enum `RoomType` will be removed. If these variants are still used in the database, this will fail.
  - Made the column `roomId` on table `Plant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RoomType_new" AS ENUM ('KITCHEN', 'LIVING_ROOM', 'BEDROOM', 'BATHROOM', 'DINING_ROOM', 'HALLWAY', 'OFFICE', 'OTHER');
ALTER TABLE "Room" ALTER COLUMN "type" TYPE "RoomType_new" USING ("type"::text::"RoomType_new");
ALTER TYPE "RoomType" RENAME TO "RoomType_old";
ALTER TYPE "RoomType_new" RENAME TO "RoomType";
DROP TYPE "RoomType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Plant" DROP CONSTRAINT "Plant_roomId_fkey";

-- AlterTable
ALTER TABLE "Plant" ALTER COLUMN "roomId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Plant" ADD CONSTRAINT "Plant_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
