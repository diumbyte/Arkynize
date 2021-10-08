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
            count
            catalyst {
                id
                name
            }
            }
            runeCosts {
                count
                rune {
                    id
                    name
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
                    }
                }
            }
        }
    }
`;