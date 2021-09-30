"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
type Query {
    unit(id: Int!): Unit
    units: [Unit]
    getUnitSkills(unitId: Int!): [Skill]
    getSkillEnhancements(skillId: Int!): [Enhancement]
    drops(catalystId: Int!): [Drop]
    shopItems(catalystId: Int!): [ShopItem]
    awakening(id: Int!): Awakening
    getAwakeningsForUnit(unitId: Int!): [Awakening]
}

type Unit {
    id: Int!
    name: String!
    code: String!
    zodiac: Zodiac
    attribute: Attribute
    rarity: Rarity
    skills: [Skill]
}

type Zodiac {
    id: Int!
    name: String!
}

type Skill {
    id: Int!
    name: String!
    code: String!
    type: Int!
    enhancements: [Enhancement]
}

type Enhancement {
    id: Int!
    level: Int!
    gold: Int!
    molagara: Int!
    stigma: Int!
    enhancementCatalystCost: EnhancementCatalystCost
}

type Catalyst {
    id: Int!
    name: String!
    code: String!
    isEpic: Boolean!
    isSkillMaterial: Boolean!

    zodiac: Zodiac
    dropLocations: [Drop]
    shopLocations: [ShopItem]
}

type Drop {
    id: Int!
    stage: Stage
}

type Stage {
  id: Int!
  instance: String!
  name:     String!
  points:   Int!
  energy:   Int!
  region:   Region
}

type ShopItem {
  price: Int!
  region:   Region
}

type Region {
  id: Int!
  episode: String!
  region:  String!
  name:    String!
}

type Awakening {
  id: Int!
  state: Int!

  rarity: Rarity
  attribute: Attribute
  zodiac:    Zodiac

  runeCosts: [RuneCost]
  awakeningCatalystCost: AwakeningCatalystCost
}

type AwakeningCatalystCost {
  id: Int!
  count: Int!
  catalyst: Catalyst
}

type EnhancementCatalystCost {
  id: Int!
  count: Int!
  catalyst: Catalyst
}

type Rune {
  id: Int!
  name: String!
  code: String!
}

type RuneCost {
  count: Int!
  rune: Rune
}

type Rarity {
  id: Int!
  value: Int!
}

type Attribute {
  id: Int!
  name: String!
}
`;
