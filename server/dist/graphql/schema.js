"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
type Query {
    unit(id: Int!): Unit
    units: [Unit]
    zodiac(id: Int!): Zodiac
    getUnitSkills(unitId: Int!): [Skill]
    getSkillEnhancements(skillId: Int!): [Enhancement]
    catalyst(id: Int!): Catalyst
    drop(id: Int!): Drop
    drops(catalystId: Int!): [Drop]
    shopItem(catalystId: Int!, regionId: Int!): ShopItem
    shopItems(catalystId: Int!): [ShopItem]
    awakening(id: Int!): Awakening
    awakenings(unitId: Int!): [Awakening]
    # getAwakeningCost(awakeningId: Int!): AwakeningCost
}

# type AwakeningCost {
#   catalystAwakeningCost: [CatalystAwakeningCost]
#   runeCost: [RuneCost]
# }

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
    catalystCount: Int!
    catalystIsEpic: Boolean!
}

type Catalyst {
    id: Int!
    name: String!
    code: String!
    isEpic: Boolean!
    isSkillMaterial: Boolean!
    zodiac: Zodiac
}

type Drop {
    id: Int!
    stage: Stage
    catalyst: Catalyst
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
  catalyst: Catalyst
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
