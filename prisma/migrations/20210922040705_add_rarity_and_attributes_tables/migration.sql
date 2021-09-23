/*
  Warnings:

  - You are about to drop the column `catalystId` on the `Awakening` table. All the data in the column will be lost.
  - You are about to drop the column `unitId` on the `Awakening` table. All the data in the column will be lost.
  - Added the required column `attributeId` to the `Awakening` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rarityId` to the `Awakening` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zodiacId` to the `Awakening` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Awakening" DROP CONSTRAINT "Awakening_catalystId_fkey";

-- DropForeignKey
ALTER TABLE "Awakening" DROP CONSTRAINT "Awakening_unitId_fkey";

-- AlterTable
ALTER TABLE "Awakening" DROP COLUMN "catalystId",
DROP COLUMN "unitId",
ADD COLUMN     "attributeId" INTEGER NOT NULL,
ADD COLUMN     "rarityId" INTEGER NOT NULL,
ADD COLUMN     "zodiacId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Rarity" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Rarity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attribute" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Attribute_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Awakening" ADD CONSTRAINT "Awakening_rarityId_fkey" FOREIGN KEY ("rarityId") REFERENCES "Rarity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Awakening" ADD CONSTRAINT "Awakening_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "Attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Awakening" ADD CONSTRAINT "Awakening_zodiacId_fkey" FOREIGN KEY ("zodiacId") REFERENCES "Zodiac"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
