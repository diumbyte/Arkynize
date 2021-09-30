/*
  Warnings:

  - You are about to drop the column `region` on the `Region` table. All the data in the column will be lost.
  - Added the required column `chapter` to the `Region` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Region" DROP COLUMN "region",
ADD COLUMN     "chapter" TEXT NOT NULL;
