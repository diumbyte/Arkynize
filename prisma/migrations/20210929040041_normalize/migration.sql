/*
  Warnings:

  - You are about to drop the column `catalystCount` on the `Awakening` table. All the data in the column will be lost.
  - Made the column `zodiacId` on table `Awakening` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Awakening" DROP CONSTRAINT "Awakening_zodiacId_fkey";

-- AlterTable
ALTER TABLE "Awakening" DROP COLUMN "catalystCount",
ALTER COLUMN "zodiacId" SET NOT NULL;

-- CreateTable
CREATE TABLE "AwakeningCatalystCost" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "catalystId" INTEGER NOT NULL,
    "awakeningId" INTEGER NOT NULL,

    CONSTRAINT "AwakeningCatalystCost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Awakening" ADD CONSTRAINT "Awakening_zodiacId_fkey" FOREIGN KEY ("zodiacId") REFERENCES "Zodiac"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwakeningCatalystCost" ADD CONSTRAINT "AwakeningCatalystCost_catalystId_fkey" FOREIGN KEY ("catalystId") REFERENCES "Catalyst"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwakeningCatalystCost" ADD CONSTRAINT "AwakeningCatalystCost_awakeningId_fkey" FOREIGN KEY ("awakeningId") REFERENCES "Awakening"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
