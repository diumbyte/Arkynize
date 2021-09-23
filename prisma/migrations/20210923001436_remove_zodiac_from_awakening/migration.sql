-- DropForeignKey
ALTER TABLE "Awakening" DROP CONSTRAINT "Awakening_zodiacId_fkey";

-- AlterTable
ALTER TABLE "Awakening" ALTER COLUMN "zodiacId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Awakening" ADD CONSTRAINT "Awakening_zodiacId_fkey" FOREIGN KEY ("zodiacId") REFERENCES "Zodiac"("id") ON DELETE SET NULL ON UPDATE CASCADE;
