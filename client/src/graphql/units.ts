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
        unit(id: $unitId) {
            id
            name
            code
        }
        
        getAwakeningsForUnit(unitId: $unitId) {
            id
            state
            awakeningCatalystCost {
            id
            count
            catalyst {
                id
                name
                code
                isEpic
            }
            }
            runeCosts {
                count
                rune {
                    id
                    name
                    code
                    type
                }
            }
        }

        getUnitSkills(unitId: $unitId) {
            id
            name
            type
            code
            enhancements {
                id
                level
                stigma
                molagora
                gold
                enhancementCatalystCost {
                    id
                    count
                    catalyst {
                        id
                        name
                        code
                        isEpic
                    }
                }
            }
        }
    }

    query getCatalystInfo($catalystId: Int!) {
        drops(catalystId: $catalystId) {
            stage {
            id
            instance
            name
            energy
            points
            region {
                id
                name
                episode
                chapter
            }
            }
        }

        shopItems(catalystId: $catalystId) {
            price
            region {
            id
            name
            episode
            chapter
            }
        }
    }
`;