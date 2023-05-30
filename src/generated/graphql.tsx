import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {input: string | number; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
  float8: {input: any; output: any};
  timetz: {input: any; output: any};
  uuid: {input: any; output: any};
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
  Desc = 'DESC',
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
  /** delete data from the table: "smart_waste.coordinate" */
  delete_smart_waste_coordinate?: Maybe<Smart_Waste_Coordinate_Mutation_Response>;
  /** delete single row from the table: "smart_waste.coordinate" */
  delete_smart_waste_coordinate_by_pk?: Maybe<Smart_Waste_Coordinate>;
  /** delete data from the table: "smart_waste.mitra" */
  delete_smart_waste_mitra?: Maybe<Smart_Waste_Mitra_Mutation_Response>;
  /** delete single row from the table: "smart_waste.mitra" */
  delete_smart_waste_mitra_by_pk?: Maybe<Smart_Waste_Mitra>;
  /** delete data from the table: "smart_waste.waste_type" */
  delete_smart_waste_waste_type?: Maybe<Smart_Waste_Waste_Type_Mutation_Response>;
  /** delete single row from the table: "smart_waste.waste_type" */
  delete_smart_waste_waste_type_by_pk?: Maybe<Smart_Waste_Waste_Type>;
  /** insert data into the table: "smart_waste.coordinate" */
  insert_smart_waste_coordinate?: Maybe<Smart_Waste_Coordinate_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.coordinate" */
  insert_smart_waste_coordinate_one?: Maybe<Smart_Waste_Coordinate>;
  /** insert data into the table: "smart_waste.mitra" */
  insert_smart_waste_mitra?: Maybe<Smart_Waste_Mitra_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.mitra" */
  insert_smart_waste_mitra_one?: Maybe<Smart_Waste_Mitra>;
  /** insert data into the table: "smart_waste.waste_type" */
  insert_smart_waste_waste_type?: Maybe<Smart_Waste_Waste_Type_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.waste_type" */
  insert_smart_waste_waste_type_one?: Maybe<Smart_Waste_Waste_Type>;
  /** update data of the table: "smart_waste.coordinate" */
  update_smart_waste_coordinate?: Maybe<Smart_Waste_Coordinate_Mutation_Response>;
  /** update single row of the table: "smart_waste.coordinate" */
  update_smart_waste_coordinate_by_pk?: Maybe<Smart_Waste_Coordinate>;
  /** update multiples rows of table: "smart_waste.coordinate" */
  update_smart_waste_coordinate_many?: Maybe<
    Array<Maybe<Smart_Waste_Coordinate_Mutation_Response>>
  >;
  /** update data of the table: "smart_waste.mitra" */
  update_smart_waste_mitra?: Maybe<Smart_Waste_Mitra_Mutation_Response>;
  /** update single row of the table: "smart_waste.mitra" */
  update_smart_waste_mitra_by_pk?: Maybe<Smart_Waste_Mitra>;
  /** update multiples rows of table: "smart_waste.mitra" */
  update_smart_waste_mitra_many?: Maybe<
    Array<Maybe<Smart_Waste_Mitra_Mutation_Response>>
  >;
  /** update data of the table: "smart_waste.waste_type" */
  update_smart_waste_waste_type?: Maybe<Smart_Waste_Waste_Type_Mutation_Response>;
  /** update single row of the table: "smart_waste.waste_type" */
  update_smart_waste_waste_type_by_pk?: Maybe<Smart_Waste_Waste_Type>;
  /** update multiples rows of table: "smart_waste.waste_type" */
  update_smart_waste_waste_type_many?: Maybe<
    Array<Maybe<Smart_Waste_Waste_Type_Mutation_Response>>
  >;
};

/** mutation root */
export type Mutation_RootDelete_Smart_Waste_CoordinateArgs = {
  where: Smart_Waste_Coordinate_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Coordinate_By_PkArgs = {
  id: Scalars['Int']['input'];
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
export type Mutation_RootDelete_Smart_Waste_Waste_TypeArgs = {
  where: Smart_Waste_Waste_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Waste_Type_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootInsert_Smart_Waste_CoordinateArgs = {
  objects: Array<Smart_Waste_Coordinate_Insert_Input>;
  on_conflict?: InputMaybe<Smart_Waste_Coordinate_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Coordinate_OneArgs = {
  object: Smart_Waste_Coordinate_Insert_Input;
  on_conflict?: InputMaybe<Smart_Waste_Coordinate_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Smart_Waste_MitraArgs = {
  objects: Array<Smart_Waste_Mitra_Insert_Input>;
  on_conflict?: InputMaybe<Smart_Waste_Mitra_On_Conflict>;
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
export type Mutation_RootUpdate_Smart_Waste_CoordinateArgs = {
  _inc?: InputMaybe<Smart_Waste_Coordinate_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Coordinate_Set_Input>;
  where: Smart_Waste_Coordinate_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Coordinate_By_PkArgs = {
  _inc?: InputMaybe<Smart_Waste_Coordinate_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Coordinate_Set_Input>;
  pk_columns: Smart_Waste_Coordinate_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Coordinate_ManyArgs = {
  updates: Array<Smart_Waste_Coordinate_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_MitraArgs = {
  _set?: InputMaybe<Smart_Waste_Mitra_Set_Input>;
  where: Smart_Waste_Mitra_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Mitra_By_PkArgs = {
  _set?: InputMaybe<Smart_Waste_Mitra_Set_Input>;
  pk_columns: Smart_Waste_Mitra_Pk_Columns_Input;
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
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "smart_waste.coordinate" */
  smart_waste_coordinate: Array<Smart_Waste_Coordinate>;
  /** fetch aggregated fields from the table: "smart_waste.coordinate" */
  smart_waste_coordinate_aggregate: Smart_Waste_Coordinate_Aggregate;
  /** fetch data from the table: "smart_waste.coordinate" using primary key columns */
  smart_waste_coordinate_by_pk?: Maybe<Smart_Waste_Coordinate>;
  /** fetch data from the table: "smart_waste.mitra" */
  smart_waste_mitra: Array<Smart_Waste_Mitra>;
  /** fetch aggregated fields from the table: "smart_waste.mitra" */
  smart_waste_mitra_aggregate: Smart_Waste_Mitra_Aggregate;
  /** fetch data from the table: "smart_waste.mitra" using primary key columns */
  smart_waste_mitra_by_pk?: Maybe<Smart_Waste_Mitra>;
  /** fetch data from the table: "smart_waste.waste_type" */
  smart_waste_waste_type: Array<Smart_Waste_Waste_Type>;
  /** fetch aggregated fields from the table: "smart_waste.waste_type" */
  smart_waste_waste_type_aggregate: Smart_Waste_Waste_Type_Aggregate;
  /** fetch data from the table: "smart_waste.waste_type" using primary key columns */
  smart_waste_waste_type_by_pk?: Maybe<Smart_Waste_Waste_Type>;
};

export type Query_RootSmart_Waste_CoordinateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Coordinate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Coordinate_Order_By>>;
  where?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
};

export type Query_RootSmart_Waste_Coordinate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Coordinate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Coordinate_Order_By>>;
  where?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
};

export type Query_RootSmart_Waste_Coordinate_By_PkArgs = {
  id: Scalars['Int']['input'];
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

/** columns and relationships of "smart_waste.coordinate" */
export type Smart_Waste_Coordinate = {
  __typename?: 'smart_waste_coordinate';
  /** An object relationship */
  coordinate_mitra: Smart_Waste_Mitra;
  id: Scalars['Int']['output'];
  lat: Scalars['float8']['output'];
  long: Scalars['float8']['output'];
  place_id: Scalars['uuid']['output'];
};

/** aggregated selection of "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Aggregate = {
  __typename?: 'smart_waste_coordinate_aggregate';
  aggregate?: Maybe<Smart_Waste_Coordinate_Aggregate_Fields>;
  nodes: Array<Smart_Waste_Coordinate>;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Smart_Waste_Coordinate_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Smart_Waste_Coordinate_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Smart_Waste_Coordinate_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Smart_Waste_Coordinate_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Smart_Waste_Coordinate_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Smart_Waste_Coordinate_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Smart_Waste_Coordinate_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Smart_Waste_Coordinate_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Smart_Waste_Coordinate_Aggregate_Bool_Exp_Var_Samp>;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp_Avg = {
  arguments: Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp_Corr = {
  arguments: Smart_Waste_Coordinate_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Smart_Waste_Coordinate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Smart_Waste_Coordinate_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp_Max = {
  arguments: Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp_Min = {
  arguments: Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp_Sum = {
  arguments: Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Smart_Waste_Coordinate_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Aggregate_Fields = {
  __typename?: 'smart_waste_coordinate_aggregate_fields';
  avg?: Maybe<Smart_Waste_Coordinate_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Smart_Waste_Coordinate_Max_Fields>;
  min?: Maybe<Smart_Waste_Coordinate_Min_Fields>;
  stddev?: Maybe<Smart_Waste_Coordinate_Stddev_Fields>;
  stddev_pop?: Maybe<Smart_Waste_Coordinate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smart_Waste_Coordinate_Stddev_Samp_Fields>;
  sum?: Maybe<Smart_Waste_Coordinate_Sum_Fields>;
  var_pop?: Maybe<Smart_Waste_Coordinate_Var_Pop_Fields>;
  var_samp?: Maybe<Smart_Waste_Coordinate_Var_Samp_Fields>;
  variance?: Maybe<Smart_Waste_Coordinate_Variance_Fields>;
};

/** aggregate fields of "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Smart_Waste_Coordinate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Aggregate_Order_By = {
  avg?: InputMaybe<Smart_Waste_Coordinate_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Smart_Waste_Coordinate_Max_Order_By>;
  min?: InputMaybe<Smart_Waste_Coordinate_Min_Order_By>;
  stddev?: InputMaybe<Smart_Waste_Coordinate_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Smart_Waste_Coordinate_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Smart_Waste_Coordinate_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Smart_Waste_Coordinate_Sum_Order_By>;
  var_pop?: InputMaybe<Smart_Waste_Coordinate_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Smart_Waste_Coordinate_Var_Samp_Order_By>;
  variance?: InputMaybe<Smart_Waste_Coordinate_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Arr_Rel_Insert_Input = {
  data: Array<Smart_Waste_Coordinate_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Smart_Waste_Coordinate_On_Conflict>;
};

/** aggregate avg on columns */
export type Smart_Waste_Coordinate_Avg_Fields = {
  __typename?: 'smart_waste_coordinate_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "smart_waste.coordinate". All fields are combined with a logical 'AND'. */
export type Smart_Waste_Coordinate_Bool_Exp = {
  _and?: InputMaybe<Array<Smart_Waste_Coordinate_Bool_Exp>>;
  _not?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
  _or?: InputMaybe<Array<Smart_Waste_Coordinate_Bool_Exp>>;
  coordinate_mitra?: InputMaybe<Smart_Waste_Mitra_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lat?: InputMaybe<Float8_Comparison_Exp>;
  long?: InputMaybe<Float8_Comparison_Exp>;
  place_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_waste.coordinate" */
export enum Smart_Waste_Coordinate_Constraint {
  /** unique or primary key constraint on columns "id" */
  CoordinatePkey = 'coordinate_pkey',
  /** unique or primary key constraint on columns "place_id" */
  CoordinatePlaceIdKey = 'coordinate_place_id_key',
}

/** input type for incrementing numeric columns in table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Insert_Input = {
  coordinate_mitra?: InputMaybe<Smart_Waste_Mitra_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
  place_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Smart_Waste_Coordinate_Max_Fields = {
  __typename?: 'smart_waste_coordinate_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  lat?: Maybe<Scalars['float8']['output']>;
  long?: Maybe<Scalars['float8']['output']>;
  place_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Smart_Waste_Coordinate_Min_Fields = {
  __typename?: 'smart_waste_coordinate_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  lat?: Maybe<Scalars['float8']['output']>;
  long?: Maybe<Scalars['float8']['output']>;
  place_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Mutation_Response = {
  __typename?: 'smart_waste_coordinate_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Waste_Coordinate>;
};

/** on_conflict condition type for table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_On_Conflict = {
  constraint: Smart_Waste_Coordinate_Constraint;
  update_columns?: Array<Smart_Waste_Coordinate_Update_Column>;
  where?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
};

/** Ordering options when selecting data from "smart_waste.coordinate". */
export type Smart_Waste_Coordinate_Order_By = {
  coordinate_mitra?: InputMaybe<Smart_Waste_Mitra_Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: smart_waste.coordinate */
export type Smart_Waste_Coordinate_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "smart_waste.coordinate" */
export enum Smart_Waste_Coordinate_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  PlaceId = 'place_id',
}

/** select "smart_waste_coordinate_aggregate_bool_exp_avg_arguments_columns" columns of table "smart_waste.coordinate" */
export enum Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
}

/** select "smart_waste_coordinate_aggregate_bool_exp_corr_arguments_columns" columns of table "smart_waste.coordinate" */
export enum Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
}

/** select "smart_waste_coordinate_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "smart_waste.coordinate" */
export enum Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
}

/** select "smart_waste_coordinate_aggregate_bool_exp_max_arguments_columns" columns of table "smart_waste.coordinate" */
export enum Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
}

/** select "smart_waste_coordinate_aggregate_bool_exp_min_arguments_columns" columns of table "smart_waste.coordinate" */
export enum Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
}

/** select "smart_waste_coordinate_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "smart_waste.coordinate" */
export enum Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
}

/** select "smart_waste_coordinate_aggregate_bool_exp_sum_arguments_columns" columns of table "smart_waste.coordinate" */
export enum Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
}

/** select "smart_waste_coordinate_aggregate_bool_exp_var_samp_arguments_columns" columns of table "smart_waste.coordinate" */
export enum Smart_Waste_Coordinate_Select_Column_Smart_Waste_Coordinate_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
}

/** input type for updating data in table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
  place_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Smart_Waste_Coordinate_Stddev_Fields = {
  __typename?: 'smart_waste_coordinate_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Smart_Waste_Coordinate_Stddev_Pop_Fields = {
  __typename?: 'smart_waste_coordinate_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Smart_Waste_Coordinate_Stddev_Samp_Fields = {
  __typename?: 'smart_waste_coordinate_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "smart_waste_coordinate" */
export type Smart_Waste_Coordinate_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Smart_Waste_Coordinate_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Smart_Waste_Coordinate_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  lat?: InputMaybe<Scalars['float8']['input']>;
  long?: InputMaybe<Scalars['float8']['input']>;
  place_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Smart_Waste_Coordinate_Sum_Fields = {
  __typename?: 'smart_waste_coordinate_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  lat?: Maybe<Scalars['float8']['output']>;
  long?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
};

/** update columns of table "smart_waste.coordinate" */
export enum Smart_Waste_Coordinate_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  PlaceId = 'place_id',
}

export type Smart_Waste_Coordinate_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Smart_Waste_Coordinate_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Smart_Waste_Coordinate_Set_Input>;
  /** filter the rows which have to be updated */
  where: Smart_Waste_Coordinate_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Smart_Waste_Coordinate_Var_Pop_Fields = {
  __typename?: 'smart_waste_coordinate_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Smart_Waste_Coordinate_Var_Samp_Fields = {
  __typename?: 'smart_waste_coordinate_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Smart_Waste_Coordinate_Variance_Fields = {
  __typename?: 'smart_waste_coordinate_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "smart_waste.coordinate" */
export type Smart_Waste_Coordinate_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
};

/** columns and relationships of "smart_waste.mitra" */
export type Smart_Waste_Mitra = {
  __typename?: 'smart_waste_mitra';
  address: Scalars['String']['output'];
  closeTime: Scalars['timetz']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  mitra_coordinate: Array<Smart_Waste_Coordinate>;
  /** An aggregate relationship */
  mitra_coordinate_aggregate: Smart_Waste_Coordinate_Aggregate;
  name: Scalars['String']['output'];
  openTime: Scalars['timetz']['output'];
  phoneNumber: Scalars['String']['output'];
};

/** columns and relationships of "smart_waste.mitra" */
export type Smart_Waste_MitraMitra_CoordinateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Coordinate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Coordinate_Order_By>>;
  where?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
};

/** columns and relationships of "smart_waste.mitra" */
export type Smart_Waste_MitraMitra_Coordinate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Coordinate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Coordinate_Order_By>>;
  where?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
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
  count: Scalars['Int']['output'];
  max?: Maybe<Smart_Waste_Mitra_Max_Fields>;
  min?: Maybe<Smart_Waste_Mitra_Min_Fields>;
};

/** aggregate fields of "smart_waste.mitra" */
export type Smart_Waste_Mitra_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Smart_Waste_Mitra_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "smart_waste.mitra". All fields are combined with a logical 'AND'. */
export type Smart_Waste_Mitra_Bool_Exp = {
  _and?: InputMaybe<Array<Smart_Waste_Mitra_Bool_Exp>>;
  _not?: InputMaybe<Smart_Waste_Mitra_Bool_Exp>;
  _or?: InputMaybe<Array<Smart_Waste_Mitra_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  closeTime?: InputMaybe<Timetz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  mitra_coordinate?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
  mitra_coordinate_aggregate?: InputMaybe<Smart_Waste_Coordinate_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  openTime?: InputMaybe<Timetz_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_waste.mitra" */
export enum Smart_Waste_Mitra_Constraint {
  /** unique or primary key constraint on columns "phoneNumber" */
  MitraPhoneKey = 'mitra_phone_key',
  /** unique or primary key constraint on columns "id" */
  MitraPkey = 'mitra_pkey',
}

/** input type for inserting data into table "smart_waste.mitra" */
export type Smart_Waste_Mitra_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  closeTime?: InputMaybe<Scalars['timetz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mitra_coordinate?: InputMaybe<Smart_Waste_Coordinate_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  openTime?: InputMaybe<Scalars['timetz']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Smart_Waste_Mitra_Max_Fields = {
  __typename?: 'smart_waste_mitra_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  closeTime?: Maybe<Scalars['timetz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  openTime?: Maybe<Scalars['timetz']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Smart_Waste_Mitra_Min_Fields = {
  __typename?: 'smart_waste_mitra_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  closeTime?: Maybe<Scalars['timetz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  openTime?: Maybe<Scalars['timetz']['output']>;
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

/** input type for inserting object relation for remote table "smart_waste.mitra" */
export type Smart_Waste_Mitra_Obj_Rel_Insert_Input = {
  data: Smart_Waste_Mitra_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Smart_Waste_Mitra_On_Conflict>;
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
  mitra_coordinate_aggregate?: InputMaybe<Smart_Waste_Coordinate_Aggregate_Order_By>;
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
  Name = 'name',
  /** column name */
  OpenTime = 'openTime',
  /** column name */
  PhoneNumber = 'phoneNumber',
}

/** input type for updating data in table "smart_waste.mitra" */
export type Smart_Waste_Mitra_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  closeTime?: InputMaybe<Scalars['timetz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openTime?: InputMaybe<Scalars['timetz']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
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
  closeTime?: InputMaybe<Scalars['timetz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openTime?: InputMaybe<Scalars['timetz']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
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
  Name = 'name',
  /** column name */
  OpenTime = 'openTime',
  /** column name */
  PhoneNumber = 'phoneNumber',
}

export type Smart_Waste_Mitra_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Smart_Waste_Mitra_Set_Input>;
  /** filter the rows which have to be updated */
  where: Smart_Waste_Mitra_Bool_Exp;
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
  WasteTypePkey = 'waste_type_pkey',
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
  Name = 'name',
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
  Name = 'name',
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
  /** fetch data from the table: "smart_waste.coordinate" */
  smart_waste_coordinate: Array<Smart_Waste_Coordinate>;
  /** fetch aggregated fields from the table: "smart_waste.coordinate" */
  smart_waste_coordinate_aggregate: Smart_Waste_Coordinate_Aggregate;
  /** fetch data from the table: "smart_waste.coordinate" using primary key columns */
  smart_waste_coordinate_by_pk?: Maybe<Smart_Waste_Coordinate>;
  /** fetch data from the table in a streaming manner: "smart_waste.coordinate" */
  smart_waste_coordinate_stream: Array<Smart_Waste_Coordinate>;
  /** fetch data from the table: "smart_waste.mitra" */
  smart_waste_mitra: Array<Smart_Waste_Mitra>;
  /** fetch aggregated fields from the table: "smart_waste.mitra" */
  smart_waste_mitra_aggregate: Smart_Waste_Mitra_Aggregate;
  /** fetch data from the table: "smart_waste.mitra" using primary key columns */
  smart_waste_mitra_by_pk?: Maybe<Smart_Waste_Mitra>;
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

export type Subscription_RootSmart_Waste_CoordinateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Coordinate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Coordinate_Order_By>>;
  where?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
};

export type Subscription_RootSmart_Waste_Coordinate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Coordinate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Coordinate_Order_By>>;
  where?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
};

export type Subscription_RootSmart_Waste_Coordinate_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootSmart_Waste_Coordinate_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Smart_Waste_Coordinate_Stream_Cursor_Input>>;
  where?: InputMaybe<Smart_Waste_Coordinate_Bool_Exp>;
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

/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timetz']['input']>;
  _gt?: InputMaybe<Scalars['timetz']['input']>;
  _gte?: InputMaybe<Scalars['timetz']['input']>;
  _in?: InputMaybe<Array<Scalars['timetz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timetz']['input']>;
  _lte?: InputMaybe<Scalars['timetz']['input']>;
  _neq?: InputMaybe<Scalars['timetz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timetz']['input']>>;
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

export type GetAllMitraQueryVariables = Exact<{[key: string]: never}>;

export type GetAllMitraQuery = {
  __typename?: 'query_root';
  smart_waste_mitra: Array<{
    __typename?: 'smart_waste_mitra';
    id: any;
    name: string;
    address: string;
    closeTime: any;
    openTime: any;
    phoneNumber: string;
    mitra_coordinate: Array<{
      __typename?: 'smart_waste_coordinate';
      lat: any;
      long: any;
    }>;
  }>;
};

export const GetAllMitraDocument = gql`
  query getAllMitra {
    smart_waste_mitra {
      id
      name
      address
      closeTime
      openTime
      phoneNumber
      mitra_coordinate {
        lat
        long
      }
    }
  }
`;

/**
 * __useGetAllMitraQuery__
 *
 * To run a query within a React component, call `useGetAllMitraQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMitraQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMitraQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMitraQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllMitraQuery,
    GetAllMitraQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetAllMitraQuery, GetAllMitraQueryVariables>(
    GetAllMitraDocument,
    options,
  );
}
export function useGetAllMitraLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllMitraQuery,
    GetAllMitraQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetAllMitraQuery, GetAllMitraQueryVariables>(
    GetAllMitraDocument,
    options,
  );
}
export type GetAllMitraQueryHookResult = ReturnType<typeof useGetAllMitraQuery>;
export type GetAllMitraLazyQueryHookResult = ReturnType<
  typeof useGetAllMitraLazyQuery
>;
export type GetAllMitraQueryResult = Apollo.QueryResult<
  GetAllMitraQuery,
  GetAllMitraQueryVariables
>;
