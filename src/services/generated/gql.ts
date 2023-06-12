/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetAllDeliveryService {\n  smart_waste_delivery_service {\n    delivery_name\n    id\n    logo_uri\n    delivery_service_delivery_type {\n      id\n      type_name\n    }\n  }\n}\n\nquery GetDeliveryServiceById($id: uuid!) {\n  smart_waste_delivery_service(where: {id: {_eq: $id}}) {\n    id\n    logo_uri\n    delivery_name\n    delivery_type_id\n    delivery_service_delivery_service_products(order_by: {price_perkilo: asc}) {\n      id\n      service_name\n      price_perkilo\n      estimate_day\n    }\n  }\n}": types.GetAllDeliveryServiceDocument,
    "query GetAllMitraWithDistance($distance_kms: Int!, $latitude: float8!, $longitude: float8!) {\n  search_mitra_near_user(\n    args: {distance_kms: $distance_kms, latitude: $latitude, longitude: $longitude}\n    order_by: {distance: asc}\n  ) {\n    id\n    name\n    address\n    phoneNumber\n    openTime\n    closeTime\n    long\n    lat\n    distance\n  }\n}\n\nquery GetMitraById($id: uuid!) {\n  smart_waste_mitra(where: {id: {_eq: $id}}) {\n    id\n    lat\n    long\n    name\n    openTime\n    phoneNumber\n    closeTime\n    address\n  }\n}": types.GetAllMitraWithDistanceDocument,
    "mutation AddNewTransaction($delivery_product_id: uuid!, $delivery_service_id: uuid!, $delivery_total_cost: Int!, $detail_address: String!, $detail_waste: String!, $image_uri: String!, $mitra_id: uuid!, $pickup_date: date = \"\", $user_address: String!, $user_id: String!, $user_lat: float8!, $user_long: float8!, $user_name: String!, $waste_weight: Int!, $package_code: String!) {\n  insert_smart_waste_transaction_waste_one(\n    object: {delivery_product_id: $delivery_product_id, delivery_service_id: $delivery_service_id, delivery_total_cost: $delivery_total_cost, detail_address: $detail_address, detail_waste: $detail_waste, image_uri: $image_uri, mitra_id: $mitra_id, pickup_date: $pickup_date, user_address: $user_address, user_id: $user_id, user_lat: $user_lat, user_long: $user_long, user_name: $user_name, waste_weight: $waste_weight, package_code: $package_code}\n  ) {\n    id\n  }\n}\n\nmutation InsertDetailTransactionWasteType($objects: [smart_waste_transaction_waste_type_insert_input!]!) {\n  insert_smart_waste_transaction_waste_type(objects: $objects) {\n    affected_rows\n  }\n}": types.AddNewTransactionDocument,
    "query GetAllWastetype {\n  smart_waste_waste_type {\n    id\n    name\n  }\n}": types.GetAllWastetypeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAllDeliveryService {\n  smart_waste_delivery_service {\n    delivery_name\n    id\n    logo_uri\n    delivery_service_delivery_type {\n      id\n      type_name\n    }\n  }\n}\n\nquery GetDeliveryServiceById($id: uuid!) {\n  smart_waste_delivery_service(where: {id: {_eq: $id}}) {\n    id\n    logo_uri\n    delivery_name\n    delivery_type_id\n    delivery_service_delivery_service_products(order_by: {price_perkilo: asc}) {\n      id\n      service_name\n      price_perkilo\n      estimate_day\n    }\n  }\n}"): (typeof documents)["query GetAllDeliveryService {\n  smart_waste_delivery_service {\n    delivery_name\n    id\n    logo_uri\n    delivery_service_delivery_type {\n      id\n      type_name\n    }\n  }\n}\n\nquery GetDeliveryServiceById($id: uuid!) {\n  smart_waste_delivery_service(where: {id: {_eq: $id}}) {\n    id\n    logo_uri\n    delivery_name\n    delivery_type_id\n    delivery_service_delivery_service_products(order_by: {price_perkilo: asc}) {\n      id\n      service_name\n      price_perkilo\n      estimate_day\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAllMitraWithDistance($distance_kms: Int!, $latitude: float8!, $longitude: float8!) {\n  search_mitra_near_user(\n    args: {distance_kms: $distance_kms, latitude: $latitude, longitude: $longitude}\n    order_by: {distance: asc}\n  ) {\n    id\n    name\n    address\n    phoneNumber\n    openTime\n    closeTime\n    long\n    lat\n    distance\n  }\n}\n\nquery GetMitraById($id: uuid!) {\n  smart_waste_mitra(where: {id: {_eq: $id}}) {\n    id\n    lat\n    long\n    name\n    openTime\n    phoneNumber\n    closeTime\n    address\n  }\n}"): (typeof documents)["query GetAllMitraWithDistance($distance_kms: Int!, $latitude: float8!, $longitude: float8!) {\n  search_mitra_near_user(\n    args: {distance_kms: $distance_kms, latitude: $latitude, longitude: $longitude}\n    order_by: {distance: asc}\n  ) {\n    id\n    name\n    address\n    phoneNumber\n    openTime\n    closeTime\n    long\n    lat\n    distance\n  }\n}\n\nquery GetMitraById($id: uuid!) {\n  smart_waste_mitra(where: {id: {_eq: $id}}) {\n    id\n    lat\n    long\n    name\n    openTime\n    phoneNumber\n    closeTime\n    address\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation AddNewTransaction($delivery_product_id: uuid!, $delivery_service_id: uuid!, $delivery_total_cost: Int!, $detail_address: String!, $detail_waste: String!, $image_uri: String!, $mitra_id: uuid!, $pickup_date: date = \"\", $user_address: String!, $user_id: String!, $user_lat: float8!, $user_long: float8!, $user_name: String!, $waste_weight: Int!, $package_code: String!) {\n  insert_smart_waste_transaction_waste_one(\n    object: {delivery_product_id: $delivery_product_id, delivery_service_id: $delivery_service_id, delivery_total_cost: $delivery_total_cost, detail_address: $detail_address, detail_waste: $detail_waste, image_uri: $image_uri, mitra_id: $mitra_id, pickup_date: $pickup_date, user_address: $user_address, user_id: $user_id, user_lat: $user_lat, user_long: $user_long, user_name: $user_name, waste_weight: $waste_weight, package_code: $package_code}\n  ) {\n    id\n  }\n}\n\nmutation InsertDetailTransactionWasteType($objects: [smart_waste_transaction_waste_type_insert_input!]!) {\n  insert_smart_waste_transaction_waste_type(objects: $objects) {\n    affected_rows\n  }\n}"): (typeof documents)["mutation AddNewTransaction($delivery_product_id: uuid!, $delivery_service_id: uuid!, $delivery_total_cost: Int!, $detail_address: String!, $detail_waste: String!, $image_uri: String!, $mitra_id: uuid!, $pickup_date: date = \"\", $user_address: String!, $user_id: String!, $user_lat: float8!, $user_long: float8!, $user_name: String!, $waste_weight: Int!, $package_code: String!) {\n  insert_smart_waste_transaction_waste_one(\n    object: {delivery_product_id: $delivery_product_id, delivery_service_id: $delivery_service_id, delivery_total_cost: $delivery_total_cost, detail_address: $detail_address, detail_waste: $detail_waste, image_uri: $image_uri, mitra_id: $mitra_id, pickup_date: $pickup_date, user_address: $user_address, user_id: $user_id, user_lat: $user_lat, user_long: $user_long, user_name: $user_name, waste_weight: $waste_weight, package_code: $package_code}\n  ) {\n    id\n  }\n}\n\nmutation InsertDetailTransactionWasteType($objects: [smart_waste_transaction_waste_type_insert_input!]!) {\n  insert_smart_waste_transaction_waste_type(objects: $objects) {\n    affected_rows\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAllWastetype {\n  smart_waste_waste_type {\n    id\n    name\n  }\n}"): (typeof documents)["query GetAllWastetype {\n  smart_waste_waste_type {\n    id\n    name\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;