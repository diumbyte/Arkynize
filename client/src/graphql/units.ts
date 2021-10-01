import {gql} from '@apollo/client'

gql`
    query getAllUnits {
        units {
            id
            name
            zodiac {
                name
            }
            code
        }
    }
`;