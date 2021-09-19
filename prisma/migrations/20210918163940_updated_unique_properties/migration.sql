/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Catalyst` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Unit` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Catalyst_code_key" ON "Catalyst"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_code_key" ON "Skill"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_code_key" ON "Unit"("code");
