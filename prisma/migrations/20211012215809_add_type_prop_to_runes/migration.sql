/*
  Warnings:

  - Added the required column `type` to the `Rune` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rune" ADD COLUMN     "type" TEXT NOT NULL;
