import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Attribute = {
  __typename?: 'Attribute';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Awakening = {
  __typename?: 'Awakening';
  attribute: Attribute;
  awakeningCatalystCost: AwakeningCatalystCost;
  id: Scalars['Int'];
  rarity: Rarity;
  runeCosts: Array<RuneCost>;
  state: Scalars['Int'];
  zodiac: Zodiac;
};

export type AwakeningCatalystCost = {
  __typename?: 'AwakeningCatalystCost';
  catalyst: Catalyst;
  count: Scalars['Int'];
  id: Scalars['Int'];
};

export type Catalyst = {
  __typename?: 'Catalyst';
  code: Scalars['String'];
  dropLocations: Array<Drop>;
  id: Scalars['Int'];
  isEpic: Scalars['Boolean'];
  isSkillMaterial: Scalars['Boolean'];
  name: Scalars['String'];
  shopLocations: Array<ShopItem>;
  zodiac: Zodiac;
};

export type Drop = {
  __typename?: 'Drop';
  id: Scalars['Int'];
  stage: Stage;
};

export type Enhancement = {
  __typename?: 'Enhancement';
  enhancementCatalystCost: EnhancementCatalystCost;
  gold: Scalars['Int'];
  id: Scalars['Int'];
  level: Scalars['Int'];
  molagora: Scalars['Int'];
  stigma: Scalars['Int'];
};

export type EnhancementCatalystCost = {
  __typename?: 'EnhancementCatalystCost';
  catalyst: Catalyst;
  count: Scalars['Int'];
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  awakening: Awakening;
  drops: Array<Drop>;
  getAwakeningsForUnit: Array<Awakening>;
  getSkillEnhancements: Array<Enhancement>;
  getUnitSkills: Array<Skill>;
  shopItems: Array<ShopItem>;
  unit: Unit;
  units: Array<Unit>;
};


export type QueryAwakeningArgs = {
  id: Scalars['Int'];
};


export type QueryDropsArgs = {
  catalystId: Scalars['Int'];
};


export type QueryGetAwakeningsForUnitArgs = {
  unitId: Scalars['Int'];
};


export type QueryGetSkillEnhancementsArgs = {
  skillId: Scalars['Int'];
};


export type QueryGetUnitSkillsArgs = {
  unitId: Scalars['Int'];
};


export type QueryShopItemsArgs = {
  catalystId: Scalars['Int'];
};


export type QueryUnitArgs = {
  id: Scalars['Int'];
};

export type Rarity = {
  __typename?: 'Rarity';
  id: Scalars['Int'];
  value: Scalars['Int'];
};

export type Region = {
  __typename?: 'Region';
  chapter: Scalars['String'];
  episode: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Rune = {
  __typename?: 'Rune';
  code: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type RuneCost = {
  __typename?: 'RuneCost';
  count: Scalars['Int'];
  rune: Rune;
};

export type ShopItem = {
  __typename?: 'ShopItem';
  price: Scalars['Int'];
  region: Region;
};

export type Skill = {
  __typename?: 'Skill';
  code: Scalars['String'];
  enhancements: Array<Enhancement>;
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['Int'];
};

export type Stage = {
  __typename?: 'Stage';
  energy: Scalars['Int'];
  id: Scalars['Int'];
  instance: Scalars['String'];
  name: Scalars['String'];
  points: Scalars['Int'];
  region: Region;
};

export type Unit = {
  __typename?: 'Unit';
  attribute: Attribute;
  code: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  rarity: Rarity;
  skills: Array<Skill>;
  zodiac?: Maybe<Zodiac>;
};

export type Zodiac = {
  __typename?: 'Zodiac';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type GetAllUnitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUnitsQuery = { __typename?: 'Query', units: Array<{ __typename?: 'Unit', id: number, name: string, code: string, rarity: { __typename?: 'Rarity', id: number, value: number }, zodiac?: { __typename?: 'Zodiac', id: number, name: string } | null | undefined, attribute: { __typename?: 'Attribute', id: number, name: string } }> };

export type GetUnitDetailsQueryVariables = Exact<{
  unitId: Scalars['Int'];
}>;


export type GetUnitDetailsQuery = { __typename?: 'Query', unit: { __typename?: 'Unit', id: number, name: string, code: string }, getAwakeningsForUnit: Array<{ __typename?: 'Awakening', id: number, state: number, awakeningCatalystCost: { __typename?: 'AwakeningCatalystCost', count: number, catalyst: { __typename?: 'Catalyst', id: number, name: string, code: string } }, runeCosts: Array<{ __typename?: 'RuneCost', count: number, rune: { __typename?: 'Rune', id: number, name: string, code: string } }> }>, getUnitSkills: Array<{ __typename?: 'Skill', id: number, name: string, type: number, code: string, enhancements: Array<{ __typename?: 'Enhancement', id: number, level: number, stigma: number, molagora: number, gold: number, enhancementCatalystCost: { __typename?: 'EnhancementCatalystCost', id: number, count: number, catalyst: { __typename?: 'Catalyst', id: number, name: string } } }> }> };


export const GetAllUnitsDocument = gql`
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
    `;

/**
 * __useGetAllUnitsQuery__
 *
 * To run a query within a React component, call `useGetAllUnitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUnitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUnitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUnitsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUnitsQuery, GetAllUnitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUnitsQuery, GetAllUnitsQueryVariables>(GetAllUnitsDocument, options);
      }
export function useGetAllUnitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUnitsQuery, GetAllUnitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUnitsQuery, GetAllUnitsQueryVariables>(GetAllUnitsDocument, options);
        }
export type GetAllUnitsQueryHookResult = ReturnType<typeof useGetAllUnitsQuery>;
export type GetAllUnitsLazyQueryHookResult = ReturnType<typeof useGetAllUnitsLazyQuery>;
export type GetAllUnitsQueryResult = Apollo.QueryResult<GetAllUnitsQuery, GetAllUnitsQueryVariables>;
export const GetUnitDetailsDocument = gql`
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
        code
      }
    }
    runeCosts {
      count
      rune {
        id
        name
        code
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

/**
 * __useGetUnitDetailsQuery__
 *
 * To run a query within a React component, call `useGetUnitDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnitDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnitDetailsQuery({
 *   variables: {
 *      unitId: // value for 'unitId'
 *   },
 * });
 */
export function useGetUnitDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetUnitDetailsQuery, GetUnitDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnitDetailsQuery, GetUnitDetailsQueryVariables>(GetUnitDetailsDocument, options);
      }
export function useGetUnitDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnitDetailsQuery, GetUnitDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnitDetailsQuery, GetUnitDetailsQueryVariables>(GetUnitDetailsDocument, options);
        }
export type GetUnitDetailsQueryHookResult = ReturnType<typeof useGetUnitDetailsQuery>;
export type GetUnitDetailsLazyQueryHookResult = ReturnType<typeof useGetUnitDetailsLazyQuery>;
export type GetUnitDetailsQueryResult = Apollo.QueryResult<GetUnitDetailsQuery, GetUnitDetailsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    