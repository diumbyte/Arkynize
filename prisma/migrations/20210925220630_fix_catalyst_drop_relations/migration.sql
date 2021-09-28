/*
  Warnings:

  - You are about to drop the `_CatalystToDrop` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Drop" DROP CONSTRAINT "Drop_catalystId_fkey";

-- DropForeignKey
ALTER TABLE "_CatalystToDrop" DROP CONSTRAINT "_CatalystToDrop_A_fkey";

-- DropForeignKey
ALTER TABLE "_CatalystToDrop" DROP CONSTRAINT "_CatalystToDrop_B_fkey";

-- DropTable
DROP TABLE "_CatalystToDrop";

-- AddForeignKey
ALTER TABLE "Drop" ADD CONSTRAINT "Drop_catalystId_fkey" FOREIGN KEY ("catalystId") REFERENCES "Catalyst"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
