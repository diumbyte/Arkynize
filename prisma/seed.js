// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const zodiacList = require('./seedData/zodiacList.js')
const catalystList = require('./seedData/catalystList.js')
const unitList = require('./seedData/unitList.js')
const region = require('./seedData/regionList.js')
const shopItemList = require('./seedData/shopItemList.js')
const stageList = require('./seedData/stageList.js')

async function main() {
    
    // Seed Zodiac Symbols
    await Promise.all(zodiacList.map(async zodiac => {
        await prisma.zodiac.create({
            data: { 
                ...zodiac 
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
    await Promise.all(region.map(async shop => {
        await prisma.region.create({
            data: {
                ...shop
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

    // Seed Units
    await Promise.all(unitList.map(async unit => {
        await prisma.unit.create({
            data: {
                ...unit
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