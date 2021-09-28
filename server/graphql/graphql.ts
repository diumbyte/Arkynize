import { GraphQLResolveInfo } from 'graphql';
import { Context } from './context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  attribute: Maybe<Attribute>;
  catalystCount: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  rarity: Maybe<Rarity>;
  state: Scalars['Int'];
  zodiac: Maybe<Zodiac>;
};

export type Catalyst = {
  __typename?: 'Catalyst';
  code: Scalars['String'];
  id: Scalars['Int'];
  isEpic: Scalars['Boolean'];
  isSkillMaterial: Scalars['Boolean'];
  name: Scalars['String'];
  zodiac: Maybe<Zodiac>;
};

export type Drop = {
  __typename?: 'Drop';
  catalyst: Maybe<Catalyst>;
  id: Scalars['Int'];
  stage: Maybe<Stage>;
};

export type Enhancement = {
  __typename?: 'Enhancement';
  catalystCount: Scalars['Int'];
  catalystIsEpic: Scalars['Boolean'];
  gold: Scalars['Int'];
  id: Scalars['Int'];
  level: Scalars['Int'];
  molagara: Scalars['Int'];
  stigma: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  awakening: Maybe<Awakening>;
  awakenings: Maybe<Array<Maybe<Awakening>>>;
  catalyst: Maybe<Catalyst>;
  drop: Maybe<Drop>;
  drops: Maybe<Array<Maybe<Drop>>>;
  getSkillEnhancements: Maybe<Array<Maybe<Enhancement>>>;
  getUnitSkills: Maybe<Array<Maybe<Skill>>>;
  shopItem: Maybe<ShopItem>;
  shopItems: Maybe<Array<Maybe<ShopItem>>>;
  unit: Maybe<Unit>;
  units: Maybe<Array<Maybe<Unit>>>;
  zodiac: Maybe<Zodiac>;
};


export type QueryAwakeningArgs = {
  id: Scalars['Int'];
};


export type QueryAwakeningsArgs = {
  unitId: Scalars['Int'];
};


export type QueryCatalystArgs = {
  id: Scalars['Int'];
};


export type QueryDropArgs = {
  id: Scalars['Int'];
};


export type QueryDropsArgs = {
  catalystId: Scalars['Int'];
};


export type QueryGetSkillEnhancementsArgs = {
  skillId: Scalars['Int'];
};


export type QueryGetUnitSkillsArgs = {
  unitId: Scalars['Int'];
};


export type QueryShopItemArgs = {
  catalystId: Scalars['Int'];
  regionId: Scalars['Int'];
};


export type QueryShopItemsArgs = {
  catalystId: Scalars['Int'];
};


export type QueryUnitArgs = {
  id: Scalars['Int'];
};


export type QueryZodiacArgs = {
  id: Scalars['Int'];
};

export type Rarity = {
  __typename?: 'Rarity';
  id: Scalars['Int'];
  value: Scalars['Int'];
};

export type Region = {
  __typename?: 'Region';
  episode: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  region: Scalars['String'];
};

export type Rune = {
  __typename?: 'Rune';
  code: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type RuneCost = {
  __typename?: 'RuneCost';
  awakening: Maybe<Awakening>;
  count: Scalars['Int'];
  rune: Maybe<Rune>;
};

export type ShopItem = {
  __typename?: 'ShopItem';
  catalyst: Maybe<Catalyst>;
  price: Scalars['Int'];
  region: Maybe<Region>;
};

export type Skill = {
  __typename?: 'Skill';
  code: Scalars['String'];
  enhancements: Maybe<Array<Maybe<Enhancement>>>;
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
  region: Maybe<Region>;
};

export type Unit = {
  __typename?: 'Unit';
  attribute: Maybe<Attribute>;
  code: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  rarity: Maybe<Rarity>;
  skills: Maybe<Array<Maybe<Skill>>>;
  zodiac: Maybe<Zodiac>;
};

export type Zodiac = {
  __typename?: 'Zodiac';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Attribute: ResolverTypeWrapper<Attribute>;
  Awakening: ResolverTypeWrapper<Awakening>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Catalyst: ResolverTypeWrapper<Catalyst>;
  Drop: ResolverTypeWrapper<Drop>;
  Enhancement: ResolverTypeWrapper<Enhancement>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  Rarity: ResolverTypeWrapper<Rarity>;
  Region: ResolverTypeWrapper<Region>;
  Rune: ResolverTypeWrapper<Rune>;
  RuneCost: ResolverTypeWrapper<RuneCost>;
  ShopItem: ResolverTypeWrapper<ShopItem>;
  Skill: ResolverTypeWrapper<Skill>;
  Stage: ResolverTypeWrapper<Stage>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Unit: ResolverTypeWrapper<Unit>;
  Zodiac: ResolverTypeWrapper<Zodiac>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Attribute: Attribute;
  Awakening: Awakening;
  Boolean: Scalars['Boolean'];
  Catalyst: Catalyst;
  Drop: Drop;
  Enhancement: Enhancement;
  Int: Scalars['Int'];
  Query: {};
  Rarity: Rarity;
  Region: Region;
  Rune: Rune;
  RuneCost: RuneCost;
  ShopItem: ShopItem;
  Skill: Skill;
  Stage: Stage;
  String: Scalars['String'];
  Unit: Unit;
  Zodiac: Zodiac;
}>;

export type AttributeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = ResolversObject<{
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AwakeningResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Awakening'] = ResolversParentTypes['Awakening']> = ResolversObject<{
  attribute: Resolver<Maybe<ResolversTypes['Attribute']>, ParentType, ContextType>;
  catalystCount: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rarity: Resolver<Maybe<ResolversTypes['Rarity']>, ParentType, ContextType>;
  state: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  zodiac: Resolver<Maybe<ResolversTypes['Zodiac']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalystResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Catalyst'] = ResolversParentTypes['Catalyst']> = ResolversObject<{
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isEpic: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSkillMaterial: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zodiac: Resolver<Maybe<ResolversTypes['Zodiac']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DropResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Drop'] = ResolversParentTypes['Drop']> = ResolversObject<{
  catalyst: Resolver<Maybe<ResolversTypes['Catalyst']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stage: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnhancementResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Enhancement'] = ResolversParentTypes['Enhancement']> = ResolversObject<{
  catalystCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  catalystIsEpic: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  gold: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  molagara: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stigma: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  awakening: Resolver<Maybe<ResolversTypes['Awakening']>, ParentType, ContextType, RequireFields<QueryAwakeningArgs, 'id'>>;
  awakenings: Resolver<Maybe<Array<Maybe<ResolversTypes['Awakening']>>>, ParentType, ContextType, RequireFields<QueryAwakeningsArgs, 'unitId'>>;
  catalyst: Resolver<Maybe<ResolversTypes['Catalyst']>, ParentType, ContextType, RequireFields<QueryCatalystArgs, 'id'>>;
  drop: Resolver<Maybe<ResolversTypes['Drop']>, ParentType, ContextType, RequireFields<QueryDropArgs, 'id'>>;
  drops: Resolver<Maybe<Array<Maybe<ResolversTypes['Drop']>>>, ParentType, ContextType, RequireFields<QueryDropsArgs, 'catalystId'>>;
  getSkillEnhancements: Resolver<Maybe<Array<Maybe<ResolversTypes['Enhancement']>>>, ParentType, ContextType, RequireFields<QueryGetSkillEnhancementsArgs, 'skillId'>>;
  getUnitSkills: Resolver<Maybe<Array<Maybe<ResolversTypes['Skill']>>>, ParentType, ContextType, RequireFields<QueryGetUnitSkillsArgs, 'unitId'>>;
  shopItem: Resolver<Maybe<ResolversTypes['ShopItem']>, ParentType, ContextType, RequireFields<QueryShopItemArgs, 'catalystId' | 'regionId'>>;
  shopItems: Resolver<Maybe<Array<Maybe<ResolversTypes['ShopItem']>>>, ParentType, ContextType, RequireFields<QueryShopItemsArgs, 'catalystId'>>;
  unit: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<QueryUnitArgs, 'id'>>;
  units: Resolver<Maybe<Array<Maybe<ResolversTypes['Unit']>>>, ParentType, ContextType>;
  zodiac: Resolver<Maybe<ResolversTypes['Zodiac']>, ParentType, ContextType, RequireFields<QueryZodiacArgs, 'id'>>;
}>;

export type RarityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Rarity'] = ResolversParentTypes['Rarity']> = ResolversObject<{
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = ResolversObject<{
  episode: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  region: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RuneResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Rune'] = ResolversParentTypes['Rune']> = ResolversObject<{
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RuneCostResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RuneCost'] = ResolversParentTypes['RuneCost']> = ResolversObject<{
  awakening: Resolver<Maybe<ResolversTypes['Awakening']>, ParentType, ContextType>;
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rune: Resolver<Maybe<ResolversTypes['Rune']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ShopItem'] = ResolversParentTypes['ShopItem']> = ResolversObject<{
  catalyst: Resolver<Maybe<ResolversTypes['Catalyst']>, ParentType, ContextType>;
  price: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  region: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SkillResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = ResolversObject<{
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enhancements: Resolver<Maybe<Array<Maybe<ResolversTypes['Enhancement']>>>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Stage'] = ResolversParentTypes['Stage']> = ResolversObject<{
  energy: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  instance: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  region: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnitResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Unit'] = ResolversParentTypes['Unit']> = ResolversObject<{
  attribute: Resolver<Maybe<ResolversTypes['Attribute']>, ParentType, ContextType>;
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rarity: Resolver<Maybe<ResolversTypes['Rarity']>, ParentType, ContextType>;
  skills: Resolver<Maybe<Array<Maybe<ResolversTypes['Skill']>>>, ParentType, ContextType>;
  zodiac: Resolver<Maybe<ResolversTypes['Zodiac']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ZodiacResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Zodiac'] = ResolversParentTypes['Zodiac']> = ResolversObject<{
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Attribute: AttributeResolvers<ContextType>;
  Awakening: AwakeningResolvers<ContextType>;
  Catalyst: CatalystResolvers<ContextType>;
  Drop: DropResolvers<ContextType>;
  Enhancement: EnhancementResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Rarity: RarityResolvers<ContextType>;
  Region: RegionResolvers<ContextType>;
  Rune: RuneResolvers<ContextType>;
  RuneCost: RuneCostResolvers<ContextType>;
  ShopItem: ShopItemResolvers<ContextType>;
  Skill: SkillResolvers<ContextType>;
  Stage: StageResolvers<ContextType>;
  Unit: UnitResolvers<ContextType>;
  Zodiac: ZodiacResolvers<ContextType>;
}>;

