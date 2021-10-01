import {gql} from '@apollo/client'

gql`
    query getAllUnits {
        units {
            name
        }
    }
`;