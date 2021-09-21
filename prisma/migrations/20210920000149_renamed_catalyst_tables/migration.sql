/*
  Warnings:

  - The primary key for the `ShopItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `shopId` on the `ShopItem` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CatalystToLocation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `regionId` to the `ShopItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ShopItem" DROP CONSTRAINT "ShopItem_shopId_fkey";

-- DropForeignKey
ALTER TABLE "_CatalystToLocation" DROP CONSTRAINT "_CatalystToLocation_A_fkey";

-- DropForeignKey
ALTER TABLE "_CatalystToLocation" DROP CONSTRAINT "_CatalystToLocation_B_fkey";

-- AlterTable
ALTER TABLE "ShopItem" DROP CONSTRAINT "ShopItem_pkey",
DROP COLUMN "shopId",
ADD COLUMN     "regionId" INTEGER NOT NULL,
ADD CONSTRAINT "ShopItem_pkey" PRIMARY KEY ("catalystId", "regionId");

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "Shop";

-- DropTable
DROP TABLE "_CatalystToLocation";

-- CreateTable
CREATE TABLE "Stage" (
    "id" SERIAL NOT NULL,
    "instance" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "Stage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "episode" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CatalystToStage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CatalystToStage_AB_unique" ON "_CatalystToStage"("A", "B");

-- CreateIndex
CREATE INDEX "_CatalystToStage_B_index" ON "_CatalystToStage"("B");

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopItem" ADD CONSTRAINT "ShopItem_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CatalystToStage" ADD FOREIGN KEY ("A") REFERENCES "Catalyst"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CatalystToStage" ADD FOREIGN KEY ("B") REFERENCES "Stage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
