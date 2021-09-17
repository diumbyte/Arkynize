-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enhancement" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "gold" INTEGER NOT NULL,
    "molagara" INTEGER,
    "stigma" INTEGER,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "Enhancement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Catalyst" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Catalyst_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "episode" INTEGER NOT NULL,
    "region" TEXT NOT NULL,
    "instance" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopItem" (
    "catalystId" INTEGER NOT NULL,
    "shopId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "ShopItem_pkey" PRIMARY KEY ("catalystId","shopId")
);

-- CreateTable
CREATE TABLE "Shop" (
    "id" SERIAL NOT NULL,
    "episode" TEXT NOT NULL,
    "region" TEXT NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CatalystToLocation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CatalystToLocation_AB_unique" ON "_CatalystToLocation"("A", "B");

-- CreateIndex
CREATE INDEX "_CatalystToLocation_B_index" ON "_CatalystToLocation"("B");

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enhancement" ADD CONSTRAINT "Enhancement_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopItem" ADD CONSTRAINT "ShopItem_catalystId_fkey" FOREIGN KEY ("catalystId") REFERENCES "Catalyst"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopItem" ADD CONSTRAINT "ShopItem_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CatalystToLocation" ADD FOREIGN KEY ("A") REFERENCES "Catalyst"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CatalystToLocation" ADD FOREIGN KEY ("B") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
