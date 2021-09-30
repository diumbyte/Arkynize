import { Resolvers } from './graphql'

export const resolvers: Resolvers = {
    Query: {
        unit: async (parent, { id }, {prisma}) => {
            return await prisma.unit.findUnique({
                where: {id},
                include: {
                    zodiac: true,
                    rarity: true,
                    attribute: true,
                    skills: {
                        include: {
                            enhancements: {
                                include: {
                                    enhancementCatalystCost: {
                                        include: {
                                            catalyst: {
                                                include: {
                                                    dropLocations: {
                                                        include: {
                                                            stage: {
                                                                include: {
                                                                    region: true
                                                                }
                                                            }
                                                        }
                                                    },
                                                    shopLocations: {
                                                        include: {
                                                            region: true
                                                        }
                                                    },
                                                    zodiac: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        orderBy: {
                            type: "asc"
                        }
                    }
                }
            })
        },
        units: async (parent, args, { prisma } ) => {
            return await prisma.unit.findMany({
                include: {
                    zodiac: true,
                    rarity: true,
                    attribute: true,
                    skills: {
                        include: {
                            enhancements: {
                                include: {
                                    enhancementCatalystCost: {
                                        include: {
                                            catalyst: {
                                                include: {
                                                    dropLocations: {
                                                        include: {
                                                            stage: {
                                                                include: {
                                                                    region: true
                                                                }
                                                            }
                                                        }
                                                    },
                                                    shopLocations: {
                                                        include: {
                                                            region: true
                                                        }
                                                    },
                                                    zodiac: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        orderBy: {
                            type: "asc"
                        }
                    }
                }
            })
        },
        getUnitSkills: async (parent, { unitId }, { prisma } ) => {
            return await prisma.skill.findMany({
                where: {unitId},
                include: {
                    enhancements: {
                        include: {
                            enhancementCatalystCost: {
                                include: {
                                    catalyst: {
                                        include: {
                                            dropLocations: {
                                                include: {
                                                    stage: {
                                                        include: {
                                                            region: true
                                                        }
                                                    }
                                                }
                                            },
                                            shopLocations: {
                                                include: {
                                                    region: true
                                                }
                                            },
                                            zodiac: true
                                        }
                                    }
                                }
                            }
                        },
                        orderBy: {
                            level: "asc"
                        }
                    }
                },
                orderBy: {
                    type: "asc"
                }
            })
        },
        getSkillEnhancements: async (parent, { skillId }, { prisma } ) => {
            return await prisma.enhancement.findMany({
                where: {skillId},
                include: {
                    enhancementCatalystCost: {
                        include: {
                            catalyst: {
                                include: {
                                    dropLocations: {
                                        include: {
                                            stage: {
                                                include: {
                                                    region: true
                                                }
                                            }
                                        }
                                    },
                                    shopLocations: {
                                        include: {
                                            region: true
                                        }
                                    },
                                    zodiac: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    level: "asc"
                }
            })
        },
        drops: async (parent, { catalystId }, { prisma } ) => {
            return await prisma.drop.findMany({
                where: {catalystId},
                include: {
                    catalyst: {
                        include: {
                            zodiac: true
                        }
                    },
                    stage: {
                        include: {
                            region: true
                        },
                    },
                    
                },
                orderBy: {
                    stageId: "asc"
                }
            })
        },
        shopItems: async (parent, { catalystId }, { prisma } ) => {
            return await prisma.shopItem.findMany({
                where: {
                    catalystId
                },
                include: {
                    catalyst: {
                        include: {
                            zodiac: true
                        }
                    },
                    region: true
                },
                orderBy: {
                    regionId: "asc"
                }
            })
        },
        awakening: async (parent, { id }, { prisma } ) => {
            return await prisma.awakening.findUnique({
                where: {id},
                include: {
                    attribute: true,
                    rarity: true,
                    zodiac: true,
                    awakeningCatalystCost: {
                        include: {
                            catalyst: {
                                include: {
                                    zodiac: true,
                                    shopLocations: {
                                        include: {
                                            region: true
                                        }
                                    },
                                    dropLocations: {
                                        include: {
                                            stage: {
                                                include: {
                                                    region: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    runeCosts: {
                        include: {
                            rune: true
                        }
                    }
                }
            })
        },
        getAwakeningsForUnit: async (parent, { unitId }, { prisma } ) => {
            const unit = await prisma.unit.findUnique({where: {id: unitId}})

            return await prisma.awakening.findMany({
                where: { 
                    rarityId: unit.rarityId,
                    attributeId: unit.attributeId,
                    zodiacId: unit.zodiacId
                },
                include: {
                    attribute: true,
                    rarity: true,
                    zodiac: true,
                    awakeningCatalystCost: {
                        include: {
                            catalyst: {
                                include: {
                                    zodiac: true,
                                    shopLocations: {
                                        include: {
                                            region: true
                                        }
                                    },
                                    dropLocations: {
                                        include: {
                                            stage: {
                                                include: {
                                                    region: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    runeCosts: {
                        include: {
                            rune: true
                        }
                    }
                },
                orderBy: {
                    state: 'asc'
                }
            })
        }
    },
    Unit: {
        id: (parent, args, {prisma}) => {
            return parent.id
        },
        attribute: (parent, args, {prisma}) => {
            return parent.attribute
        },
        code: (parent, args, {prisma}) => {
            return parent.code
        },
        name: (parent, args, {prisma}) => {
            return parent.name
        },
        zodiac: (parent, args, {prisma}) => {
            return prisma.zodiac.findUnique({
                where: {id: parent.zodiac?.id}
            })
        },
        rarity: async (parent, args, { prisma }) => {
            return await prisma.rarity.findUnique({
                where: {id: Number(parent.rarity?.id)}
            })
        },
        skills: async (parent, args, {prisma}) => {
            return await prisma.skill.findMany({
                where: {unitId: parent.id},
                include: {
                    enhancements: {
                        include: {
                            enhancementCatalystCost: {
                                include: {
                                    catalyst: {
                                        include: {
                                            dropLocations: {
                                                include: {
                                                    stage: {
                                                        include: {
                                                            region: true
                                                        }
                                                    }
                                                }
                                            },
                                            shopLocations: {
                                                include: {
                                                    region: true
                                                }
                                            },
                                            zodiac: true
                                        }
                                    }
                                }
                            }
                        },
                        orderBy: {
                            level: "asc"
                        }
                    }
                },
                orderBy: {
                    type: "asc"
                }
            })
        }
    },
    Rarity: {
        id: (parent) => parent.id,
        value: (parent) => parent.value
    },
    Zodiac: {
        id: (parent) => parent.id,
        name: (parent) => parent.name
    },
    Skill: {
        id: (parent) => parent.id,
        name: (parent) => parent.name,
        code: (parent) => parent.code,
        type: (parent) => parent.type,
        enhancements: async (parent, args, {prisma}) => {
            return await prisma.enhancement.findMany({
                where: {skillId: parent.id},
                include: {
                    enhancementCatalystCost: {
                        include: {
                            catalyst: {
                                include: {
                                    dropLocations: {
                                        include: {
                                            stage: {
                                                include: {
                                                    region: true
                                                }
                                            }
                                        }
                                    },
                                    shopLocations: {
                                        include: {
                                            region: true
                                        }
                                    },
                                    zodiac: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    level: "asc"
                }
            })
        }
    },
    Enhancement: {
        id: (parent) => parent.id,
        level: (parent) => parent.level,
        gold: (parent) => parent.gold,
        molagora: (parent) => parent.molagora,
        stigma: (parent) => parent.stigma,
        enhancementCatalystCost: async (parent, args, {prisma}) => {
            return await prisma.enhancementCatalystCost.findUnique({
                where: {enhancementId: parent.id},
                include: {
                    catalyst: {
                        include: {
                            dropLocations: {
                                include: {
                                    stage: {
                                        include: {
                                            region: true
                                        }
                                    }
                                }
                            },
                            shopLocations: {
                                include: {
                                    region: true
                                }
                            },
                            zodiac: true
                        }
                    }
                }
            })
        }
    },
    ShopItem: {
        price: (parent) => parent.price,
        region: async (parent, args, {prisma}) => {
            return await prisma.region.findUnique({
                where: {id: parent.region.id}
            })
        }
    },   
    Awakening: {
        id: (parent) => parent.id,
        state: (parent) => parent.state,
        rarity: async (parent, args, {prisma}) => {
            return await prisma.rarity.findUnique({
                where: {id: parent.rarity.id}
            })
        },
        zodiac: async (parent, args, {prisma}) => {
            return await prisma.zodiac.findUnique({
                where: {id: parent.zodiac.id}
            })
        },
        attribute: async (parent, args, {prisma}) => {
            return await prisma.attribute.findUnique({
                where: {id: parent.attribute.id}
            })
        },
        awakeningCatalystCost: async (parent, args, {prisma}) => {
            return await prisma.awakeningCatalystCost.findUnique({
                where: {awakeningId: parent.id},
                include: {
                    catalyst: {
                        include: {
                            zodiac: true,
                            shopLocations: {
                                include: {
                                    region: true
                                }
                            },
                            dropLocations: {
                                include: {
                                    stage: {
                                        include: {
                                            region: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            })
        },
        runeCosts: async (parent, args, {prisma}) => {
            return await prisma.runeCost.findMany({
                where: {
                    awakeningId: parent.id
                },
                include: {
                    rune: true
                }
            })
        }
    },
    AwakeningCatalystCost: {
        id: (parent) => parent.id,
        count: (parent) => parent.count,
        catalyst: async (parent, args, {prisma}) => {
            return await prisma.catalyst.findUnique({
                where: {id: parent.catalyst.id},
                include: {
                    zodiac: true,
                    dropLocations: {
                        include: {
                            stage: {
                                include: {
                                    region: true
                                }
                            }
                        }
                    },
                    shopLocations: {
                        include: {
                            region: true
                        }
                    }
                }
            })
        }
    },
    RuneCost: {
        count: (parent) => parent.count,
        rune: async (parent, args, {prisma}) => {
            return await prisma.rune.findUnique({
                where: {id: parent.rune.id}
            })
        }
    },
    Catalyst: {
        id: (parent) => parent.id,
        name: (parent) => parent.name,
        code: (parent) => parent.code,
        isEpic: (parent) => parent.isEpic,
        isSkillMaterial: (parent) => parent.isSkillMaterial,
        zodiac: async (parent, args, {prisma}) => {
            return await prisma.zodiac.findUnique({
                where: {id: parent.zodiac.id}
            })
        },
        dropLocations: async (parent, args, {prisma}) => {
            return await prisma.drop.findMany({
                where: {
                    catalystId: parent.id
                },
                include: {
                    stage: {
                        include:{
                            region: true
                        }
                    }
                }
            })
        },
        shopLocations: async (parent, args, {prisma}) => {
            return await prisma.shopItem.findMany({
                where: {
                    catalystId: parent.id
                },
                include: {
                    region: true
                }
            })
        }
    },
    Drop: {
        id: (parent) => parent.id,
        stage: async (parent, args, {prisma}) => {
            return await prisma.stage.findUnique({
                where: {id: parent.stage.id},
                include: {
                    region: true
                }
            })
        }
    },
    Stage: {
        id: (parent) => parent.id,
        instance: (parent) => parent.instance,
        name: (parent) => parent.name,
        points: (parent) => parent.points,
        energy: (parent) => parent.energy,
        region: async (parent, args, {prisma}) => {
            return await prisma.region.findUnique({
                where: {id: parent.region.id}
            })
        }
    },
    Region: {
        id: (parent) => parent.id,
        name: (parent) => parent.name,
        episode: (parent) => parent.episode,
        region: (parent) => parent.region
    },
    Rune: {
        id: (parent) => parent.id,
        name: (parent) => parent.name,
        code: (parent) => parent.code
    },
    Attribute: {
        id: (parent) => parent.id,
        name: (parent) => parent.name
    },
    EnhancementCatalystCost: {
        id: (parent) => parent.id,
        count: (parent) => parent.count,
        catalyst: async (parent, args, {prisma}) => {
            return await prisma.catalyst.findUnique({
                where: {id: parent.catalyst.id},
                include: {
                    zodiac: true,
                    shopLocations: {
                        include: {
                            region: true
                        }
                    },
                    dropLocations: {
                        include: {
                            stage: {
                                include: {
                                    region: true
                                }
                            }
                        }
                    }
                }
            })
        }
    }
}