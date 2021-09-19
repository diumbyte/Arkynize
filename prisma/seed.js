// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const zodiacList = require('./seedData/zodiacList.js')
const catalystList = require('./seedData/catalystList.js')
const unitList = require('./seedData/unitList.js')
const shopList = require('./seedData/shopList.js')
const shopItemList = require('./seedData/shopItemList.js')

async function main() {
    
    // Seed Zodiac Symbols
    await Promise.all(zodiacList.map(async zodiac => {
        await prisma.zodiac.create({
            data: { id: zodiac.id, name: zodiac.name }
        })
    }))

    // Seed Catalysts
    await Promise.all(catalystList.map(async catalyst => {
        await prisma.catalyst.create({
            data: {
                id: catalyst.id,
                name: catalyst.name,
                code: catalyst.code,
                zodiacId: catalyst.zodiac
            }
        })
    }))

    // Seed Shops
    await Promise.all(shopList.map(async shop => {
        await prisma.shop.create({
            data: {
                id: shop.id,
                episode: shop.episode,
                region: shop.region,
                name: shop.name
            }
        })
    }))
    
    // Seed Shop Items
    await Promise.all(shopItemList.map(async item => {
        await prisma.shopItem.create({
            data: {
                shopId: item.shopId,
                catalystId: item.catalystId,
                price: item.price
            }
        })
    }))

    // Seed Units
    await Promise.all(unitList.map(async unit => {
        await prisma.unit.create({
            data: {
                name: unit.name,
                code: unit.code,
                zodiacId: unit.zodiac
            }
        })
    }))
    // const alencia = await prisma.unit.upsert({
    //     where: { code: "c1001" },
    //     update: {},
    //     create: {
    //         name: "Alencia",
    //         code: "c1001"
    //     }
    // })

    // console.log(alencia);
    
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })