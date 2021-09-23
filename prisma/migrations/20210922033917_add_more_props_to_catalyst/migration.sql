/*
  Warnings:

  - Added the required column `isEpic` to the `Catalyst` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isSkillMaterial` to the `Catalyst` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Catalyst" ADD COLUMN     "isEpic" BOOLEAN NOT NULL,
ADD COLUMN     "isSkillMaterial" BOOLEAN NOT NULL;
