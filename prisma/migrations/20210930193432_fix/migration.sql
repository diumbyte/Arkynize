/*
  Warnings:

  - You are about to drop the column `molagara` on the `Enhancement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Enhancement" DROP COLUMN "molagara",
ADD COLUMN     "molagora" INTEGER;
