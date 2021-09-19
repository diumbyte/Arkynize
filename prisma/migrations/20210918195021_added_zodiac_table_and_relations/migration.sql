/*
  Warnings:

  - Added the required column `zodiacId` to the `Catalyst` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zodiacId` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Catalyst" ADD COLUMN     "zodiacId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Unit" ADD COLUMN     "zodiacId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Zodiac" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Zodiac_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_zodiacId_fkey" FOREIGN KEY ("zodiacId") REFERENCES "Zodiac"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalyst" ADD CONSTRAINT "Catalyst_zodiacId_fkey" FOREIGN KEY ("zodiacId") REFERENCES "Zodiac"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
