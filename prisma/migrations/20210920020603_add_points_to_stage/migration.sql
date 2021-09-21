/*
  Warnings:

  - Added the required column `points` to the `Stage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stage" ADD COLUMN     "points" INTEGER NOT NULL;
