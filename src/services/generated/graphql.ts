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
  date: { input: any; output: any; }
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

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

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
  /** delete data from the table: "smart_waste.delivery_service" */
  delete_smart_waste_delivery_service?: Maybe<Smart_Waste_Delivery_Service_Mutation_Response>;
  /** delete single row from the table: "smart_waste.delivery_service" */
  delete_smart_waste_delivery_service_by_pk?: Maybe<Smart_Waste_Delivery_Service>;
  /** delete data from the table: "smart_waste.delivery_service_product" */
  delete_smart_waste_delivery_service_product?: Maybe<Smart_Waste_Delivery_Service_Product_Mutation_Response>;
  /** delete single row from the table: "smart_waste.delivery_service_product" */
  delete_smart_waste_delivery_service_product_by_pk?: Maybe<Smart_Waste_Delivery_Service_Product>;
  /** delete data from the table: "smart_waste.delivery_type" */
  delete_smart_waste_delivery_type?: Maybe<Smart_Waste_Delivery_Type_Mutation_Response>;
  /** delete single row from the table: "smart_waste.delivery_type" */
  delete_smart_waste_delivery_type_by_pk?: Maybe<Smart_Waste_Delivery_Type>;
  /** delete data from the table: "smart_waste.mitra" */
  delete_smart_waste_mitra?: Maybe<Smart_Waste_Mitra_Mutation_Response>;
  /** delete single row from the table: "smart_waste.mitra" */
  delete_smart_waste_mitra_by_pk?: Maybe<Smart_Waste_Mitra>;
  /** delete data from the table: "smart_waste.mitra_distance" */
  delete_smart_waste_mitra_distance?: Maybe<Smart_Waste_Mitra_Distance_Mutation_Response>;
  /** delete single row from the table: "smart_waste.mitra_distance" */
  delete_smart_waste_mitra_distance_by_pk?: Maybe<Smart_Waste_Mitra_Distance>;
  /** delete data from the table: "smart_waste.transaction_waste" */
  delete_smart_waste_transaction_waste?: Maybe<Smart_Waste_Transaction_Waste_Mutation_Response>;
  /** delete single row from the table: "smart_waste.transaction_waste" */
  delete_smart_waste_transaction_waste_by_pk?: Maybe<Smart_Waste_Transaction_Waste>;
  /** delete data from the table: "smart_waste.transaction_waste_type" */
  delete_smart_waste_transaction_waste_type?: Maybe<Smart_Waste_Transaction_Waste_Type_Mutation_Response>;
  /** delete single row from the table: "smart_waste.transaction_waste_type" */
  delete_smart_waste_transaction_waste_type_by_pk?: Maybe<Smart_Waste_Transaction_Waste_Type>;
  /** delete data from the table: "smart_waste.waste_type" */
  delete_smart_waste_waste_type?: Maybe<Smart_Waste_Waste_Type_Mutation_Response>;
  /** delete single row from the table: "smart_waste.waste_type" */
  delete_smart_waste_waste_type_by_pk?: Maybe<Smart_Waste_Waste_Type>;
  /** insert data into the table: "smart_waste.delivery_service" */
  insert_smart_waste_delivery_service?: Maybe<Smart_Waste_Delivery_Service_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.delivery_service" */
  insert_smart_waste_delivery_service_one?: Maybe<Smart_Waste_Delivery_Service>;
  /** insert data into the table: "smart_waste.delivery_service_product" */
  insert_smart_waste_delivery_service_product?: Maybe<Smart_Waste_Delivery_Service_Product_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.delivery_service_product" */
  insert_smart_waste_delivery_service_product_one?: Maybe<Smart_Waste_Delivery_Service_Product>;
  /** insert data into the table: "smart_waste.delivery_type" */
  insert_smart_waste_delivery_type?: Maybe<Smart_Waste_Delivery_Type_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.delivery_type" */
  insert_smart_waste_delivery_type_one?: Maybe<Smart_Waste_Delivery_Type>;
  /** insert data into the table: "smart_waste.mitra" */
  insert_smart_waste_mitra?: Maybe<Smart_Waste_Mitra_Mutation_Response>;
  /** insert data into the table: "smart_waste.mitra_distance" */
  insert_smart_waste_mitra_distance?: Maybe<Smart_Waste_Mitra_Distance_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.mitra_distance" */
  insert_smart_waste_mitra_distance_one?: Maybe<Smart_Waste_Mitra_Distance>;
  /** insert a single row into the table: "smart_waste.mitra" */
  insert_smart_waste_mitra_one?: Maybe<Smart_Waste_Mitra>;
  /** insert data into the table: "smart_waste.transaction_waste" */
  insert_smart_waste_transaction_waste?: Maybe<Smart_Waste_Transaction_Waste_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.transaction_waste" */
  insert_smart_waste_transaction_waste_one?: Maybe<Smart_Waste_Transaction_Waste>;
  /** insert data into the table: "smart_waste.transaction_waste_type" */
  insert_smart_waste_transaction_waste_type?: Maybe<Smart_Waste_Transaction_Waste_Type_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.transaction_waste_type" */
  insert_smart_waste_transaction_waste_type_one?: Maybe<Smart_Waste_Transaction_Waste_Type>;
  /** insert data into the table: "smart_waste.waste_type" */
  insert_smart_waste_waste_type?: Maybe<Smart_Waste_Waste_Type_Mutation_Response>;
  /** insert a single row into the table: "smart_waste.waste_type" */
  insert_smart_waste_waste_type_one?: Maybe<Smart_Waste_Waste_Type>;
  /** update data of the table: "smart_waste.delivery_service" */
  update_smart_waste_delivery_service?: Maybe<Smart_Waste_Delivery_Service_Mutation_Response>;
  /** update single row of the table: "smart_waste.delivery_service" */
  update_smart_waste_delivery_service_by_pk?: Maybe<Smart_Waste_Delivery_Service>;
  /** update multiples rows of table: "smart_waste.delivery_service" */
  update_smart_waste_delivery_service_many?: Maybe<Array<Maybe<Smart_Waste_Delivery_Service_Mutation_Response>>>;
  /** update data of the table: "smart_waste.delivery_service_product" */
  update_smart_waste_delivery_service_product?: Maybe<Smart_Waste_Delivery_Service_Product_Mutation_Response>;
  /** update single row of the table: "smart_waste.delivery_service_product" */
  update_smart_waste_delivery_service_product_by_pk?: Maybe<Smart_Waste_Delivery_Service_Product>;
  /** update multiples rows of table: "smart_waste.delivery_service_product" */
  update_smart_waste_delivery_service_product_many?: Maybe<Array<Maybe<Smart_Waste_Delivery_Service_Product_Mutation_Response>>>;
  /** update data of the table: "smart_waste.delivery_type" */
  update_smart_waste_delivery_type?: Maybe<Smart_Waste_Delivery_Type_Mutation_Response>;
  /** update single row of the table: "smart_waste.delivery_type" */
  update_smart_waste_delivery_type_by_pk?: Maybe<Smart_Waste_Delivery_Type>;
  /** update multiples rows of table: "smart_waste.delivery_type" */
  update_smart_waste_delivery_type_many?: Maybe<Array<Maybe<Smart_Waste_Delivery_Type_Mutation_Response>>>;
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
  /** update data of the table: "smart_waste.transaction_waste" */
  update_smart_waste_transaction_waste?: Maybe<Smart_Waste_Transaction_Waste_Mutation_Response>;
  /** update single row of the table: "smart_waste.transaction_waste" */
  update_smart_waste_transaction_waste_by_pk?: Maybe<Smart_Waste_Transaction_Waste>;
  /** update multiples rows of table: "smart_waste.transaction_waste" */
  update_smart_waste_transaction_waste_many?: Maybe<Array<Maybe<Smart_Waste_Transaction_Waste_Mutation_Response>>>;
  /** update data of the table: "smart_waste.transaction_waste_type" */
  update_smart_waste_transaction_waste_type?: Maybe<Smart_Waste_Transaction_Waste_Type_Mutation_Response>;
  /** update single row of the table: "smart_waste.transaction_waste_type" */
  update_smart_waste_transaction_waste_type_by_pk?: Maybe<Smart_Waste_Transaction_Waste_Type>;
  /** update multiples rows of table: "smart_waste.transaction_waste_type" */
  update_smart_waste_transaction_waste_type_many?: Maybe<Array<Maybe<Smart_Waste_Transaction_Waste_Type_Mutation_Response>>>;
  /** update data of the table: "smart_waste.waste_type" */
  update_smart_waste_waste_type?: Maybe<Smart_Waste_Waste_Type_Mutation_Response>;
  /** update single row of the table: "smart_waste.waste_type" */
  update_smart_waste_waste_type_by_pk?: Maybe<Smart_Waste_Waste_Type>;
  /** update multiples rows of table: "smart_waste.waste_type" */
  update_smart_waste_waste_type_many?: Maybe<Array<Maybe<Smart_Waste_Waste_Type_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Delivery_ServiceArgs = {
  where: Smart_Waste_Delivery_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Delivery_Service_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Delivery_Service_ProductArgs = {
  where: Smart_Waste_Delivery_Service_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Delivery_Service_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Delivery_TypeArgs = {
  where: Smart_Waste_Delivery_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Delivery_Type_By_PkArgs = {
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
export type Mutation_RootDelete_Smart_Waste_Mitra_DistanceArgs = {
  where: Smart_Waste_Mitra_Distance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Mitra_Distance_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Transaction_WasteArgs = {
  where: Smart_Waste_Transaction_Waste_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Transaction_Waste_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Transaction_Waste_TypeArgs = {
  where: Smart_Waste_Transaction_Waste_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Waste_Transaction_Waste_Type_By_PkArgs = {
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
export type Mutation_RootInsert_Smart_Waste_Delivery_ServiceArgs = {
  objects: Array<Smart_Waste_Delivery_Service_Insert_Input>;
  on_conflict?: InputMaybe<Smart_Waste_Delivery_Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Delivery_Service_OneArgs = {
  object: Smart_Waste_Delivery_Service_Insert_Input;
  on_conflict?: InputMaybe<Smart_Waste_Delivery_Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Delivery_Service_ProductArgs = {
  objects: Array<Smart_Waste_Delivery_Service_Product_Insert_Input>;
  on_conflict?: InputMaybe<Smart_Waste_Delivery_Service_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Delivery_Service_Product_OneArgs = {
  object: Smart_Waste_Delivery_Service_Product_Insert_Input;
  on_conflict?: InputMaybe<Smart_Waste_Delivery_Service_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Delivery_TypeArgs = {
  objects: Array<Smart_Waste_Delivery_Type_Insert_Input>;
  on_conflict?: InputMaybe<Smart_Waste_Delivery_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Delivery_Type_OneArgs = {
  object: Smart_Waste_Delivery_Type_Insert_Input;
  on_conflict?: InputMaybe<Smart_Waste_Delivery_Type_On_Conflict>;
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
export type Mutation_RootInsert_Smart_Waste_Transaction_WasteArgs = {
  objects: Array<Smart_Waste_Transaction_Waste_Insert_Input>;
  on_conflict?: InputMaybe<Smart_Waste_Transaction_Waste_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Transaction_Waste_OneArgs = {
  object: Smart_Waste_Transaction_Waste_Insert_Input;
  on_conflict?: InputMaybe<Smart_Waste_Transaction_Waste_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Transaction_Waste_TypeArgs = {
  objects: Array<Smart_Waste_Transaction_Waste_Type_Insert_Input>;
  on_conflict?: InputMaybe<Smart_Waste_Transaction_Waste_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Waste_Transaction_Waste_Type_OneArgs = {
  object: Smart_Waste_Transaction_Waste_Type_Insert_Input;
  on_conflict?: InputMaybe<Smart_Waste_Transaction_Waste_Type_On_Conflict>;
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
export type Mutation_RootUpdate_Smart_Waste_Delivery_ServiceArgs = {
  _inc?: InputMaybe<Smart_Waste_Delivery_Service_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Delivery_Service_Set_Input>;
  where: Smart_Waste_Delivery_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Delivery_Service_By_PkArgs = {
  _inc?: InputMaybe<Smart_Waste_Delivery_Service_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Delivery_Service_Set_Input>;
  pk_columns: Smart_Waste_Delivery_Service_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Delivery_Service_ManyArgs = {
  updates: Array<Smart_Waste_Delivery_Service_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Delivery_Service_ProductArgs = {
  _inc?: InputMaybe<Smart_Waste_Delivery_Service_Product_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Delivery_Service_Product_Set_Input>;
  where: Smart_Waste_Delivery_Service_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Delivery_Service_Product_By_PkArgs = {
  _inc?: InputMaybe<Smart_Waste_Delivery_Service_Product_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Delivery_Service_Product_Set_Input>;
  pk_columns: Smart_Waste_Delivery_Service_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Delivery_Service_Product_ManyArgs = {
  updates: Array<Smart_Waste_Delivery_Service_Product_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Delivery_TypeArgs = {
  _inc?: InputMaybe<Smart_Waste_Delivery_Type_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Delivery_Type_Set_Input>;
  where: Smart_Waste_Delivery_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Delivery_Type_By_PkArgs = {
  _inc?: InputMaybe<Smart_Waste_Delivery_Type_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Delivery_Type_Set_Input>;
  pk_columns: Smart_Waste_Delivery_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Delivery_Type_ManyArgs = {
  updates: Array<Smart_Waste_Delivery_Type_Updates>;
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
export type Mutation_RootUpdate_Smart_Waste_Transaction_WasteArgs = {
  _inc?: InputMaybe<Smart_Waste_Transaction_Waste_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Transaction_Waste_Set_Input>;
  where: Smart_Waste_Transaction_Waste_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Transaction_Waste_By_PkArgs = {
  _inc?: InputMaybe<Smart_Waste_Transaction_Waste_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Transaction_Waste_Set_Input>;
  pk_columns: Smart_Waste_Transaction_Waste_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Transaction_Waste_ManyArgs = {
  updates: Array<Smart_Waste_Transaction_Waste_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Transaction_Waste_TypeArgs = {
  _inc?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Set_Input>;
  where: Smart_Waste_Transaction_Waste_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Transaction_Waste_Type_By_PkArgs = {
  _inc?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Inc_Input>;
  _set?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Set_Input>;
  pk_columns: Smart_Waste_Transaction_Waste_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Waste_Transaction_Waste_Type_ManyArgs = {
  updates: Array<Smart_Waste_Transaction_Waste_Type_Updates>;
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
  /** fetch data from the table: "smart_waste.delivery_service" */
  smart_waste_delivery_service: Array<Smart_Waste_Delivery_Service>;
  /** fetch aggregated fields from the table: "smart_waste.delivery_service" */
  smart_waste_delivery_service_aggregate: Smart_Waste_Delivery_Service_Aggregate;
  /** fetch data from the table: "smart_waste.delivery_service" using primary key columns */
  smart_waste_delivery_service_by_pk?: Maybe<Smart_Waste_Delivery_Service>;
  /** fetch data from the table: "smart_waste.delivery_service_product" */
  smart_waste_delivery_service_product: Array<Smart_Waste_Delivery_Service_Product>;
  /** fetch aggregated fields from the table: "smart_waste.delivery_service_product" */
  smart_waste_delivery_service_product_aggregate: Smart_Waste_Delivery_Service_Product_Aggregate;
  /** fetch data from the table: "smart_waste.delivery_service_product" using primary key columns */
  smart_waste_delivery_service_product_by_pk?: Maybe<Smart_Waste_Delivery_Service_Product>;
  /** fetch data from the table: "smart_waste.delivery_type" */
  smart_waste_delivery_type: Array<Smart_Waste_Delivery_Type>;
  /** fetch aggregated fields from the table: "smart_waste.delivery_type" */
  smart_waste_delivery_type_aggregate: Smart_Waste_Delivery_Type_Aggregate;
  /** fetch data from the table: "smart_waste.delivery_type" using primary key columns */
  smart_waste_delivery_type_by_pk?: Maybe<Smart_Waste_Delivery_Type>;
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
  /** fetch data from the table: "smart_waste.transaction_waste" */
  smart_waste_transaction_waste: Array<Smart_Waste_Transaction_Waste>;
  /** fetch aggregated fields from the table: "smart_waste.transaction_waste" */
  smart_waste_transaction_waste_aggregate: Smart_Waste_Transaction_Waste_Aggregate;
  /** fetch data from the table: "smart_waste.transaction_waste" using primary key columns */
  smart_waste_transaction_waste_by_pk?: Maybe<Smart_Waste_Transaction_Waste>;
  /** fetch data from the table: "smart_waste.transaction_waste_type" */
  smart_waste_transaction_waste_type: Array<Smart_Waste_Transaction_Waste_Type>;
  /** fetch aggregated fields from the table: "smart_waste.transaction_waste_type" */
  smart_waste_transaction_waste_type_aggregate: Smart_Waste_Transaction_Waste_Type_Aggregate;
  /** fetch data from the table: "smart_waste.transaction_waste_type" using primary key columns */
  smart_waste_transaction_waste_type_by_pk?: Maybe<Smart_Waste_Transaction_Waste_Type>;
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


export type Query_RootSmart_Waste_Delivery_ServiceArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
};


export type Query_RootSmart_Waste_Delivery_Service_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
};


export type Query_RootSmart_Waste_Delivery_Service_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSmart_Waste_Delivery_Service_ProductArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
};


export type Query_RootSmart_Waste_Delivery_Service_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
};


export type Query_RootSmart_Waste_Delivery_Service_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSmart_Waste_Delivery_TypeArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Type_Bool_Exp>;
};


export type Query_RootSmart_Waste_Delivery_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Type_Bool_Exp>;
};


export type Query_RootSmart_Waste_Delivery_Type_By_PkArgs = {
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


export type Query_RootSmart_Waste_Transaction_WasteArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Order_By>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Bool_Exp>;
};


export type Query_RootSmart_Waste_Transaction_Waste_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Order_By>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Bool_Exp>;
};


export type Query_RootSmart_Waste_Transaction_Waste_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSmart_Waste_Transaction_Waste_TypeArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Bool_Exp>;
};


export type Query_RootSmart_Waste_Transaction_Waste_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Bool_Exp>;
};


export type Query_RootSmart_Waste_Transaction_Waste_Type_By_PkArgs = {
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

export type Search_Mitra_Near_User_Args = {
  distance_kms?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['float8']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
};

/** columns and relationships of "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service = {
  __typename?: 'smart_waste_delivery_service';
  delivery_name: Scalars['String']['output'];
  /** An array relationship */
  delivery_service_delivery_service_products: Array<Smart_Waste_Delivery_Service_Product>;
  /** An aggregate relationship */
  delivery_service_delivery_service_products_aggregate: Smart_Waste_Delivery_Service_Product_Aggregate;
  /** An object relationship */
  delivery_service_delivery_type: Smart_Waste_Delivery_Type;
  delivery_type_id: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  logo_uri?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_ServiceDelivery_Service_Delivery_Service_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
};


/** columns and relationships of "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_ServiceDelivery_Service_Delivery_Service_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
};

/** aggregated selection of "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Aggregate = {
  __typename?: 'smart_waste_delivery_service_aggregate';
  aggregate?: Maybe<Smart_Waste_Delivery_Service_Aggregate_Fields>;
  nodes: Array<Smart_Waste_Delivery_Service>;
};

export type Smart_Waste_Delivery_Service_Aggregate_Bool_Exp = {
  count?: InputMaybe<Smart_Waste_Delivery_Service_Aggregate_Bool_Exp_Count>;
};

export type Smart_Waste_Delivery_Service_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Smart_Waste_Delivery_Service_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Aggregate_Fields = {
  __typename?: 'smart_waste_delivery_service_aggregate_fields';
  avg?: Maybe<Smart_Waste_Delivery_Service_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Smart_Waste_Delivery_Service_Max_Fields>;
  min?: Maybe<Smart_Waste_Delivery_Service_Min_Fields>;
  stddev?: Maybe<Smart_Waste_Delivery_Service_Stddev_Fields>;
  stddev_pop?: Maybe<Smart_Waste_Delivery_Service_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smart_Waste_Delivery_Service_Stddev_Samp_Fields>;
  sum?: Maybe<Smart_Waste_Delivery_Service_Sum_Fields>;
  var_pop?: Maybe<Smart_Waste_Delivery_Service_Var_Pop_Fields>;
  var_samp?: Maybe<Smart_Waste_Delivery_Service_Var_Samp_Fields>;
  variance?: Maybe<Smart_Waste_Delivery_Service_Variance_Fields>;
};


/** aggregate fields of "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Smart_Waste_Delivery_Service_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Aggregate_Order_By = {
  avg?: InputMaybe<Smart_Waste_Delivery_Service_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Smart_Waste_Delivery_Service_Max_Order_By>;
  min?: InputMaybe<Smart_Waste_Delivery_Service_Min_Order_By>;
  stddev?: InputMaybe<Smart_Waste_Delivery_Service_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Smart_Waste_Delivery_Service_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Smart_Waste_Delivery_Service_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Smart_Waste_Delivery_Service_Sum_Order_By>;
  var_pop?: InputMaybe<Smart_Waste_Delivery_Service_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Smart_Waste_Delivery_Service_Var_Samp_Order_By>;
  variance?: InputMaybe<Smart_Waste_Delivery_Service_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Arr_Rel_Insert_Input = {
  data: Array<Smart_Waste_Delivery_Service_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Smart_Waste_Delivery_Service_On_Conflict>;
};

/** aggregate avg on columns */
export type Smart_Waste_Delivery_Service_Avg_Fields = {
  __typename?: 'smart_waste_delivery_service_avg_fields';
  delivery_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Avg_Order_By = {
  delivery_type_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "smart_waste.delivery_service". All fields are combined with a logical 'AND'. */
export type Smart_Waste_Delivery_Service_Bool_Exp = {
  _and?: InputMaybe<Array<Smart_Waste_Delivery_Service_Bool_Exp>>;
  _not?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
  _or?: InputMaybe<Array<Smart_Waste_Delivery_Service_Bool_Exp>>;
  delivery_name?: InputMaybe<String_Comparison_Exp>;
  delivery_service_delivery_service_products?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
  delivery_service_delivery_service_products_aggregate?: InputMaybe<Smart_Waste_Delivery_Service_Product_Aggregate_Bool_Exp>;
  delivery_service_delivery_type?: InputMaybe<Smart_Waste_Delivery_Type_Bool_Exp>;
  delivery_type_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logo_uri?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_waste.delivery_service" */
export enum Smart_Waste_Delivery_Service_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeliveryServicePkey = 'delivery_service_pkey'
}

/** input type for incrementing numeric columns in table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Inc_Input = {
  delivery_type_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Insert_Input = {
  delivery_name?: InputMaybe<Scalars['String']['input']>;
  delivery_service_delivery_service_products?: InputMaybe<Smart_Waste_Delivery_Service_Product_Arr_Rel_Insert_Input>;
  delivery_service_delivery_type?: InputMaybe<Smart_Waste_Delivery_Type_Obj_Rel_Insert_Input>;
  delivery_type_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  logo_uri?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Smart_Waste_Delivery_Service_Max_Fields = {
  __typename?: 'smart_waste_delivery_service_max_fields';
  delivery_name?: Maybe<Scalars['String']['output']>;
  delivery_type_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  logo_uri?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Max_Order_By = {
  delivery_name?: InputMaybe<Order_By>;
  delivery_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo_uri?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Smart_Waste_Delivery_Service_Min_Fields = {
  __typename?: 'smart_waste_delivery_service_min_fields';
  delivery_name?: Maybe<Scalars['String']['output']>;
  delivery_type_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  logo_uri?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Min_Order_By = {
  delivery_name?: InputMaybe<Order_By>;
  delivery_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo_uri?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Mutation_Response = {
  __typename?: 'smart_waste_delivery_service_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Waste_Delivery_Service>;
};

/** input type for inserting object relation for remote table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Obj_Rel_Insert_Input = {
  data: Smart_Waste_Delivery_Service_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Smart_Waste_Delivery_Service_On_Conflict>;
};

/** on_conflict condition type for table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_On_Conflict = {
  constraint: Smart_Waste_Delivery_Service_Constraint;
  update_columns?: Array<Smart_Waste_Delivery_Service_Update_Column>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
};

/** Ordering options when selecting data from "smart_waste.delivery_service". */
export type Smart_Waste_Delivery_Service_Order_By = {
  delivery_name?: InputMaybe<Order_By>;
  delivery_service_delivery_service_products_aggregate?: InputMaybe<Smart_Waste_Delivery_Service_Product_Aggregate_Order_By>;
  delivery_service_delivery_type?: InputMaybe<Smart_Waste_Delivery_Type_Order_By>;
  delivery_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo_uri?: InputMaybe<Order_By>;
};

/** primary key columns input for table: smart_waste.delivery_service */
export type Smart_Waste_Delivery_Service_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product = {
  __typename?: 'smart_waste_delivery_service_product';
  delivery_service_id: Scalars['uuid']['output'];
  /** An object relationship */
  delivery_service_product_delivery_service: Smart_Waste_Delivery_Service;
  estimate_day: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  price_perkilo: Scalars['Int']['output'];
  service_name: Scalars['String']['output'];
};

/** aggregated selection of "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Aggregate = {
  __typename?: 'smart_waste_delivery_service_product_aggregate';
  aggregate?: Maybe<Smart_Waste_Delivery_Service_Product_Aggregate_Fields>;
  nodes: Array<Smart_Waste_Delivery_Service_Product>;
};

export type Smart_Waste_Delivery_Service_Product_Aggregate_Bool_Exp = {
  count?: InputMaybe<Smart_Waste_Delivery_Service_Product_Aggregate_Bool_Exp_Count>;
};

export type Smart_Waste_Delivery_Service_Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Aggregate_Fields = {
  __typename?: 'smart_waste_delivery_service_product_aggregate_fields';
  avg?: Maybe<Smart_Waste_Delivery_Service_Product_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Smart_Waste_Delivery_Service_Product_Max_Fields>;
  min?: Maybe<Smart_Waste_Delivery_Service_Product_Min_Fields>;
  stddev?: Maybe<Smart_Waste_Delivery_Service_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Smart_Waste_Delivery_Service_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smart_Waste_Delivery_Service_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Smart_Waste_Delivery_Service_Product_Sum_Fields>;
  var_pop?: Maybe<Smart_Waste_Delivery_Service_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Smart_Waste_Delivery_Service_Product_Var_Samp_Fields>;
  variance?: Maybe<Smart_Waste_Delivery_Service_Product_Variance_Fields>;
};


/** aggregate fields of "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Aggregate_Order_By = {
  avg?: InputMaybe<Smart_Waste_Delivery_Service_Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Smart_Waste_Delivery_Service_Product_Max_Order_By>;
  min?: InputMaybe<Smart_Waste_Delivery_Service_Product_Min_Order_By>;
  stddev?: InputMaybe<Smart_Waste_Delivery_Service_Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Smart_Waste_Delivery_Service_Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Smart_Waste_Delivery_Service_Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Smart_Waste_Delivery_Service_Product_Sum_Order_By>;
  var_pop?: InputMaybe<Smart_Waste_Delivery_Service_Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Smart_Waste_Delivery_Service_Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Smart_Waste_Delivery_Service_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Arr_Rel_Insert_Input = {
  data: Array<Smart_Waste_Delivery_Service_Product_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Smart_Waste_Delivery_Service_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Smart_Waste_Delivery_Service_Product_Avg_Fields = {
  __typename?: 'smart_waste_delivery_service_product_avg_fields';
  price_perkilo?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Avg_Order_By = {
  price_perkilo?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "smart_waste.delivery_service_product". All fields are combined with a logical 'AND'. */
export type Smart_Waste_Delivery_Service_Product_Bool_Exp = {
  _and?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Bool_Exp>>;
  _not?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
  _or?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Bool_Exp>>;
  delivery_service_id?: InputMaybe<Uuid_Comparison_Exp>;
  delivery_service_product_delivery_service?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
  estimate_day?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  price_perkilo?: InputMaybe<Int_Comparison_Exp>;
  service_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_waste.delivery_service_product" */
export enum Smart_Waste_Delivery_Service_Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeliveryServiceTypePkey = 'delivery_service_type_pkey'
}

/** input type for incrementing numeric columns in table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Inc_Input = {
  price_perkilo?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Insert_Input = {
  delivery_service_id?: InputMaybe<Scalars['uuid']['input']>;
  delivery_service_product_delivery_service?: InputMaybe<Smart_Waste_Delivery_Service_Obj_Rel_Insert_Input>;
  estimate_day?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  price_perkilo?: InputMaybe<Scalars['Int']['input']>;
  service_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Smart_Waste_Delivery_Service_Product_Max_Fields = {
  __typename?: 'smart_waste_delivery_service_product_max_fields';
  delivery_service_id?: Maybe<Scalars['uuid']['output']>;
  estimate_day?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  price_perkilo?: Maybe<Scalars['Int']['output']>;
  service_name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Max_Order_By = {
  delivery_service_id?: InputMaybe<Order_By>;
  estimate_day?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price_perkilo?: InputMaybe<Order_By>;
  service_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Smart_Waste_Delivery_Service_Product_Min_Fields = {
  __typename?: 'smart_waste_delivery_service_product_min_fields';
  delivery_service_id?: Maybe<Scalars['uuid']['output']>;
  estimate_day?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  price_perkilo?: Maybe<Scalars['Int']['output']>;
  service_name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Min_Order_By = {
  delivery_service_id?: InputMaybe<Order_By>;
  estimate_day?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price_perkilo?: InputMaybe<Order_By>;
  service_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Mutation_Response = {
  __typename?: 'smart_waste_delivery_service_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Waste_Delivery_Service_Product>;
};

/** input type for inserting object relation for remote table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Obj_Rel_Insert_Input = {
  data: Smart_Waste_Delivery_Service_Product_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Smart_Waste_Delivery_Service_Product_On_Conflict>;
};

/** on_conflict condition type for table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_On_Conflict = {
  constraint: Smart_Waste_Delivery_Service_Product_Constraint;
  update_columns?: Array<Smart_Waste_Delivery_Service_Product_Update_Column>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "smart_waste.delivery_service_product". */
export type Smart_Waste_Delivery_Service_Product_Order_By = {
  delivery_service_id?: InputMaybe<Order_By>;
  delivery_service_product_delivery_service?: InputMaybe<Smart_Waste_Delivery_Service_Order_By>;
  estimate_day?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price_perkilo?: InputMaybe<Order_By>;
  service_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: smart_waste.delivery_service_product */
export type Smart_Waste_Delivery_Service_Product_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "smart_waste.delivery_service_product" */
export enum Smart_Waste_Delivery_Service_Product_Select_Column {
  /** column name */
  DeliveryServiceId = 'delivery_service_id',
  /** column name */
  EstimateDay = 'estimate_day',
  /** column name */
  Id = 'id',
  /** column name */
  PricePerkilo = 'price_perkilo',
  /** column name */
  ServiceName = 'service_name'
}

/** input type for updating data in table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Set_Input = {
  delivery_service_id?: InputMaybe<Scalars['uuid']['input']>;
  estimate_day?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  price_perkilo?: InputMaybe<Scalars['Int']['input']>;
  service_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Smart_Waste_Delivery_Service_Product_Stddev_Fields = {
  __typename?: 'smart_waste_delivery_service_product_stddev_fields';
  price_perkilo?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Stddev_Order_By = {
  price_perkilo?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Smart_Waste_Delivery_Service_Product_Stddev_Pop_Fields = {
  __typename?: 'smart_waste_delivery_service_product_stddev_pop_fields';
  price_perkilo?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Stddev_Pop_Order_By = {
  price_perkilo?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Smart_Waste_Delivery_Service_Product_Stddev_Samp_Fields = {
  __typename?: 'smart_waste_delivery_service_product_stddev_samp_fields';
  price_perkilo?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Stddev_Samp_Order_By = {
  price_perkilo?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "smart_waste_delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Smart_Waste_Delivery_Service_Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Smart_Waste_Delivery_Service_Product_Stream_Cursor_Value_Input = {
  delivery_service_id?: InputMaybe<Scalars['uuid']['input']>;
  estimate_day?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  price_perkilo?: InputMaybe<Scalars['Int']['input']>;
  service_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Smart_Waste_Delivery_Service_Product_Sum_Fields = {
  __typename?: 'smart_waste_delivery_service_product_sum_fields';
  price_perkilo?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Sum_Order_By = {
  price_perkilo?: InputMaybe<Order_By>;
};

/** update columns of table "smart_waste.delivery_service_product" */
export enum Smart_Waste_Delivery_Service_Product_Update_Column {
  /** column name */
  DeliveryServiceId = 'delivery_service_id',
  /** column name */
  EstimateDay = 'estimate_day',
  /** column name */
  Id = 'id',
  /** column name */
  PricePerkilo = 'price_perkilo',
  /** column name */
  ServiceName = 'service_name'
}

export type Smart_Waste_Delivery_Service_Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Smart_Waste_Delivery_Service_Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Smart_Waste_Delivery_Service_Product_Set_Input>;
  /** filter the rows which have to be updated */
  where: Smart_Waste_Delivery_Service_Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Smart_Waste_Delivery_Service_Product_Var_Pop_Fields = {
  __typename?: 'smart_waste_delivery_service_product_var_pop_fields';
  price_perkilo?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Var_Pop_Order_By = {
  price_perkilo?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Smart_Waste_Delivery_Service_Product_Var_Samp_Fields = {
  __typename?: 'smart_waste_delivery_service_product_var_samp_fields';
  price_perkilo?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Var_Samp_Order_By = {
  price_perkilo?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Smart_Waste_Delivery_Service_Product_Variance_Fields = {
  __typename?: 'smart_waste_delivery_service_product_variance_fields';
  price_perkilo?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "smart_waste.delivery_service_product" */
export type Smart_Waste_Delivery_Service_Product_Variance_Order_By = {
  price_perkilo?: InputMaybe<Order_By>;
};

/** select columns of table "smart_waste.delivery_service" */
export enum Smart_Waste_Delivery_Service_Select_Column {
  /** column name */
  DeliveryName = 'delivery_name',
  /** column name */
  DeliveryTypeId = 'delivery_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUri = 'logo_uri'
}

/** input type for updating data in table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Set_Input = {
  delivery_name?: InputMaybe<Scalars['String']['input']>;
  delivery_type_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  logo_uri?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Smart_Waste_Delivery_Service_Stddev_Fields = {
  __typename?: 'smart_waste_delivery_service_stddev_fields';
  delivery_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Stddev_Order_By = {
  delivery_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Smart_Waste_Delivery_Service_Stddev_Pop_Fields = {
  __typename?: 'smart_waste_delivery_service_stddev_pop_fields';
  delivery_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Stddev_Pop_Order_By = {
  delivery_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Smart_Waste_Delivery_Service_Stddev_Samp_Fields = {
  __typename?: 'smart_waste_delivery_service_stddev_samp_fields';
  delivery_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Stddev_Samp_Order_By = {
  delivery_type_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "smart_waste_delivery_service" */
export type Smart_Waste_Delivery_Service_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Smart_Waste_Delivery_Service_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Smart_Waste_Delivery_Service_Stream_Cursor_Value_Input = {
  delivery_name?: InputMaybe<Scalars['String']['input']>;
  delivery_type_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  logo_uri?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Smart_Waste_Delivery_Service_Sum_Fields = {
  __typename?: 'smart_waste_delivery_service_sum_fields';
  delivery_type_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Sum_Order_By = {
  delivery_type_id?: InputMaybe<Order_By>;
};

/** update columns of table "smart_waste.delivery_service" */
export enum Smart_Waste_Delivery_Service_Update_Column {
  /** column name */
  DeliveryName = 'delivery_name',
  /** column name */
  DeliveryTypeId = 'delivery_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUri = 'logo_uri'
}

export type Smart_Waste_Delivery_Service_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Smart_Waste_Delivery_Service_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Smart_Waste_Delivery_Service_Set_Input>;
  /** filter the rows which have to be updated */
  where: Smart_Waste_Delivery_Service_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Smart_Waste_Delivery_Service_Var_Pop_Fields = {
  __typename?: 'smart_waste_delivery_service_var_pop_fields';
  delivery_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Var_Pop_Order_By = {
  delivery_type_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Smart_Waste_Delivery_Service_Var_Samp_Fields = {
  __typename?: 'smart_waste_delivery_service_var_samp_fields';
  delivery_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Var_Samp_Order_By = {
  delivery_type_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Smart_Waste_Delivery_Service_Variance_Fields = {
  __typename?: 'smart_waste_delivery_service_variance_fields';
  delivery_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "smart_waste.delivery_service" */
export type Smart_Waste_Delivery_Service_Variance_Order_By = {
  delivery_type_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_Type = {
  __typename?: 'smart_waste_delivery_type';
  /** An array relationship */
  delivery_type_delivery_services: Array<Smart_Waste_Delivery_Service>;
  /** An aggregate relationship */
  delivery_type_delivery_services_aggregate: Smart_Waste_Delivery_Service_Aggregate;
  id: Scalars['Int']['output'];
  type_name: Scalars['String']['output'];
};


/** columns and relationships of "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_TypeDelivery_Type_Delivery_ServicesArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
};


/** columns and relationships of "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_TypeDelivery_Type_Delivery_Services_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
};

/** aggregated selection of "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_Type_Aggregate = {
  __typename?: 'smart_waste_delivery_type_aggregate';
  aggregate?: Maybe<Smart_Waste_Delivery_Type_Aggregate_Fields>;
  nodes: Array<Smart_Waste_Delivery_Type>;
};

/** aggregate fields of "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_Type_Aggregate_Fields = {
  __typename?: 'smart_waste_delivery_type_aggregate_fields';
  avg?: Maybe<Smart_Waste_Delivery_Type_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Smart_Waste_Delivery_Type_Max_Fields>;
  min?: Maybe<Smart_Waste_Delivery_Type_Min_Fields>;
  stddev?: Maybe<Smart_Waste_Delivery_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Smart_Waste_Delivery_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smart_Waste_Delivery_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Smart_Waste_Delivery_Type_Sum_Fields>;
  var_pop?: Maybe<Smart_Waste_Delivery_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Smart_Waste_Delivery_Type_Var_Samp_Fields>;
  variance?: Maybe<Smart_Waste_Delivery_Type_Variance_Fields>;
};


/** aggregate fields of "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Smart_Waste_Delivery_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Smart_Waste_Delivery_Type_Avg_Fields = {
  __typename?: 'smart_waste_delivery_type_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "smart_waste.delivery_type". All fields are combined with a logical 'AND'. */
export type Smart_Waste_Delivery_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Smart_Waste_Delivery_Type_Bool_Exp>>;
  _not?: InputMaybe<Smart_Waste_Delivery_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Smart_Waste_Delivery_Type_Bool_Exp>>;
  delivery_type_delivery_services?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
  delivery_type_delivery_services_aggregate?: InputMaybe<Smart_Waste_Delivery_Service_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  type_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_waste.delivery_type" */
export enum Smart_Waste_Delivery_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeliveryTypePkey = 'delivery_type_pkey'
}

/** input type for incrementing numeric columns in table "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_Type_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_Type_Insert_Input = {
  delivery_type_delivery_services?: InputMaybe<Smart_Waste_Delivery_Service_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  type_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Smart_Waste_Delivery_Type_Max_Fields = {
  __typename?: 'smart_waste_delivery_type_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  type_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Smart_Waste_Delivery_Type_Min_Fields = {
  __typename?: 'smart_waste_delivery_type_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  type_name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_Type_Mutation_Response = {
  __typename?: 'smart_waste_delivery_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Waste_Delivery_Type>;
};

/** input type for inserting object relation for remote table "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_Type_Obj_Rel_Insert_Input = {
  data: Smart_Waste_Delivery_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Smart_Waste_Delivery_Type_On_Conflict>;
};

/** on_conflict condition type for table "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_Type_On_Conflict = {
  constraint: Smart_Waste_Delivery_Type_Constraint;
  update_columns?: Array<Smart_Waste_Delivery_Type_Update_Column>;
  where?: InputMaybe<Smart_Waste_Delivery_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "smart_waste.delivery_type". */
export type Smart_Waste_Delivery_Type_Order_By = {
  delivery_type_delivery_services_aggregate?: InputMaybe<Smart_Waste_Delivery_Service_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  type_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: smart_waste.delivery_type */
export type Smart_Waste_Delivery_Type_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "smart_waste.delivery_type" */
export enum Smart_Waste_Delivery_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TypeName = 'type_name'
}

/** input type for updating data in table "smart_waste.delivery_type" */
export type Smart_Waste_Delivery_Type_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  type_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Smart_Waste_Delivery_Type_Stddev_Fields = {
  __typename?: 'smart_waste_delivery_type_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Smart_Waste_Delivery_Type_Stddev_Pop_Fields = {
  __typename?: 'smart_waste_delivery_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Smart_Waste_Delivery_Type_Stddev_Samp_Fields = {
  __typename?: 'smart_waste_delivery_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "smart_waste_delivery_type" */
export type Smart_Waste_Delivery_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Smart_Waste_Delivery_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Smart_Waste_Delivery_Type_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  type_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Smart_Waste_Delivery_Type_Sum_Fields = {
  __typename?: 'smart_waste_delivery_type_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "smart_waste.delivery_type" */
export enum Smart_Waste_Delivery_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TypeName = 'type_name'
}

export type Smart_Waste_Delivery_Type_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Smart_Waste_Delivery_Type_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Smart_Waste_Delivery_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Smart_Waste_Delivery_Type_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Smart_Waste_Delivery_Type_Var_Pop_Fields = {
  __typename?: 'smart_waste_delivery_type_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Smart_Waste_Delivery_Type_Var_Samp_Fields = {
  __typename?: 'smart_waste_delivery_type_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Smart_Waste_Delivery_Type_Variance_Fields = {
  __typename?: 'smart_waste_delivery_type_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
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

/** columns and relationships of "smart_waste.transaction_waste" */
export type Smart_Waste_Transaction_Waste = {
  __typename?: 'smart_waste_transaction_waste';
  delivery_product_id: Scalars['uuid']['output'];
  delivery_service_id: Scalars['uuid']['output'];
  delivery_total_cost: Scalars['Int']['output'];
  detail_address: Scalars['String']['output'];
  detail_waste: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  image_uri: Scalars['String']['output'];
  mitra_id: Scalars['uuid']['output'];
  package_code: Scalars['String']['output'];
  pickup_date?: Maybe<Scalars['date']['output']>;
  status: Scalars['String']['output'];
  transaction_date: Scalars['date']['output'];
  /** An object relationship */
  transaction_waste_delivery_service: Smart_Waste_Delivery_Service;
  /** An object relationship */
  transaction_waste_delivery_service_product: Smart_Waste_Delivery_Service_Product;
  /** An object relationship */
  transaction_waste_mitra: Smart_Waste_Mitra;
  /** An array relationship */
  transaction_waste_transaction_waste_types: Array<Smart_Waste_Transaction_Waste_Type>;
  /** An aggregate relationship */
  transaction_waste_transaction_waste_types_aggregate: Smart_Waste_Transaction_Waste_Type_Aggregate;
  user_address: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
  user_lat: Scalars['float8']['output'];
  user_long: Scalars['float8']['output'];
  user_name: Scalars['String']['output'];
  waste_weight: Scalars['Int']['output'];
};


/** columns and relationships of "smart_waste.transaction_waste" */
export type Smart_Waste_Transaction_WasteTransaction_Waste_Transaction_Waste_TypesArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Bool_Exp>;
};


/** columns and relationships of "smart_waste.transaction_waste" */
export type Smart_Waste_Transaction_WasteTransaction_Waste_Transaction_Waste_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Bool_Exp>;
};

/** aggregated selection of "smart_waste.transaction_waste" */
export type Smart_Waste_Transaction_Waste_Aggregate = {
  __typename?: 'smart_waste_transaction_waste_aggregate';
  aggregate?: Maybe<Smart_Waste_Transaction_Waste_Aggregate_Fields>;
  nodes: Array<Smart_Waste_Transaction_Waste>;
};

/** aggregate fields of "smart_waste.transaction_waste" */
export type Smart_Waste_Transaction_Waste_Aggregate_Fields = {
  __typename?: 'smart_waste_transaction_waste_aggregate_fields';
  avg?: Maybe<Smart_Waste_Transaction_Waste_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Smart_Waste_Transaction_Waste_Max_Fields>;
  min?: Maybe<Smart_Waste_Transaction_Waste_Min_Fields>;
  stddev?: Maybe<Smart_Waste_Transaction_Waste_Stddev_Fields>;
  stddev_pop?: Maybe<Smart_Waste_Transaction_Waste_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smart_Waste_Transaction_Waste_Stddev_Samp_Fields>;
  sum?: Maybe<Smart_Waste_Transaction_Waste_Sum_Fields>;
  var_pop?: Maybe<Smart_Waste_Transaction_Waste_Var_Pop_Fields>;
  var_samp?: Maybe<Smart_Waste_Transaction_Waste_Var_Samp_Fields>;
  variance?: Maybe<Smart_Waste_Transaction_Waste_Variance_Fields>;
};


/** aggregate fields of "smart_waste.transaction_waste" */
export type Smart_Waste_Transaction_Waste_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Smart_Waste_Transaction_Waste_Avg_Fields = {
  __typename?: 'smart_waste_transaction_waste_avg_fields';
  delivery_total_cost?: Maybe<Scalars['Float']['output']>;
  user_lat?: Maybe<Scalars['Float']['output']>;
  user_long?: Maybe<Scalars['Float']['output']>;
  waste_weight?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "smart_waste.transaction_waste". All fields are combined with a logical 'AND'. */
export type Smart_Waste_Transaction_Waste_Bool_Exp = {
  _and?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Bool_Exp>>;
  _not?: InputMaybe<Smart_Waste_Transaction_Waste_Bool_Exp>;
  _or?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Bool_Exp>>;
  delivery_product_id?: InputMaybe<Uuid_Comparison_Exp>;
  delivery_service_id?: InputMaybe<Uuid_Comparison_Exp>;
  delivery_total_cost?: InputMaybe<Int_Comparison_Exp>;
  detail_address?: InputMaybe<String_Comparison_Exp>;
  detail_waste?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  mitra_id?: InputMaybe<Uuid_Comparison_Exp>;
  package_code?: InputMaybe<String_Comparison_Exp>;
  pickup_date?: InputMaybe<Date_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  transaction_date?: InputMaybe<Date_Comparison_Exp>;
  transaction_waste_delivery_service?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
  transaction_waste_delivery_service_product?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
  transaction_waste_mitra?: InputMaybe<Smart_Waste_Mitra_Bool_Exp>;
  transaction_waste_transaction_waste_types?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Bool_Exp>;
  transaction_waste_transaction_waste_types_aggregate?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Aggregate_Bool_Exp>;
  user_address?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  user_lat?: InputMaybe<Float8_Comparison_Exp>;
  user_long?: InputMaybe<Float8_Comparison_Exp>;
  user_name?: InputMaybe<String_Comparison_Exp>;
  waste_weight?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_waste.transaction_waste" */
export enum Smart_Waste_Transaction_Waste_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionWastePkey = 'transaction_waste_pkey'
}

/** input type for incrementing numeric columns in table "smart_waste.transaction_waste" */
export type Smart_Waste_Transaction_Waste_Inc_Input = {
  delivery_total_cost?: InputMaybe<Scalars['Int']['input']>;
  user_lat?: InputMaybe<Scalars['float8']['input']>;
  user_long?: InputMaybe<Scalars['float8']['input']>;
  waste_weight?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "smart_waste.transaction_waste" */
export type Smart_Waste_Transaction_Waste_Insert_Input = {
  delivery_product_id?: InputMaybe<Scalars['uuid']['input']>;
  delivery_service_id?: InputMaybe<Scalars['uuid']['input']>;
  delivery_total_cost?: InputMaybe<Scalars['Int']['input']>;
  detail_address?: InputMaybe<Scalars['String']['input']>;
  detail_waste?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  mitra_id?: InputMaybe<Scalars['uuid']['input']>;
  package_code?: InputMaybe<Scalars['String']['input']>;
  pickup_date?: InputMaybe<Scalars['date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transaction_date?: InputMaybe<Scalars['date']['input']>;
  transaction_waste_delivery_service?: InputMaybe<Smart_Waste_Delivery_Service_Obj_Rel_Insert_Input>;
  transaction_waste_delivery_service_product?: InputMaybe<Smart_Waste_Delivery_Service_Product_Obj_Rel_Insert_Input>;
  transaction_waste_mitra?: InputMaybe<Smart_Waste_Mitra_Obj_Rel_Insert_Input>;
  transaction_waste_transaction_waste_types?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Arr_Rel_Insert_Input>;
  user_address?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_lat?: InputMaybe<Scalars['float8']['input']>;
  user_long?: InputMaybe<Scalars['float8']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
  waste_weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Smart_Waste_Transaction_Waste_Max_Fields = {
  __typename?: 'smart_waste_transaction_waste_max_fields';
  delivery_product_id?: Maybe<Scalars['uuid']['output']>;
  delivery_service_id?: Maybe<Scalars['uuid']['output']>;
  delivery_total_cost?: Maybe<Scalars['Int']['output']>;
  detail_address?: Maybe<Scalars['String']['output']>;
  detail_waste?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  mitra_id?: Maybe<Scalars['uuid']['output']>;
  package_code?: Maybe<Scalars['String']['output']>;
  pickup_date?: Maybe<Scalars['date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transaction_date?: Maybe<Scalars['date']['output']>;
  user_address?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  user_lat?: Maybe<Scalars['float8']['output']>;
  user_long?: Maybe<Scalars['float8']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
  waste_weight?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Smart_Waste_Transaction_Waste_Min_Fields = {
  __typename?: 'smart_waste_transaction_waste_min_fields';
  delivery_product_id?: Maybe<Scalars['uuid']['output']>;
  delivery_service_id?: Maybe<Scalars['uuid']['output']>;
  delivery_total_cost?: Maybe<Scalars['Int']['output']>;
  detail_address?: Maybe<Scalars['String']['output']>;
  detail_waste?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  mitra_id?: Maybe<Scalars['uuid']['output']>;
  package_code?: Maybe<Scalars['String']['output']>;
  pickup_date?: Maybe<Scalars['date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transaction_date?: Maybe<Scalars['date']['output']>;
  user_address?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  user_lat?: Maybe<Scalars['float8']['output']>;
  user_long?: Maybe<Scalars['float8']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
  waste_weight?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "smart_waste.transaction_waste" */
export type Smart_Waste_Transaction_Waste_Mutation_Response = {
  __typename?: 'smart_waste_transaction_waste_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Waste_Transaction_Waste>;
};

/** on_conflict condition type for table "smart_waste.transaction_waste" */
export type Smart_Waste_Transaction_Waste_On_Conflict = {
  constraint: Smart_Waste_Transaction_Waste_Constraint;
  update_columns?: Array<Smart_Waste_Transaction_Waste_Update_Column>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Bool_Exp>;
};

/** Ordering options when selecting data from "smart_waste.transaction_waste". */
export type Smart_Waste_Transaction_Waste_Order_By = {
  delivery_product_id?: InputMaybe<Order_By>;
  delivery_service_id?: InputMaybe<Order_By>;
  delivery_total_cost?: InputMaybe<Order_By>;
  detail_address?: InputMaybe<Order_By>;
  detail_waste?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  mitra_id?: InputMaybe<Order_By>;
  package_code?: InputMaybe<Order_By>;
  pickup_date?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_waste_delivery_service?: InputMaybe<Smart_Waste_Delivery_Service_Order_By>;
  transaction_waste_delivery_service_product?: InputMaybe<Smart_Waste_Delivery_Service_Product_Order_By>;
  transaction_waste_mitra?: InputMaybe<Smart_Waste_Mitra_Order_By>;
  transaction_waste_transaction_waste_types_aggregate?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Aggregate_Order_By>;
  user_address?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_lat?: InputMaybe<Order_By>;
  user_long?: InputMaybe<Order_By>;
  user_name?: InputMaybe<Order_By>;
  waste_weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: smart_waste.transaction_waste */
export type Smart_Waste_Transaction_Waste_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "smart_waste.transaction_waste" */
export enum Smart_Waste_Transaction_Waste_Select_Column {
  /** column name */
  DeliveryProductId = 'delivery_product_id',
  /** column name */
  DeliveryServiceId = 'delivery_service_id',
  /** column name */
  DeliveryTotalCost = 'delivery_total_cost',
  /** column name */
  DetailAddress = 'detail_address',
  /** column name */
  DetailWaste = 'detail_waste',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  MitraId = 'mitra_id',
  /** column name */
  PackageCode = 'package_code',
  /** column name */
  PickupDate = 'pickup_date',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  UserAddress = 'user_address',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserLat = 'user_lat',
  /** column name */
  UserLong = 'user_long',
  /** column name */
  UserName = 'user_name',
  /** column name */
  WasteWeight = 'waste_weight'
}

/** input type for updating data in table "smart_waste.transaction_waste" */
export type Smart_Waste_Transaction_Waste_Set_Input = {
  delivery_product_id?: InputMaybe<Scalars['uuid']['input']>;
  delivery_service_id?: InputMaybe<Scalars['uuid']['input']>;
  delivery_total_cost?: InputMaybe<Scalars['Int']['input']>;
  detail_address?: InputMaybe<Scalars['String']['input']>;
  detail_waste?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  mitra_id?: InputMaybe<Scalars['uuid']['input']>;
  package_code?: InputMaybe<Scalars['String']['input']>;
  pickup_date?: InputMaybe<Scalars['date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transaction_date?: InputMaybe<Scalars['date']['input']>;
  user_address?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_lat?: InputMaybe<Scalars['float8']['input']>;
  user_long?: InputMaybe<Scalars['float8']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
  waste_weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Smart_Waste_Transaction_Waste_Stddev_Fields = {
  __typename?: 'smart_waste_transaction_waste_stddev_fields';
  delivery_total_cost?: Maybe<Scalars['Float']['output']>;
  user_lat?: Maybe<Scalars['Float']['output']>;
  user_long?: Maybe<Scalars['Float']['output']>;
  waste_weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Smart_Waste_Transaction_Waste_Stddev_Pop_Fields = {
  __typename?: 'smart_waste_transaction_waste_stddev_pop_fields';
  delivery_total_cost?: Maybe<Scalars['Float']['output']>;
  user_lat?: Maybe<Scalars['Float']['output']>;
  user_long?: Maybe<Scalars['Float']['output']>;
  waste_weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Smart_Waste_Transaction_Waste_Stddev_Samp_Fields = {
  __typename?: 'smart_waste_transaction_waste_stddev_samp_fields';
  delivery_total_cost?: Maybe<Scalars['Float']['output']>;
  user_lat?: Maybe<Scalars['Float']['output']>;
  user_long?: Maybe<Scalars['Float']['output']>;
  waste_weight?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "smart_waste_transaction_waste" */
export type Smart_Waste_Transaction_Waste_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Smart_Waste_Transaction_Waste_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Smart_Waste_Transaction_Waste_Stream_Cursor_Value_Input = {
  delivery_product_id?: InputMaybe<Scalars['uuid']['input']>;
  delivery_service_id?: InputMaybe<Scalars['uuid']['input']>;
  delivery_total_cost?: InputMaybe<Scalars['Int']['input']>;
  detail_address?: InputMaybe<Scalars['String']['input']>;
  detail_waste?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  mitra_id?: InputMaybe<Scalars['uuid']['input']>;
  package_code?: InputMaybe<Scalars['String']['input']>;
  pickup_date?: InputMaybe<Scalars['date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transaction_date?: InputMaybe<Scalars['date']['input']>;
  user_address?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_lat?: InputMaybe<Scalars['float8']['input']>;
  user_long?: InputMaybe<Scalars['float8']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
  waste_weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Smart_Waste_Transaction_Waste_Sum_Fields = {
  __typename?: 'smart_waste_transaction_waste_sum_fields';
  delivery_total_cost?: Maybe<Scalars['Int']['output']>;
  user_lat?: Maybe<Scalars['float8']['output']>;
  user_long?: Maybe<Scalars['float8']['output']>;
  waste_weight?: Maybe<Scalars['Int']['output']>;
};

/** columns and relationships of "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type = {
  __typename?: 'smart_waste_transaction_waste_type';
  id: Scalars['uuid']['output'];
  transaction_waste_id: Scalars['uuid']['output'];
  waste_type_id: Scalars['Int']['output'];
};

/** aggregated selection of "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Aggregate = {
  __typename?: 'smart_waste_transaction_waste_type_aggregate';
  aggregate?: Maybe<Smart_Waste_Transaction_Waste_Type_Aggregate_Fields>;
  nodes: Array<Smart_Waste_Transaction_Waste_Type>;
};

export type Smart_Waste_Transaction_Waste_Type_Aggregate_Bool_Exp = {
  count?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Aggregate_Bool_Exp_Count>;
};

export type Smart_Waste_Transaction_Waste_Type_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Aggregate_Fields = {
  __typename?: 'smart_waste_transaction_waste_type_aggregate_fields';
  avg?: Maybe<Smart_Waste_Transaction_Waste_Type_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Smart_Waste_Transaction_Waste_Type_Max_Fields>;
  min?: Maybe<Smart_Waste_Transaction_Waste_Type_Min_Fields>;
  stddev?: Maybe<Smart_Waste_Transaction_Waste_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Smart_Waste_Transaction_Waste_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smart_Waste_Transaction_Waste_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Smart_Waste_Transaction_Waste_Type_Sum_Fields>;
  var_pop?: Maybe<Smart_Waste_Transaction_Waste_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Smart_Waste_Transaction_Waste_Type_Var_Samp_Fields>;
  variance?: Maybe<Smart_Waste_Transaction_Waste_Type_Variance_Fields>;
};


/** aggregate fields of "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Aggregate_Order_By = {
  avg?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Max_Order_By>;
  min?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Min_Order_By>;
  stddev?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Sum_Order_By>;
  var_pop?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Var_Samp_Order_By>;
  variance?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Arr_Rel_Insert_Input = {
  data: Array<Smart_Waste_Transaction_Waste_Type_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Smart_Waste_Transaction_Waste_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type Smart_Waste_Transaction_Waste_Type_Avg_Fields = {
  __typename?: 'smart_waste_transaction_waste_type_avg_fields';
  waste_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Avg_Order_By = {
  waste_type_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "smart_waste.transaction_waste_type". All fields are combined with a logical 'AND'. */
export type Smart_Waste_Transaction_Waste_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Bool_Exp>>;
  _not?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  transaction_waste_id?: InputMaybe<Uuid_Comparison_Exp>;
  waste_type_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_waste.transaction_waste_type" */
export enum Smart_Waste_Transaction_Waste_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionWasteTypePkey = 'transaction_waste_type_pkey'
}

/** input type for incrementing numeric columns in table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Inc_Input = {
  waste_type_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  transaction_waste_id?: InputMaybe<Scalars['uuid']['input']>;
  waste_type_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Smart_Waste_Transaction_Waste_Type_Max_Fields = {
  __typename?: 'smart_waste_transaction_waste_type_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  transaction_waste_id?: Maybe<Scalars['uuid']['output']>;
  waste_type_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  transaction_waste_id?: InputMaybe<Order_By>;
  waste_type_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Smart_Waste_Transaction_Waste_Type_Min_Fields = {
  __typename?: 'smart_waste_transaction_waste_type_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  transaction_waste_id?: Maybe<Scalars['uuid']['output']>;
  waste_type_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  transaction_waste_id?: InputMaybe<Order_By>;
  waste_type_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Mutation_Response = {
  __typename?: 'smart_waste_transaction_waste_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Waste_Transaction_Waste_Type>;
};

/** on_conflict condition type for table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_On_Conflict = {
  constraint: Smart_Waste_Transaction_Waste_Type_Constraint;
  update_columns?: Array<Smart_Waste_Transaction_Waste_Type_Update_Column>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "smart_waste.transaction_waste_type". */
export type Smart_Waste_Transaction_Waste_Type_Order_By = {
  id?: InputMaybe<Order_By>;
  transaction_waste_id?: InputMaybe<Order_By>;
  waste_type_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: smart_waste.transaction_waste_type */
export type Smart_Waste_Transaction_Waste_Type_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "smart_waste.transaction_waste_type" */
export enum Smart_Waste_Transaction_Waste_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TransactionWasteId = 'transaction_waste_id',
  /** column name */
  WasteTypeId = 'waste_type_id'
}

/** input type for updating data in table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  transaction_waste_id?: InputMaybe<Scalars['uuid']['input']>;
  waste_type_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Smart_Waste_Transaction_Waste_Type_Stddev_Fields = {
  __typename?: 'smart_waste_transaction_waste_type_stddev_fields';
  waste_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Stddev_Order_By = {
  waste_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Smart_Waste_Transaction_Waste_Type_Stddev_Pop_Fields = {
  __typename?: 'smart_waste_transaction_waste_type_stddev_pop_fields';
  waste_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Stddev_Pop_Order_By = {
  waste_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Smart_Waste_Transaction_Waste_Type_Stddev_Samp_Fields = {
  __typename?: 'smart_waste_transaction_waste_type_stddev_samp_fields';
  waste_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Stddev_Samp_Order_By = {
  waste_type_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "smart_waste_transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Smart_Waste_Transaction_Waste_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Smart_Waste_Transaction_Waste_Type_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  transaction_waste_id?: InputMaybe<Scalars['uuid']['input']>;
  waste_type_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Smart_Waste_Transaction_Waste_Type_Sum_Fields = {
  __typename?: 'smart_waste_transaction_waste_type_sum_fields';
  waste_type_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Sum_Order_By = {
  waste_type_id?: InputMaybe<Order_By>;
};

/** update columns of table "smart_waste.transaction_waste_type" */
export enum Smart_Waste_Transaction_Waste_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TransactionWasteId = 'transaction_waste_id',
  /** column name */
  WasteTypeId = 'waste_type_id'
}

export type Smart_Waste_Transaction_Waste_Type_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Smart_Waste_Transaction_Waste_Type_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Smart_Waste_Transaction_Waste_Type_Var_Pop_Fields = {
  __typename?: 'smart_waste_transaction_waste_type_var_pop_fields';
  waste_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Var_Pop_Order_By = {
  waste_type_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Smart_Waste_Transaction_Waste_Type_Var_Samp_Fields = {
  __typename?: 'smart_waste_transaction_waste_type_var_samp_fields';
  waste_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Var_Samp_Order_By = {
  waste_type_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Smart_Waste_Transaction_Waste_Type_Variance_Fields = {
  __typename?: 'smart_waste_transaction_waste_type_variance_fields';
  waste_type_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "smart_waste.transaction_waste_type" */
export type Smart_Waste_Transaction_Waste_Type_Variance_Order_By = {
  waste_type_id?: InputMaybe<Order_By>;
};

/** update columns of table "smart_waste.transaction_waste" */
export enum Smart_Waste_Transaction_Waste_Update_Column {
  /** column name */
  DeliveryProductId = 'delivery_product_id',
  /** column name */
  DeliveryServiceId = 'delivery_service_id',
  /** column name */
  DeliveryTotalCost = 'delivery_total_cost',
  /** column name */
  DetailAddress = 'detail_address',
  /** column name */
  DetailWaste = 'detail_waste',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  MitraId = 'mitra_id',
  /** column name */
  PackageCode = 'package_code',
  /** column name */
  PickupDate = 'pickup_date',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  UserAddress = 'user_address',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserLat = 'user_lat',
  /** column name */
  UserLong = 'user_long',
  /** column name */
  UserName = 'user_name',
  /** column name */
  WasteWeight = 'waste_weight'
}

export type Smart_Waste_Transaction_Waste_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Smart_Waste_Transaction_Waste_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Smart_Waste_Transaction_Waste_Set_Input>;
  /** filter the rows which have to be updated */
  where: Smart_Waste_Transaction_Waste_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Smart_Waste_Transaction_Waste_Var_Pop_Fields = {
  __typename?: 'smart_waste_transaction_waste_var_pop_fields';
  delivery_total_cost?: Maybe<Scalars['Float']['output']>;
  user_lat?: Maybe<Scalars['Float']['output']>;
  user_long?: Maybe<Scalars['Float']['output']>;
  waste_weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Smart_Waste_Transaction_Waste_Var_Samp_Fields = {
  __typename?: 'smart_waste_transaction_waste_var_samp_fields';
  delivery_total_cost?: Maybe<Scalars['Float']['output']>;
  user_lat?: Maybe<Scalars['Float']['output']>;
  user_long?: Maybe<Scalars['Float']['output']>;
  waste_weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Smart_Waste_Transaction_Waste_Variance_Fields = {
  __typename?: 'smart_waste_transaction_waste_variance_fields';
  delivery_total_cost?: Maybe<Scalars['Float']['output']>;
  user_lat?: Maybe<Scalars['Float']['output']>;
  user_long?: Maybe<Scalars['Float']['output']>;
  waste_weight?: Maybe<Scalars['Float']['output']>;
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
  /** fetch data from the table: "smart_waste.delivery_service" */
  smart_waste_delivery_service: Array<Smart_Waste_Delivery_Service>;
  /** fetch aggregated fields from the table: "smart_waste.delivery_service" */
  smart_waste_delivery_service_aggregate: Smart_Waste_Delivery_Service_Aggregate;
  /** fetch data from the table: "smart_waste.delivery_service" using primary key columns */
  smart_waste_delivery_service_by_pk?: Maybe<Smart_Waste_Delivery_Service>;
  /** fetch data from the table: "smart_waste.delivery_service_product" */
  smart_waste_delivery_service_product: Array<Smart_Waste_Delivery_Service_Product>;
  /** fetch aggregated fields from the table: "smart_waste.delivery_service_product" */
  smart_waste_delivery_service_product_aggregate: Smart_Waste_Delivery_Service_Product_Aggregate;
  /** fetch data from the table: "smart_waste.delivery_service_product" using primary key columns */
  smart_waste_delivery_service_product_by_pk?: Maybe<Smart_Waste_Delivery_Service_Product>;
  /** fetch data from the table in a streaming manner: "smart_waste.delivery_service_product" */
  smart_waste_delivery_service_product_stream: Array<Smart_Waste_Delivery_Service_Product>;
  /** fetch data from the table in a streaming manner: "smart_waste.delivery_service" */
  smart_waste_delivery_service_stream: Array<Smart_Waste_Delivery_Service>;
  /** fetch data from the table: "smart_waste.delivery_type" */
  smart_waste_delivery_type: Array<Smart_Waste_Delivery_Type>;
  /** fetch aggregated fields from the table: "smart_waste.delivery_type" */
  smart_waste_delivery_type_aggregate: Smart_Waste_Delivery_Type_Aggregate;
  /** fetch data from the table: "smart_waste.delivery_type" using primary key columns */
  smart_waste_delivery_type_by_pk?: Maybe<Smart_Waste_Delivery_Type>;
  /** fetch data from the table in a streaming manner: "smart_waste.delivery_type" */
  smart_waste_delivery_type_stream: Array<Smart_Waste_Delivery_Type>;
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
  /** fetch data from the table: "smart_waste.transaction_waste" */
  smart_waste_transaction_waste: Array<Smart_Waste_Transaction_Waste>;
  /** fetch aggregated fields from the table: "smart_waste.transaction_waste" */
  smart_waste_transaction_waste_aggregate: Smart_Waste_Transaction_Waste_Aggregate;
  /** fetch data from the table: "smart_waste.transaction_waste" using primary key columns */
  smart_waste_transaction_waste_by_pk?: Maybe<Smart_Waste_Transaction_Waste>;
  /** fetch data from the table in a streaming manner: "smart_waste.transaction_waste" */
  smart_waste_transaction_waste_stream: Array<Smart_Waste_Transaction_Waste>;
  /** fetch data from the table: "smart_waste.transaction_waste_type" */
  smart_waste_transaction_waste_type: Array<Smart_Waste_Transaction_Waste_Type>;
  /** fetch aggregated fields from the table: "smart_waste.transaction_waste_type" */
  smart_waste_transaction_waste_type_aggregate: Smart_Waste_Transaction_Waste_Type_Aggregate;
  /** fetch data from the table: "smart_waste.transaction_waste_type" using primary key columns */
  smart_waste_transaction_waste_type_by_pk?: Maybe<Smart_Waste_Transaction_Waste_Type>;
  /** fetch data from the table in a streaming manner: "smart_waste.transaction_waste_type" */
  smart_waste_transaction_waste_type_stream: Array<Smart_Waste_Transaction_Waste_Type>;
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


export type Subscription_RootSmart_Waste_Delivery_ServiceArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Delivery_Service_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Delivery_Service_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSmart_Waste_Delivery_Service_ProductArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Delivery_Service_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Service_Product_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Delivery_Service_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSmart_Waste_Delivery_Service_Product_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Smart_Waste_Delivery_Service_Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Product_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Delivery_Service_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Smart_Waste_Delivery_Service_Stream_Cursor_Input>>;
  where?: InputMaybe<Smart_Waste_Delivery_Service_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Delivery_TypeArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Type_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Delivery_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Delivery_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Delivery_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Delivery_Type_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Delivery_Type_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSmart_Waste_Delivery_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Smart_Waste_Delivery_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Smart_Waste_Delivery_Type_Bool_Exp>;
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


export type Subscription_RootSmart_Waste_Transaction_WasteArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Order_By>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Transaction_Waste_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Order_By>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Transaction_Waste_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSmart_Waste_Transaction_Waste_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Smart_Waste_Transaction_Waste_Stream_Cursor_Input>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Transaction_Waste_TypeArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Transaction_Waste_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smart_Waste_Transaction_Waste_Type_Order_By>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Bool_Exp>;
};


export type Subscription_RootSmart_Waste_Transaction_Waste_Type_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSmart_Waste_Transaction_Waste_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Smart_Waste_Transaction_Waste_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Smart_Waste_Transaction_Waste_Type_Bool_Exp>;
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

export type GetAllDeliveryServiceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDeliveryServiceQuery = { __typename?: 'query_root', smart_waste_delivery_service: Array<{ __typename?: 'smart_waste_delivery_service', delivery_name: string, id: any, logo_uri?: string | null, delivery_service_delivery_type: { __typename?: 'smart_waste_delivery_type', id: number, type_name: string } }> };

export type GetDeliveryServiceByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetDeliveryServiceByIdQuery = { __typename?: 'query_root', smart_waste_delivery_service: Array<{ __typename?: 'smart_waste_delivery_service', id: any, logo_uri?: string | null, delivery_name: string, delivery_type_id: number, delivery_service_delivery_service_products: Array<{ __typename?: 'smart_waste_delivery_service_product', id: any, service_name: string, price_perkilo: number, estimate_day: string }> }> };

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

export type AddNewTransactionMutationVariables = Exact<{
  delivery_product_id: Scalars['uuid']['input'];
  delivery_service_id: Scalars['uuid']['input'];
  delivery_total_cost: Scalars['Int']['input'];
  detail_address: Scalars['String']['input'];
  detail_waste: Scalars['String']['input'];
  image_uri: Scalars['String']['input'];
  mitra_id: Scalars['uuid']['input'];
  pickup_date?: InputMaybe<Scalars['date']['input']>;
  user_address: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
  user_lat: Scalars['float8']['input'];
  user_long: Scalars['float8']['input'];
  user_name: Scalars['String']['input'];
  waste_weight: Scalars['Int']['input'];
  package_code: Scalars['String']['input'];
}>;


export type AddNewTransactionMutation = { __typename?: 'mutation_root', insert_smart_waste_transaction_waste_one?: { __typename?: 'smart_waste_transaction_waste', id: any } | null };

export type InsertDetailTransactionWasteTypeMutationVariables = Exact<{
  objects: Array<Smart_Waste_Transaction_Waste_Type_Insert_Input> | Smart_Waste_Transaction_Waste_Type_Insert_Input;
}>;


export type InsertDetailTransactionWasteTypeMutation = { __typename?: 'mutation_root', insert_smart_waste_transaction_waste_type?: { __typename?: 'smart_waste_transaction_waste_type_mutation_response', affected_rows: number } | null };

export type GetTransactionByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetTransactionByIdQuery = { __typename?: 'query_root', smart_waste_transaction_waste_by_pk?: { __typename?: 'smart_waste_transaction_waste', id: any, detail_waste: string, detail_address: string, delivery_total_cost: number, delivery_service_id: any, delivery_product_id: any, image_uri: string, mitra_id: any, package_code: string, pickup_date?: any | null, status: string, transaction_date: any, user_address: string, user_id: string, user_lat: any, user_long: any, user_name: string, waste_weight: number, transaction_waste_delivery_service: { __typename?: 'smart_waste_delivery_service', delivery_name: string, delivery_type_id: number, id: any, logo_uri?: string | null }, transaction_waste_delivery_service_product: { __typename?: 'smart_waste_delivery_service_product', delivery_service_id: any, estimate_day: string, id: any, price_perkilo: number, service_name: string }, transaction_waste_mitra: { __typename?: 'smart_waste_mitra', address: string, closeTime: any, id: any, lat: any, long: any, name: string, openTime: any, phoneNumber: string }, transaction_waste_transaction_waste_types: Array<{ __typename?: 'smart_waste_transaction_waste_type', id: any, transaction_waste_id: any, waste_type_id: number }> } | null };

export type GetTransactionByUserIdSubscriptionVariables = Exact<{
  user_id: Scalars['String']['input'];
}>;


export type GetTransactionByUserIdSubscription = { __typename?: 'subscription_root', smart_waste_transaction_waste: Array<{ __typename?: 'smart_waste_transaction_waste', id: any, user_id: string, user_name: string, waste_weight: number, transaction_date: any, status: string, package_code: string, transaction_waste_mitra: { __typename?: 'smart_waste_mitra', id: any, name: string }, transaction_waste_delivery_service: { __typename?: 'smart_waste_delivery_service', delivery_name: string, id: any, logo_uri?: string | null } }> };

export type GetAllWastetypeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWastetypeQuery = { __typename?: 'query_root', smart_waste_waste_type: Array<{ __typename?: 'smart_waste_waste_type', id: number, name: string }> };


export const GetAllDeliveryServiceDocument = gql`
    query GetAllDeliveryService {
  smart_waste_delivery_service {
    delivery_name
    id
    logo_uri
    delivery_service_delivery_type {
      id
      type_name
    }
  }
}
    ` as unknown as DocumentNode<GetAllDeliveryServiceQuery, GetAllDeliveryServiceQueryVariables>;
export const GetDeliveryServiceByIdDocument = gql`
    query GetDeliveryServiceById($id: uuid!) {
  smart_waste_delivery_service(where: {id: {_eq: $id}}) {
    id
    logo_uri
    delivery_name
    delivery_type_id
    delivery_service_delivery_service_products(order_by: {price_perkilo: asc}) {
      id
      service_name
      price_perkilo
      estimate_day
    }
  }
}
    ` as unknown as DocumentNode<GetDeliveryServiceByIdQuery, GetDeliveryServiceByIdQueryVariables>;
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
export const AddNewTransactionDocument = gql`
    mutation AddNewTransaction($delivery_product_id: uuid!, $delivery_service_id: uuid!, $delivery_total_cost: Int!, $detail_address: String!, $detail_waste: String!, $image_uri: String!, $mitra_id: uuid!, $pickup_date: date = "", $user_address: String!, $user_id: String!, $user_lat: float8!, $user_long: float8!, $user_name: String!, $waste_weight: Int!, $package_code: String!) {
  insert_smart_waste_transaction_waste_one(
    object: {delivery_product_id: $delivery_product_id, delivery_service_id: $delivery_service_id, delivery_total_cost: $delivery_total_cost, detail_address: $detail_address, detail_waste: $detail_waste, image_uri: $image_uri, mitra_id: $mitra_id, pickup_date: $pickup_date, user_address: $user_address, user_id: $user_id, user_lat: $user_lat, user_long: $user_long, user_name: $user_name, waste_weight: $waste_weight, package_code: $package_code}
  ) {
    id
  }
}
    ` as unknown as DocumentNode<AddNewTransactionMutation, AddNewTransactionMutationVariables>;
export const InsertDetailTransactionWasteTypeDocument = gql`
    mutation InsertDetailTransactionWasteType($objects: [smart_waste_transaction_waste_type_insert_input!]!) {
  insert_smart_waste_transaction_waste_type(objects: $objects) {
    affected_rows
  }
}
    ` as unknown as DocumentNode<InsertDetailTransactionWasteTypeMutation, InsertDetailTransactionWasteTypeMutationVariables>;
export const GetTransactionByIdDocument = gql`
    query GetTransactionById($id: uuid!) {
  smart_waste_transaction_waste_by_pk(id: $id) {
    id
    detail_waste
    detail_address
    delivery_total_cost
    delivery_service_id
    delivery_product_id
    image_uri
    mitra_id
    package_code
    pickup_date
    status
    transaction_date
    user_address
    user_id
    user_lat
    user_long
    user_name
    waste_weight
    transaction_waste_delivery_service {
      delivery_name
      delivery_type_id
      id
      logo_uri
    }
    transaction_waste_delivery_service_product {
      delivery_service_id
      estimate_day
      id
      price_perkilo
      service_name
    }
    transaction_waste_mitra {
      address
      closeTime
      id
      lat
      long
      name
      openTime
      phoneNumber
    }
    transaction_waste_transaction_waste_types {
      id
      transaction_waste_id
      waste_type_id
    }
  }
}
    ` as unknown as DocumentNode<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>;
export const GetTransactionByUserIdDocument = gql`
    subscription GetTransactionByUserId($user_id: String!) {
  smart_waste_transaction_waste(where: {user_id: {_eq: $user_id}}) {
    id
    user_id
    user_name
    waste_weight
    transaction_date
    status
    package_code
    transaction_waste_mitra {
      id
      name
    }
    transaction_waste_delivery_service {
      delivery_name
      id
      logo_uri
    }
  }
}
    ` as unknown as DocumentNode<GetTransactionByUserIdSubscription, GetTransactionByUserIdSubscriptionVariables>;
export const GetAllWastetypeDocument = gql`
    query GetAllWastetype {
  smart_waste_waste_type {
    id
    name
  }
}
    ` as unknown as DocumentNode<GetAllWastetypeQuery, GetAllWastetypeQueryVariables>;