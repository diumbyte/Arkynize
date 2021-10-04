import {gql} from '@apollo/client'

gql`
    query getAllUnits {
        units {
            id
            name
            code
            rarity {
                id
                value
            }
            zodiac {
                id
                name
            }
            attribute {
                id
                name
            }
        }
    }

    query getUnitDetails($unitId: Int!) {
        getAwakeningsForUnit(unitId: $unitId) {
            id
            state
            awakeningCatalystCost {
            count
            catalyst {
                name
                dropLocations {
                stage {
                    region {
                    episode
                    name
                    chapter
                    }
                    instance
                    name
                }
                }
                shopLocations {
                price
                region {
                    episode
                    name
                    chapter
                }
                }
            }
            }
            runeCosts {
            count
            rune {
                name
            }
            }
        }

        getUnitSkills(unitId: $unitId) {
            name
            type
            enhancements {
            level
            molagora
            gold
            enhancementCatalystCost {
                count
                catalyst {
                name
                dropLocations {
                    stage {
                    instance
                    name
                    region {
                        episode
                        chapter
                        name
                    }
                    }
                }
                shopLocations {
                    price
                    region {
                    episode
                    chapter
                    name
                    }
                }
                }
            }
            }
        }
    }
`;