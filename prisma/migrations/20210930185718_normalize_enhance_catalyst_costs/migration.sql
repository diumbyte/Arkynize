/*
  Warnings:

  - You are about to drop the column `catalystCount` on the `Enhancement` table. All the data in the column will be lost.
  - You are about to drop the column `catalystIsEpic` on the `Enhancement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Enhancement" DROP COLUMN "catalystCount",
DROP COLUMN "catalystIsEpic";

-- CreateTable
CREATE TABLE "EnhancementCatalystCost" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "catalystId" INTEGER NOT NULL,
    "enhancementId" INTEGER NOT NULL,

    CONSTRAINT "EnhancementCatalystCost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EnhancementCatalystCost_enhancementId_unique" ON "EnhancementCatalystCost"("enhancementId");

-- AddForeignKey
ALTER TABLE "EnhancementCatalystCost" ADD CONSTRAINT "EnhancementCatalystCost_catalystId_fkey" FOREIGN KEY ("catalystId") REFERENCES "Catalyst"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnhancementCatalystCost" ADD CONSTRAINT "EnhancementCatalystCost_enhancementId_fkey" FOREIGN KEY ("enhancementId") REFERENCES "Enhancement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
