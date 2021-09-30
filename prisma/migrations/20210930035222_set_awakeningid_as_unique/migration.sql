/*
  Warnings:

  - A unique constraint covering the columns `[awakeningId]` on the table `AwakeningCatalystCost` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AwakeningCatalystCost_awakeningId_key" ON "AwakeningCatalystCost"("awakeningId");
