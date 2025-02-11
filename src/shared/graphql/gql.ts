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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n": typeof types.CountryFragmentFragmentDoc,
    "\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n  }\n": typeof types.HotelFragmentFragmentDoc,
    "\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n": typeof types.RegionFragmentFragmentDoc,
    "\n  query Countries {\n    countries {\n      edges {\n        node {\n          ...CountryFragment\n        }\n      }\n    }\n  }\n": typeof types.CountriesDocument,
    "\n  query Hotel($id: ID!) {\n    hotel(id: $id) {\n      ...HotelFragment\n    }\n  }\n": typeof types.HotelDocument,
    "\n  query RegionsByCountryId($countryId: String!) {\n    regionsByCountryId(countryId: $countryId) {\n      ...RegionFragment\n    }\n  }\n": typeof types.RegionsByCountryIdDocument,
};
const documents: Documents = {
    "\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n": types.CountryFragmentFragmentDoc,
    "\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n  }\n": types.HotelFragmentFragmentDoc,
    "\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n": types.RegionFragmentFragmentDoc,
    "\n  query Countries {\n    countries {\n      edges {\n        node {\n          ...CountryFragment\n        }\n      }\n    }\n  }\n": types.CountriesDocument,
    "\n  query Hotel($id: ID!) {\n    hotel(id: $id) {\n      ...HotelFragment\n    }\n  }\n": types.HotelDocument,
    "\n  query RegionsByCountryId($countryId: String!) {\n    regionsByCountryId(countryId: $countryId) {\n      ...RegionFragment\n    }\n  }\n": types.RegionsByCountryIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n"): (typeof documents)["\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n  }\n"): (typeof documents)["\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n"): (typeof documents)["\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Countries {\n    countries {\n      edges {\n        node {\n          ...CountryFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Countries {\n    countries {\n      edges {\n        node {\n          ...CountryFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Hotel($id: ID!) {\n    hotel(id: $id) {\n      ...HotelFragment\n    }\n  }\n"): (typeof documents)["\n  query Hotel($id: ID!) {\n    hotel(id: $id) {\n      ...HotelFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query RegionsByCountryId($countryId: String!) {\n    regionsByCountryId(countryId: $countryId) {\n      ...RegionFragment\n    }\n  }\n"): (typeof documents)["\n  query RegionsByCountryId($countryId: String!) {\n    regionsByCountryId(countryId: $countryId) {\n      ...RegionFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;