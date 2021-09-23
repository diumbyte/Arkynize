-- CreateTable
CREATE TABLE "Awakening" (
    "id" SERIAL NOT NULL,
    "state" INTEGER NOT NULL,
    "catalystCount" INTEGER,
    "unitId" INTEGER NOT NULL,
    "catalystId" INTEGER NOT NULL,

    CONSTRAINT "Awakening_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rune" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Rune_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RuneCost" (
    "runeId" INTEGER NOT NULL,
    "awakeningId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "RuneCost_pkey" PRIMARY KEY ("runeId","awakeningId")
);

-- AddForeignKey
ALTER TABLE "Awakening" ADD CONSTRAINT "Awakening_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Awakening" ADD CONSTRAINT "Awakening_catalystId_fkey" FOREIGN KEY ("catalystId") REFERENCES "Catalyst"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RuneCost" ADD CONSTRAINT "RuneCost_runeId_fkey" FOREIGN KEY ("runeId") REFERENCES "Rune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RuneCost" ADD CONSTRAINT "RuneCost_awakeningId_fkey" FOREIGN KEY ("awakeningId") REFERENCES "Awakening"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
