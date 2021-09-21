/*
  Warnings:

  - You are about to drop the `Stage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CatalystToStage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stage" DROP CONSTRAINT "Stage_regionId_fkey";

-- DropForeignKey
ALTER TABLE "_CatalystToStage" DROP CONSTRAINT "_CatalystToStage_A_fkey";

-- DropForeignKey
ALTER TABLE "_CatalystToStage" DROP CONSTRAINT "_CatalystToStage_B_fkey";

-- DropTable
DROP TABLE "Stage";

-- DropTable
DROP TABLE "_CatalystToStage";

-- CreateTable
CREATE TABLE "Drop" (
    "id" SERIAL NOT NULL,
    "instance" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "Drop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CatalystToDrop" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CatalystToDrop_AB_unique" ON "_CatalystToDrop"("A", "B");

-- CreateIndex
CREATE INDEX "_CatalystToDrop_B_index" ON "_CatalystToDrop"("B");

-- AddForeignKey
ALTER TABLE "Drop" ADD CONSTRAINT "Drop_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CatalystToDrop" ADD FOREIGN KEY ("A") REFERENCES "Catalyst"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CatalystToDrop" ADD FOREIGN KEY ("B") REFERENCES "Drop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
