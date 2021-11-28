// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const zodiacList = require('./seedData/zodiacList.js')
const catalystList = require('./seedData/catalystList.js')
const unitList = require('./seedData/unitList.js')
const regionList = require('./seedData/regionList.js')
const shopItemList = require('./seedData/shopItemList.js')
const stageList = require('./seedData/stageList.js')
const attributeList = require('./seedData/attributeList.js')
const rarityList = require('./seedData/rarityList.js')
const runeList = require('./seedData/runeList.js')
const awakeningList = require('./seedData/awakeningList.js')
const runeCostList = require('./seedData/runeCostList.js')
const dropList = require('./seedData/dropList.js')
const skillList = require('./seedData/skillList.js')
const enhancementList = require('./seedData/enhancementList.js')
const awakeningCatalystCostList = require('./seedData/awakeningCatalystCostList.js')
const enhancementCatalystCostList = require('./seedData/enhancementCatalystCostList.js')

async function main() {
    
    // Seed Attribute List
    await prisma.attribute.createMany({
        data: attributeList,
        skipDuplicates: true
    })

    // Seed Rarity List
    await prisma.rarity.createMany({
        data: rarityList,
        skipDuplicates: true
    })

    // Seed Zodiac Symbols
    await prisma.zodiac.createMany({
        data: zodiacList,
        skipDuplicates: true
    })

    // Seed Runes
    await prisma.rune.createMany({
        data: runeList,
        skipDuplicates: true
    })

    // Seed Catalysts
    await prisma.catalyst.createMany({
        data: catalystList,
        skipDuplicates: true
    })

    // Seed Regions
    await prisma.region.createMany({
        data: regionList,
        skipDuplicates: true
    })
    
    // Seed Shop Items
    await prisma.shopItem.createMany({
        data: shopItemList,
        skipDuplicates: true
    })

    // Seed Stages in Regions
    await prisma.stage.createMany({
        data: stageList,
        skipDuplicates: true
    })

    // Seed Awakenings
    await prisma.awakening.createMany({
        data: awakeningList,
        skipDuplicates: true
    })

    // Seed Rune Costs
    await prisma.runeCost.createMany({
        data: runeCostList,
        skipDuplicates: true
    })

    // Seed Drops
    await prisma.drop.createMany({
        data: dropList,
        skipDuplicates: true
    })

    // Seed Units
    await prisma.unit.createMany({
        data: unitList,
        skipDuplicates: true
    })

    // Seed Skills
    await prisma.skill.createMany({
        data: skillList,
        skipDuplicates: true
    })

    // Seed Enhancements
    await prisma.enhancement.createMany({
        data: enhancementList,
        skipDuplicates: true
    })

    // Seed Enhancements Catalyst Costs
    await prisma.enhancementCatalystCost.createMany({
        data: enhancementCatalystCostList,
        skipDuplicates: true
    })
    
    // Awakening Catalyst Cost List
    await prisma.awakeningCatalystCost.createMany({
        data: awakeningCatalystCostList,
        skipDuplicates: true
    })
    
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })