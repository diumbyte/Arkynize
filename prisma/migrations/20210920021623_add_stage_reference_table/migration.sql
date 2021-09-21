/*
  Warnings:

  - You are about to drop the column `instance` on the `Drop` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Drop` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `Drop` table. All the data in the column will be lost.
  - You are about to drop the column `regionId` on the `Drop` table. All the data in the column will be lost.
  - Added the required column `stageId` to the `Drop` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Drop" DROP CONSTRAINT "Drop_regionId_fkey";

-- AlterTable
ALTER TABLE "Drop" DROP COLUMN "instance",
DROP COLUMN "name",
DROP COLUMN "points",
DROP COLUMN "regionId",
ADD COLUMN     "stageId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Stage" (
    "id" SERIAL NOT NULL,
    "instance" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "Stage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Drop" ADD CONSTRAINT "Drop_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
