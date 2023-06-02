/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  float8: { input: any; output: any; }
  time: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "smart_waste.mitra" */
  delete_smart_waste_mitra?: Maybe<Smart_Waste_Mitra_Mutation_Response>;
  /** delete single row from the table: "smart_waste.mitra" */
  delete_smart_waste_mitra_by_pk?: Maybe<Smart_Waste_Mitra>;
  /** delete data from the table: "smart_waste.mitra_distance" */
  delete_smart_waste_mitra_distance?: Maybe<Smart_Waste_Mitra_Distance_Mutation_Response>;
  /** delete single row from the table: "smart_waste.mitra_distance" */
  delete_smart_waste_mitra_distance_by_pk?: Maybe<Smart_Waste_Mitra_Distance>;
  /** delete data from the table: "smart_waste.waste_type" */
  delete_smart_waste_waste_type?: Maybe<Smart_Waste_Waste_Type_Mutation_Response>;
  /** delete single row from the table: "smart_waste.waste_type" */
  delete_smart_waste_waste_type_by_pk?: Maybe<Smart_Waste_Waste_Type>;
  /** insert data into the table: "smart_waste.mitra" */
  insert_smart_waste_mitra?: Maybe<Smart_Waste_Mitra_Mutation_Response>;
  /** insert data into the table: "smart_waste.mitra_distance" */
  insert_smart_waste_mitra_distance?: Maybe<Smart_Waste_Mitra_Distance_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.mitra_distance" */
  insert_smart_waste_mitra_distance_one?: Maybe<Smart_Waste_Mitra_Distance>;
  /** insert a single row into the table: "smart_waste.mitra" */
  insert_smart_waste_mitra_one?: Maybe<Smart_Waste_Mitra>;
  /** insert data into the table: "smart_waste.waste_type" */
  insert_smart_waste_waste_type?: Maybe<Smart_Waste_Waste_Type_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.waste_type" */
  insert_smart_waste_waste_type_one?: Maybe<Smart_Waste_Waste_Type>;
  /** update data of the table: "smart_waste.mitra" */
  update_smart_waste_mitra?: Maybe<Smart_Waste_Mitra_Mutation_Response>;
  /** update single row of the table: "smart_waste.mitra" */
  update_smart_waste_mitra_by_pk?: Maybe<Smart_Waste_Mitra>;
  /** update data of the table: "smart_waste.mitra_distance" */
  update_smart_waste_mitra_distance?: Maybe<Smart_Waste_Mitra_Distance_Mutation_Response>;
  /** update single row of the table: "smart_waste.mitra_distance" */
  update_smart_waste_mitra_distance_by_pk?: Maybe<Smart_Waste_Mitra_Distance>;
  /** update multiples rows of table: "smart_waste.mitra_distance" */
  update_smart_waste_mitra_distance_many?: Maybe<Array<Maybe<Smart_Waste_Mitra_Distance_Mutation_Response>>>;
  /** update multiples rows of table: "smart_waste.mitra" */
  update_smart_waste_mitra_many?: Maybe<Array<Maybe<Smart_Waste_Mitra_Mutation_Response>>>;
  /** update data of the table: "smart_waste.waste_type" */
  update_smart_waste_waste_type?: Maybe<Smart_Waste_Waste_Type_Mutation_Response>;
  /** update single row of the table: "smart_waste.waste_type" */
  update_smart_waste_waste_type_by_pk?: Maybe<Smart_Waste_Waste_Type>;
  /** update multiples rows of table: "smart_waste.waste_type" */
  update_smart_waste_waste_type_many?: Maybe<Array<Maybe<Smart_Waste_Waste_Type_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_MitraArgs = {
  where: Smart_Waste_Mitra_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Mitra_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Mitra_DistanceArgs = {
  where: Smart_Waste_Mitra_Distance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Mitra_Distance_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Waste_TypeArgs = {
  where: Smart_Waste_Waste_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Waste_Type_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_MitraArgs = {
  objects: Array<Smart_Waste_Mitra_Insert_Input>;
  on_conflict?: InputMaybe<Smart_Waste_Mitra_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Mitra_DistanceArgs = {
  objects: Array<Smart_Waste_Mitra_Distance_Insert_Input>;
  on_conflict?: InputMaybe<Smart_Waste_Mitra_Distance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Mitra_Distance_OneArgs = {
  object: Smart_Waste_Mitra_Distance_Insert_Input;
  on_conflict?: InputMaybe<Smart_Waste_Mitra_Distance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Mitra_OneArgs = {
  object: Smart_Waste_Mitra_Insert_Input;
  on_conflict?: InputMaybe<Smart_Waste_Mitra_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Waste_TypeArgs = {
  objects: Array<Smart_Waste_Waste_Type_Insert_Input>;
  on_conflict?: InputMaybe<Smart_Waste_Waste_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Waste_Type_OneArgs = {
  object: Smart_Waste_Waste_Type_Insert_Input;
  on_conflict?: InputMaybe<Smart_Waste_Waste_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_MitraArgs = {
  _inc?: InputMaybe<Smart_Waste_Mitra_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Mitra_Set_Input>;
  where: Smart_Waste_Mitra_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Mitra_By_PkArgs = {
  _inc?: InputMaybe<Smart_Waste_Mitra_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Mitra_Set_Input>;
  pk_columns: Smart_Waste_Mitra_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Mitra_DistanceArgs = {
  _inc?: InputMaybe<Smart_Waste_Mitra_Distance_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Mitra_Distance_Set_Input>;
  where: Smart_Waste_Mitra_Distance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Mitra_Distance_By_PkArgs = {
  _inc?: InputMaybe<Smart_Waste_Mitra_Distance_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Mitra_Distance_Set_Input>;
  pk_columns: Smart_Waste_Mitra_Distance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Mitra_Distance_ManyArgs = {
  updates: Array<Smart_Waste_Mitra_Distance_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Mitra_ManyArgs = {
  updates: Array<Smart_Waste_Mitra_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Waste_TypeArgs = {
  _inc?: InputMaybe<Smart_Waste_Waste_Type_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Waste_Type_Set_Input>;
  where: Smart_Waste_Waste_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Waste_Type_By_PkArgs = {
  _inc?: InputMaybe<Smart_Waste_Waste_Type_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Waste_Type_Set_Input>;
  pk_columns: Smart_Waste_Waste_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Waste_Type_ManyArgs = {
  updates: Array<Smart_Waste_Waste_Type_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** execute function "search_mitra_near_user" which returns "smart_waste.mitra_distance" */
  search_mitra_near_user: Array<Smart_Waste_Mitra_Distance>;
  /** execute function "search_mitra_near_user" and query aggregates on result of table type "smart_waste.mitra_distance" */
  search_mitra_near_user_aggregate: Smart_Waste_Mitra_Distance_Aggregate;
  /** fetch data from the table: "smart_waste.mitra" */
  smart_waste_mitra: Array<Smart_Waste_Mitra>;
  /** fetch aggregated fields from the table: "smart_waste.mitra" */
  smart_waste_mitra_aggregate: Smart_Waste_Mitra_Aggregate;
  /** fetch data from the table: "smart_waste.mitra" using primary key columns */
  smart_waste_mitra_by_pk?: Maybe<Smart_Waste_Mitra>;
  /** fetch data from the table: "smart_waste.mitra_distance" */
  smart_waste_mitra_distance: Array<Smart_Waste_Mitra_Distance>;
  /** fetch aggregated fields from the table: "smart_waste.mitra_distance" */
  smart_waste_mitra_distance_aggregate: Smart_Waste_Mitra_Distance_Aggregate;
  /** fetch data from the table: "smart_waste.mitra_distance" using primary key columns */
  smart_waste_mitra_distance_by_pk?: Maybe<Smart_Waste_Mitra_Distance>;
  /** fetch data from the table: "smart_waste.waste_type" */
  smart_waste_waste_type: Array<Smart_Waste_Waste_Type>;
  /** fetch aggregated fields from the table: "smart_waste.waste_type" */
  smart_waste_waste_type_aggregate: Smart_Waste_Waste_Type_Aggregate;
  /** fetch data from the table: "smart_waste.waste_type" using primary key columns */
  smart_waste_waste_type_by_pk?: Maybe<Smart_Waste_Waste_Type>;
};


export type Query_RootSearch_Mitra_Near_UserArgs = {
  args: Search_Mitra_Near_User_Args;
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Distance_Bool_Exp>;
};


export type Query_RootSearch_Mitra_Near_User_AggregateArgs = {
  args: Search_Mitra_Near_User_Args;
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Distance_Bool_Exp>;
};


export type Query_RootSmart_Waste_MitraArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Bool_Exp>;
};


export type Query_RootSmart_Waste_Mitra_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Bool_Exp>;
};


export type Query_RootSmart_Waste_Mitra_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSmart_Waste_Mitra_DistanceArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Distance_Bool_Exp>;
};


export type Query_RootSmart_Waste_Mitra_Distance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Distance_Bool_Exp>;
};


export type Query_RootSmart_Waste_Mitra_Distance_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootSmart_Waste_Waste_TypeArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Waste_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Waste_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Waste_Type_Bool_Exp>;
};


export type Query_RootSmart_Waste_Waste_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Waste_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Waste_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Waste_Type_Bool_Exp>;
};


export type Query_RootSmart_Waste_Waste_Type_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Search_Mitra_Near_User_Args = {
  distance_kms?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['float8']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
};

/** columns and relationships of "smart_waste.mitra" */
export type Smart_Waste_Mitra = {
  __typename?: 'smart_waste_mitra';
  address: Scalars['String']['output'];
  closeTime: Scalars['time']['output'];
  id: Scalars['uuid']['output'];
  lat: Scalars['float8']['output'];
  long: Scalars['float8']['output'];
  name: Scalars['String']['output'];
  openTime: Scalars['time']['output'];
  phoneNumber: Scalars['String']['output'];
};

/** aggregated selection of "smart_waste.mitra" */
export type Smart_Waste_Mitra_Aggregate = {
  __typename?: 'smart_waste_mitra_aggregate';
  aggregate?: Maybe<Smart_Waste_Mitra_Aggregate_Fields>;
  nodes: Array<Smart_Waste_Mitra>;
};

/** aggregate fields of "smart_waste.mitra" */
export type Smart_Waste_Mitra_Aggregate_Fields = {
  __typename?: 'smart_waste_mitra_aggregate_fields';
  avg?: Maybe<Smart_Waste_Mitra_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Smart_Waste_Mitra_Max_Fields>;
  min?: Maybe<Smart_Waste_Mitra_Min_Fields>;
  stddev?: Maybe<Smart_Waste_Mitra_Stddev_Fields>;
  stddev_pop?: Maybe<Smart_Waste_Mitra_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smart_Waste_Mitra_Stddev_Samp_Fields>;
  sum?: Maybe<Smart_Waste_Mitra_Sum_Fields>;
  var_pop?: Maybe<Smart_Waste_Mitra_Var_Pop_Fields>;
  var_samp?: Maybe<Smart_Waste_Mitra_Var_Samp_Fields>;
  variance?: Maybe<Smart_Waste_Mitra_Variance_Fields>;
};


/** aggregate fields of "smart_waste.mitra" */
export type Smart_Waste_Mitra_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Smart_Waste_Mitra_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Smart_Waste_Mitra_Avg_Fields = {
  __typename?: 'smart_waste_mitra_avg_fields';
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "smart_waste.mitra". All fields are combined with a logical 'AND'. */
export type Smart_Waste_Mitra_Bool_Exp = {
  _and?: InputMaybe<Array<Smart_Waste_Mitra_Bool_Exp>>;
  _not?: InputMaybe<Smart_Waste_Mitra_Bool_Exp>;
  _or?: InputMaybe<Array<Smart_Waste_Mitra_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  closeTime?: InputMaybe<Time_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lat?: InputMaybe<Float8_Comparison_Exp>;
  long?: InputMaybe<Float8_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  openTime?: InputMaybe<Time_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_waste.mitra" */
export enum Smart_Waste_Mitra_Constraint {
  /** unique or primary key constraint on columns "phone_number" */
  MitraPhoneKey = 'mitra_phone_key',
  /** unique or primary key constraint on columns "id" */
  MitraPkey = 'mitra_pkey'
}

/** columns and relationships of "smart_waste.mitra_distance" */
export type Smart_Waste_Mitra_Distance = {
  __typename?: 'smart_waste_mitra_distance';
  address: Scalars['String']['output'];
  closeTime: Scalars['String']['output'];
  distance: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  lat: Scalars['float8']['output'];
  long: Scalars['float8']['output'];
  name: Scalars['String']['output'];
  openTime: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type Smart_Waste_Mitra_Distance_Aggregate = {
  __typename?: 'smart_waste_mitra_distance_aggregate';
  aggregate?: Maybe<Smart_Waste_Mitra_Distance_Aggregate_Fields>;
  nodes: Array<Smart_Waste_Mitra_Distance>;
};

/** aggregate fields of "smart_waste.mitra_distance" */
export type Smart_Waste_Mitra_Distance_Aggregate_Fields = {
  __typename?: 'smart_waste_mitra_distance_aggregate_fields';
  avg?: Maybe<Smart_Waste_Mitra_Distance_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Smart_Waste_Mitra_Distance_Max_Fields>;
  min?: Maybe<Smart_Waste_Mitra_Distance_Min_Fields>;
  stddev?: Maybe<Smart_Waste_Mitra_Distance_Stddev_Fields>;
  stddev_pop?: Maybe<Smart_Waste_Mitra_Distance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smart_Waste_Mitra_Distance_Stddev_Samp_Fields>;
  sum?: Maybe<Smart_Waste_Mitra_Distance_Sum_Fields>;
  var_pop?: Maybe<Smart_Waste_Mitra_Distance_Var_Pop_Fields>;
  var_samp?: Maybe<Smart_Waste_Mitra_Distance_Var_Samp_Fields>;
  variance?: Maybe<Smart_Waste_Mitra_Distance_Variance_Fields>;
};


/** aggregate fields of "smart_waste.mitra_distance" */
export type Smart_Waste_Mitra_Distance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Smart_Waste_Mitra_Distance_Avg_Fields = {
  __typename?: 'smart_waste_mitra_distance_avg_fields';
  distance?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "smart_waste.mitra_distance". All fields are combined with a logical 'AND'. */
export type Smart_Waste_Mitra_Distance_Bool_Exp = {
  _and?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Bool_Exp>>;
  _not?: InputMaybe<Smart_Waste_Mitra_Distance_Bool_Exp>;
  _or?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  closeTime?: InputMaybe<String_Comparison_Exp>;
  distance?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lat?: InputMaybe<Float8_Comparison_Exp>;
  long?: InputMaybe<Float8_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  openTime?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_waste.mitra_distance" */
export enum Smart_Waste_Mitra_Distance_Constraint {
  /** unique or primary key constraint on columns "id" */
  MitraDistancePkey = 'mitra_distance_pkey'
}

/** input type for incrementing numeric columns in table "smart_waste.mitra_distance" */
export type Smart_Waste_Mitra_Distance_Inc_Input = {
  distance?: InputMaybe<Scalars['Int']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "smart_waste.mitra_distance" */
export type Smart_Waste_Mitra_Distance_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  closeTime?: InputMaybe<Scalars['String']['input']>;
  distance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openTime?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Smart_Waste_Mitra_Distance_Max_Fields = {
  __typename?: 'smart_waste_mitra_distance_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  closeTime?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['float8']['output']>;
  long?: Maybe<Scalars['float8']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  openTime?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Smart_Waste_Mitra_Distance_Min_Fields = {
  __typename?: 'smart_waste_mitra_distance_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  closeTime?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['float8']['output']>;
  long?: Maybe<Scalars['float8']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  openTime?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "smart_waste.mitra_distance" */
export type Smart_Waste_Mitra_Distance_Mutation_Response = {
  __typename?: 'smart_waste_mitra_distance_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Waste_Mitra_Distance>;
};

/** on_conflict condition type for table "smart_waste.mitra_distance" */
export type Smart_Waste_Mitra_Distance_On_Conflict = {
  constraint: Smart_Waste_Mitra_Distance_Constraint;
  update_columns?: Array<Smart_Waste_Mitra_Distance_Update_Column>;
  where?: InputMaybe<Smart_Waste_Mitra_Distance_Bool_Exp>;
};

/** Ordering options when selecting data from "smart_waste.mitra_distance". */
export type Smart_Waste_Mitra_Distance_Order_By = {
  address?: InputMaybe<Order_By>;
  closeTime?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  openTime?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
};

/** primary key columns input for table: smart_waste.mitra_distance */
export type Smart_Waste_Mitra_Distance_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "smart_waste.mitra_distance" */
export enum Smart_Waste_Mitra_Distance_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CloseTime = 'closeTime',
  /** column name */
  Distance = 'distance',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  Name = 'name',
  /** column name */
  OpenTime = 'openTime',
  /** column name */
  PhoneNumber = 'phoneNumber'
}

/** input type for updating data in table "smart_waste.mitra_distance" */
export type Smart_Waste_Mitra_Distance_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  closeTime?: InputMaybe<Scalars['String']['input']>;
  distance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openTime?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Smart_Waste_Mitra_Distance_Stddev_Fields = {
  __typename?: 'smart_waste_mitra_distance_stddev_fields';
  distance?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Smart_Waste_Mitra_Distance_Stddev_Pop_Fields = {
  __typename?: 'smart_waste_mitra_distance_stddev_pop_fields';
  distance?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Smart_Waste_Mitra_Distance_Stddev_Samp_Fields = {
  __typename?: 'smart_waste_mitra_distance_stddev_samp_fields';
  distance?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "smart_waste_mitra_distance" */
export type Smart_Waste_Mitra_Distance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Smart_Waste_Mitra_Distance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Smart_Waste_Mitra_Distance_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  closeTime?: InputMaybe<Scalars['String']['input']>;
  distance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openTime?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Smart_Waste_Mitra_Distance_Sum_Fields = {
  __typename?: 'smart_waste_mitra_distance_sum_fields';
  distance?: Maybe<Scalars['Int']['output']>;
  lat?: Maybe<Scalars['float8']['output']>;
  long?: Maybe<Scalars['float8']['output']>;
};

/** update columns of table "smart_waste.mitra_distance" */
export enum Smart_Waste_Mitra_Distance_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CloseTime = 'closeTime',
  /** column name */
  Distance = 'distance',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  Name = 'name',
  /** column name */
  OpenTime = 'openTime',
  /** column name */
  PhoneNumber = 'phoneNumber'
}

export type Smart_Waste_Mitra_Distance_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Smart_Waste_Mitra_Distance_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Smart_Waste_Mitra_Distance_Set_Input>;
  /** filter the rows which have to be updated */
  where: Smart_Waste_Mitra_Distance_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Smart_Waste_Mitra_Distance_Var_Pop_Fields = {
  __typename?: 'smart_waste_mitra_distance_var_pop_fields';
  distance?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Smart_Waste_Mitra_Distance_Var_Samp_Fields = {
  __typename?: 'smart_waste_mitra_distance_var_samp_fields';
  distance?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Smart_Waste_Mitra_Distance_Variance_Fields = {
  __typename?: 'smart_waste_mitra_distance_variance_fields';
  distance?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** input type for incrementing numeric columns in table "smart_waste.mitra" */
export type Smart_Waste_Mitra_Inc_Input = {
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "smart_waste.mitra" */
export type Smart_Waste_Mitra_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  closeTime?: InputMaybe<Scalars['time']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openTime?: InputMaybe<Scalars['time']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Smart_Waste_Mitra_Max_Fields = {
  __typename?: 'smart_waste_mitra_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lat?: Maybe<Scalars['float8']['output']>;
  long?: Maybe<Scalars['float8']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Smart_Waste_Mitra_Min_Fields = {
  __typename?: 'smart_waste_mitra_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lat?: Maybe<Scalars['float8']['output']>;
  long?: Maybe<Scalars['float8']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "smart_waste.mitra" */
export type Smart_Waste_Mitra_Mutation_Response = {
  __typename?: 'smart_waste_mitra_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Waste_Mitra>;
};

/** on_conflict condition type for table "smart_waste.mitra" */
export type Smart_Waste_Mitra_On_Conflict = {
  constraint: Smart_Waste_Mitra_Constraint;
  update_columns?: Array<Smart_Waste_Mitra_Update_Column>;
  where?: InputMaybe<Smart_Waste_Mitra_Bool_Exp>;
};

/** Ordering options when selecting data from "smart_waste.mitra". */
export type Smart_Waste_Mitra_Order_By = {
  address?: InputMaybe<Order_By>;
  closeTime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  openTime?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
};

/** primary key columns input for table: smart_waste.mitra */
export type Smart_Waste_Mitra_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "smart_waste.mitra" */
export enum Smart_Waste_Mitra_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CloseTime = 'closeTime',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  Name = 'name',
  /** column name */
  OpenTime = 'openTime',
  /** column name */
  PhoneNumber = 'phoneNumber'
}

/** input type for updating data in table "smart_waste.mitra" */
export type Smart_Waste_Mitra_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  closeTime?: InputMaybe<Scalars['time']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openTime?: InputMaybe<Scalars['time']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Smart_Waste_Mitra_Stddev_Fields = {
  __typename?: 'smart_waste_mitra_stddev_fields';
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Smart_Waste_Mitra_Stddev_Pop_Fields = {
  __typename?: 'smart_waste_mitra_stddev_pop_fields';
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Smart_Waste_Mitra_Stddev_Samp_Fields = {
  __typename?: 'smart_waste_mitra_stddev_samp_fields';
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "smart_waste_mitra" */
export type Smart_Waste_Mitra_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Smart_Waste_Mitra_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Smart_Waste_Mitra_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  closeTime?: InputMaybe<Scalars['time']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openTime?: InputMaybe<Scalars['time']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Smart_Waste_Mitra_Sum_Fields = {
  __typename?: 'smart_waste_mitra_sum_fields';
  lat?: Maybe<Scalars['float8']['output']>;
  long?: Maybe<Scalars['float8']['output']>;
};

/** update columns of table "smart_waste.mitra" */
export enum Smart_Waste_Mitra_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CloseTime = 'closeTime',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  Name = 'name',
  /** column name */
  OpenTime = 'openTime',
  /** column name */
  PhoneNumber = 'phoneNumber'
}

export type Smart_Waste_Mitra_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Smart_Waste_Mitra_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Smart_Waste_Mitra_Set_Input>;
  /** filter the rows which have to be updated */
  where: Smart_Waste_Mitra_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Smart_Waste_Mitra_Var_Pop_Fields = {
  __typename?: 'smart_waste_mitra_var_pop_fields';
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Smart_Waste_Mitra_Var_Samp_Fields = {
  __typename?: 'smart_waste_mitra_var_samp_fields';
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Smart_Waste_Mitra_Variance_Fields = {
  __typename?: 'smart_waste_mitra_variance_fields';
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "smart_waste.waste_type" */
export type Smart_Waste_Waste_Type = {
  __typename?: 'smart_waste_waste_type';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "smart_waste.waste_type" */
export type Smart_Waste_Waste_Type_Aggregate = {
  __typename?: 'smart_waste_waste_type_aggregate';
  aggregate?: Maybe<Smart_Waste_Waste_Type_Aggregate_Fields>;
  nodes: Array<Smart_Waste_Waste_Type>;
};

/** aggregate fields of "smart_waste.waste_type" */
export type Smart_Waste_Waste_Type_Aggregate_Fields = {
  __typename?: 'smart_waste_waste_type_aggregate_fields';
  avg?: Maybe<Smart_Waste_Waste_Type_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Smart_Waste_Waste_Type_Max_Fields>;
  min?: Maybe<Smart_Waste_Waste_Type_Min_Fields>;
  stddev?: Maybe<Smart_Waste_Waste_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Smart_Waste_Waste_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smart_Waste_Waste_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Smart_Waste_Waste_Type_Sum_Fields>;
  var_pop?: Maybe<Smart_Waste_Waste_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Smart_Waste_Waste_Type_Var_Samp_Fields>;
  variance?: Maybe<Smart_Waste_Waste_Type_Variance_Fields>;
};


/** aggregate fields of "smart_waste.waste_type" */
export type Smart_Waste_Waste_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Smart_Waste_Waste_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Smart_Waste_Waste_Type_Avg_Fields = {
  __typename?: 'smart_waste_waste_type_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "smart_waste.waste_type". All fields are combined with a logical 'AND'. */
export type Smart_Waste_Waste_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Smart_Waste_Waste_Type_Bool_Exp>>;
  _not?: InputMaybe<Smart_Waste_Waste_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Smart_Waste_Waste_Type_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_waste.waste_type" */
export enum Smart_Waste_Waste_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  WasteTypePkey = 'waste_type_pkey'
}

/** input type for incrementing numeric columns in table "smart_waste.waste_type" */
export type Smart_Waste_Waste_Type_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "smart_waste.waste_type" */
export type Smart_Waste_Waste_Type_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Smart_Waste_Waste_Type_Max_Fields = {
  __typename?: 'smart_waste_waste_type_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Smart_Waste_Waste_Type_Min_Fields = {
  __typename?: 'smart_waste_waste_type_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "smart_waste.waste_type" */
export type Smart_Waste_Waste_Type_Mutation_Response = {
  __typename?: 'smart_waste_waste_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Waste_Waste_Type>;
};

/** on_conflict condition type for table "smart_waste.waste_type" */
export type Smart_Waste_Waste_Type_On_Conflict = {
  constraint: Smart_Waste_Waste_Type_Constraint;
  update_columns?: Array<Smart_Waste_Waste_Type_Update_Column>;
  where?: InputMaybe<Smart_Waste_Waste_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "smart_waste.waste_type". */
export type Smart_Waste_Waste_Type_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: smart_waste.waste_type */
export type Smart_Waste_Waste_Type_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "smart_waste.waste_type" */
export enum Smart_Waste_Waste_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "smart_waste.waste_type" */
export type Smart_Waste_Waste_Type_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Smart_Waste_Waste_Type_Stddev_Fields = {
  __typename?: 'smart_waste_waste_type_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Smart_Waste_Waste_Type_Stddev_Pop_Fields = {
  __typename?: 'smart_waste_waste_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Smart_Waste_Waste_Type_Stddev_Samp_Fields = {
  __typename?: 'smart_waste_waste_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "smart_waste_waste_type" */
export type Smart_Waste_Waste_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Smart_Waste_Waste_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Smart_Waste_Waste_Type_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Smart_Waste_Waste_Type_Sum_Fields = {
  __typename?: 'smart_waste_waste_type_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "smart_waste.waste_type" */
export enum Smart_Waste_Waste_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Smart_Waste_Waste_Type_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Smart_Waste_Waste_Type_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Smart_Waste_Waste_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Smart_Waste_Waste_Type_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Smart_Waste_Waste_Type_Var_Pop_Fields = {
  __typename?: 'smart_waste_waste_type_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Smart_Waste_Waste_Type_Var_Samp_Fields = {
  __typename?: 'smart_waste_waste_type_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Smart_Waste_Waste_Type_Variance_Fields = {
  __typename?: 'smart_waste_waste_type_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** execute function "search_mitra_near_user" which returns "smart_waste.mitra_distance" */
  search_mitra_near_user: Array<Smart_Waste_Mitra_Distance>;
  /** execute function "search_mitra_near_user" and query aggregates on result of table type "smart_waste.mitra_distance" */
  search_mitra_near_user_aggregate: Smart_Waste_Mitra_Distance_Aggregate;
  /** fetch data from the table: "smart_waste.mitra" */
  smart_waste_mitra: Array<Smart_Waste_Mitra>;
  /** fetch aggregated fields from the table: "smart_waste.mitra" */
  smart_waste_mitra_aggregate: Smart_Waste_Mitra_Aggregate;
  /** fetch data from the table: "smart_waste.mitra" using primary key columns */
  smart_waste_mitra_by_pk?: Maybe<Smart_Waste_Mitra>;
  /** fetch data from the table: "smart_waste.mitra_distance" */
  smart_waste_mitra_distance: Array<Smart_Waste_Mitra_Distance>;
  /** fetch aggregated fields from the table: "smart_waste.mitra_distance" */
  smart_waste_mitra_distance_aggregate: Smart_Waste_Mitra_Distance_Aggregate;
  /** fetch data from the table: "smart_waste.mitra_distance" using primary key columns */
  smart_waste_mitra_distance_by_pk?: Maybe<Smart_Waste_Mitra_Distance>;
  /** fetch data from the table in a streaming manner: "smart_waste.mitra_distance" */
  smart_waste_mitra_distance_stream: Array<Smart_Waste_Mitra_Distance>;
  /** fetch data from the table in a streaming manner: "smart_waste.mitra" */
  smart_waste_mitra_stream: Array<Smart_Waste_Mitra>;
  /** fetch data from the table: "smart_waste.waste_type" */
  smart_waste_waste_type: Array<Smart_Waste_Waste_Type>;
  /** fetch aggregated fields from the table: "smart_waste.waste_type" */
  smart_waste_waste_type_aggregate: Smart_Waste_Waste_Type_Aggregate;
  /** fetch data from the table: "smart_waste.waste_type" using primary key columns */
  smart_waste_waste_type_by_pk?: Maybe<Smart_Waste_Waste_Type>;
  /** fetch data from the table in a streaming manner: "smart_waste.waste_type" */
  smart_waste_waste_type_stream: Array<Smart_Waste_Waste_Type>;
};


export type Subscription_RootSearch_Mitra_Near_UserArgs = {
  args: Search_Mitra_Near_User_Args;
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Distance_Bool_Exp>;
};


export type Subscription_RootSearch_Mitra_Near_User_AggregateArgs = {
  args: Search_Mitra_Near_User_Args;
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Distance_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_MitraArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Mitra_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Mitra_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSmart_Waste_Mitra_DistanceArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Distance_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Mitra_Distance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Mitra_Distance_Order_By>>;
  where?: InputMaybe<Smart_Waste_Mitra_Distance_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Mitra_Distance_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootSmart_Waste_Mitra_Distance_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Smart_Waste_Mitra_Distance_Stream_Cursor_Input>>;
  where?: InputMaybe<Smart_Waste_Mitra_Distance_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Mitra_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Smart_Waste_Mitra_Stream_Cursor_Input>>;
  where?: InputMaybe<Smart_Waste_Mitra_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Waste_TypeArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Waste_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Waste_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Waste_Type_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Waste_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Waste_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Waste_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Waste_Type_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Waste_Type_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSmart_Waste_Waste_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Smart_Waste_Waste_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Smart_Waste_Waste_Type_Bool_Exp>;
};

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['time']['input']>;
  _gt?: InputMaybe<Scalars['time']['input']>;
  _gte?: InputMaybe<Scalars['time']['input']>;
  _in?: InputMaybe<Array<Scalars['time']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['time']['input']>;
  _lte?: InputMaybe<Scalars['time']['input']>;
  _neq?: InputMaybe<Scalars['time']['input']>;
  _nin?: InputMaybe<Array<Scalars['time']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetAllMitraWithDistanceQueryVariables = Exact<{
  distance_kms: Scalars['Int']['input'];
  latitude: Scalars['float8']['input'];
  longitude: Scalars['float8']['input'];
}>;


export type GetAllMitraWithDistanceQuery = { __typename?: 'query_root', search_mitra_near_user: Array<{ __typename?: 'smart_waste_mitra_distance', id: string, name: string, address: string, phoneNumber: string, openTime: string, closeTime: string, long: any, lat: any, distance: number }> };

export type GetMitraByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetMitraByIdQuery = { __typename?: 'query_root', smart_waste_mitra: Array<{ __typename?: 'smart_waste_mitra', id: any, lat: any, long: any, name: string, openTime: any, phoneNumber: string, closeTime: any, address: string }> };

export type GetAllWastetypeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWastetypeQuery = { __typename?: 'query_root', smart_waste_waste_type: Array<{ __typename?: 'smart_waste_waste_type', id: number, name: string }> };


export const GetAllMitraWithDistanceDocument = gql`
    query GetAllMitraWithDistance($distance_kms: Int!, $latitude: float8!, $longitude: float8!) {
  search_mitra_near_user(
    args: {distance_kms: $distance_kms, latitude: $latitude, longitude: $longitude}
    order_by: {distance: asc}
  ) {
    id
    name
    address
    phoneNumber
    openTime
    closeTime
    long
    lat
    distance
  }
}
    ` as unknown as DocumentNode<GetAllMitraWithDistanceQuery, GetAllMitraWithDistanceQueryVariables>;
export const GetMitraByIdDocument = gql`
    query GetMitraById($id: uuid!) {
  smart_waste_mitra(where: {id: {_eq: $id}}) {
    id
    lat
    long
    name
    openTime
    phoneNumber
    closeTime
    address
  }
}
    ` as unknown as DocumentNode<GetMitraByIdQuery, GetMitraByIdQueryVariables>;
export const GetAllWastetypeDocument = gql`
    query GetAllWastetype {
  smart_waste_waste_type {
    id
    name
  }
}
    ` as unknown as DocumentNode<GetAllWastetypeQuery, GetAllWastetypeQueryVariables>;