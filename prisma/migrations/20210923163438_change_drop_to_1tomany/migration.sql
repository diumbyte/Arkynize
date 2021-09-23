/*
  Warnings:

  - Added the required column `catalystId` to the `Drop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Drop" ADD COLUMN     "catalystId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Drop" ADD CONSTRAINT "Drop_catalystId_fkey" FOREIGN KEY ("catalystId") REFERENCES "Catalyst"("id") ON DELETE SET NULL ON UPDATE CASCADE;
