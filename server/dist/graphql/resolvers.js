"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        unit: (parent, { id }, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.unit.findUnique({
                where: { id },
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
            });
        }),
        units: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.unit.findMany({
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
            });
        }),
        getUnitSkills: (parent, { unitId }, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.skill.findMany({
                where: { unitId },
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
            });
        }),
        getSkillEnhancements: (parent, { skillId }, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.enhancement.findMany({
                where: { skillId },
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
            });
        }),
        drops: (parent, { catalystId }, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.drop.findMany({
                where: { catalystId },
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
            });
        }),
        shopItems: (parent, { catalystId }, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.shopItem.findMany({
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
            });
        }),
        awakening: (parent, { id }, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.awakening.findUnique({
                where: { id },
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
            });
        }),
        getAwakeningsForUnit: (parent, { unitId }, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const unit = yield prisma.unit.findUnique({ where: { id: unitId } });
            return yield prisma.awakening.findMany({
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
            });
        })
    },
    Unit: {
        id: (parent, args, { prisma }) => {
            return parent.id;
        },
        attribute: (parent, args, { prisma }) => {
            return parent.attribute;
        },
        code: (parent, args, { prisma }) => {
            return parent.code;
        },
        name: (parent, args, { prisma }) => {
            return parent.name;
        },
        zodiac: (parent, args, { prisma }) => {
            var _a;
            return prisma.zodiac.findUnique({
                where: { id: (_a = parent.zodiac) === null || _a === void 0 ? void 0 : _a.id }
            });
        },
        rarity: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            return yield prisma.rarity.findUnique({
                where: { id: Number((_a = parent.rarity) === null || _a === void 0 ? void 0 : _a.id) }
            });
        }),
        skills: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.skill.findMany({
                where: { unitId: parent.id },
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
            });
        })
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
        enhancements: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.enhancement.findMany({
                where: { skillId: parent.id },
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
            });
        })
    },
    Enhancement: {
        id: (parent) => parent.id,
        level: (parent) => parent.level,
        gold: (parent) => parent.gold,
        molagara: (parent) => parent.molagara,
        stigma: (parent) => parent.stigma,
        enhancementCatalystCost: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.enhancementCatalystCost.findUnique({
                where: { enhancementId: parent.id },
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
            });
        })
    },
    ShopItem: {
        price: (parent) => parent.price,
        region: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.region.findUnique({
                where: { id: parent.region.id }
            });
        })
    },
    Awakening: {
        id: (parent) => parent.id,
        state: (parent) => parent.state,
        rarity: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.rarity.findUnique({
                where: { id: parent.rarity.id }
            });
        }),
        zodiac: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.zodiac.findUnique({
                where: { id: parent.zodiac.id }
            });
        }),
        attribute: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.attribute.findUnique({
                where: { id: parent.attribute.id }
            });
        }),
        awakeningCatalystCost: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.awakeningCatalystCost.findUnique({
                where: { awakeningId: parent.id },
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
            });
        }),
        runeCosts: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.runeCost.findMany({
                where: {
                    awakeningId: parent.id
                },
                include: {
                    rune: true
                }
            });
        })
    },
    AwakeningCatalystCost: {
        id: (parent) => parent.id,
        count: (parent) => parent.count,
        catalyst: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.catalyst.findUnique({
                where: { id: parent.catalyst.id },
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
            });
        })
    },
    RuneCost: {
        count: (parent) => parent.count,
        rune: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.rune.findUnique({
                where: { id: parent.rune.id }
            });
        })
    },
    Catalyst: {
        id: (parent) => parent.id,
        name: (parent) => parent.name,
        code: (parent) => parent.code,
        isEpic: (parent) => parent.isEpic,
        isSkillMaterial: (parent) => parent.isSkillMaterial,
        zodiac: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.zodiac.findUnique({
                where: { id: parent.zodiac.id }
            });
        }),
        dropLocations: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.drop.findMany({
                where: {
                    catalystId: parent.id
                },
                include: {
                    stage: {
                        include: {
                            region: true
                        }
                    }
                }
            });
        }),
        shopLocations: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.shopItem.findMany({
                where: {
                    catalystId: parent.id
                },
                include: {
                    region: true
                }
            });
        })
    },
    Drop: {
        id: (parent) => parent.id,
        stage: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.stage.findUnique({
                where: { id: parent.stage.id },
                include: {
                    region: true
                }
            });
        })
    },
    Stage: {
        id: (parent) => parent.id,
        instance: (parent) => parent.instance,
        name: (parent) => parent.name,
        points: (parent) => parent.points,
        energy: (parent) => parent.energy,
        region: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.region.findUnique({
                where: { id: parent.region.id }
            });
        })
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
        catalyst: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.catalyst.findUnique({
                where: { id: parent.catalyst.id },
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
            });
        })
    }
};
