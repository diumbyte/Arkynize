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
    await Promise.all(attributeList.map(async attribute => {
        await prisma.attribute.create({
            data: { 
                ...attribute 
            },
        })
    }))

    // Seed Rarity List
    await Promise.all(rarityList.map(async rarity => {
        await prisma.rarity.create({
            data: { 
                ...rarity 
            }
        })
    }))

    // Seed Zodiac Symbols
    await Promise.all(zodiacList.map(async zodiac => {
        await prisma.zodiac.create({
            data: { 
                ...zodiac 
            }
        })
    }))

    // Seed Runes
    await Promise.all(runeList.map(async rune => {
        await prisma.rune.create({
            data: {
                ...rune
            }
        })
    }))

    // Seed Catalysts
    await Promise.all(catalystList.map(async catalyst => {
        await prisma.catalyst.create({
            data: {
                ...catalyst
            }
        })
    }))

    // Seed Regions
    await Promise.all(regionList.map(async region => {
        await prisma.region.create({
            data: {
                ...region
            }
        })
    }))
    
    // Seed Shop Items
    await Promise.all(shopItemList.map(async item => {
        await prisma.shopItem.create({
            data: {
                ...item
            }
        })
    }))

    // Seed Stages in Regions
    await Promise.all(stageList.map(async stage => {
        await prisma.stage.create({
            data: {
                ...stage
            }
        })
    }))

    // Seed Awakenings
    await Promise.all(awakeningList.map(async awakening => {
        await prisma.awakening.create({
            data: {
                ...awakening
            }
        })
    }))

    // Seed Rune Costs
    await Promise.all(runeCostList.map(async runeCost => {
        await prisma.runeCost.create({
            data: {
                ...runeCost
            }
        })
    }))

    // Seed Drops
    await Promise.all(dropList.map(async drop => {
        await prisma.drop.create({
            data: {
                ...drop
            }
        })
    }))

    // Seed Units
    await Promise.all(unitList.map(async unit => {
        await prisma.unit.create({
            data: {
                ...unit
            }
        })
    }))

    // Seed Skills
    await Promise.all(skillList.map(async skill => {
        await prisma.skill.create({
            data: {
                ...skill
            }
        })
    }))

    // Seed Enhancements
    await Promise.all(enhancementList.map(async enhancement => {
        await prisma.enhancement.create({
            data: {
                ...enhancement
            }
        })
    }))

    // Seed Enhancements Catalyst Costs
    await Promise.all(enhancementCatalystCostList.map(async enhancementCatalystCost => {
        await prisma.enhancementCatalystCost.create({
            data: {
                ...enhancementCatalystCost
            }
        })
    }))
    
    // Awakening Catalyst Cost List
    await Promise.all(awakeningCatalystCostList.map(async awakeningCatalystCost => {
        await prisma.awakeningCatalystCost.create({
            data: {
                ...awakeningCatalystCost
            }
        })
    }))
    
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })