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
    "\n  fragment CityFragment on City {\n    id\n    city\n    city_description\n    region_id\n  }\n": typeof types.CityFragmentFragmentDoc,
    "\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n": typeof types.CountryFragmentFragmentDoc,
    "\n  fragment FileFragment on File {\n    caption\n    mimetype\n    file_key\n    file_type\n  }\n": typeof types.FileFragmentFragmentDoc,
    "\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n    latitude\n    longitude\n    Location {\n      id\n      location_name\n      location_description\n      City {\n        ...CityFragment\n        Region {\n          ...RegionFragment\n          Country {\n            ...CountryFragment\n          }\n        }\n      }\n    }\n  }\n": typeof types.HotelFragmentFragmentDoc,
    "\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n": typeof types.RegionFragmentFragmentDoc,
    "\n  mutation CreateFile($input: CreateFile!) {\n    createFile(input: $input) {\n      ...FileFragment\n    }\n  }\n": typeof types.CreateFileDocument,
    "\n  mutation CreateLocation($input: CreateLocation!) {\n    createLocation(input: $input) {\n      id\n      location_name\n      location_description\n      city_id\n    }\n  }\n": typeof types.CreateLocationDocument,
    "\n  mutation UpdateHotel($input: UpdateHotel!) {\n    updateHotel(input: $input) {\n      id\n    }\n  }\n": typeof types.UpdateHotelDocument,
    "\n  mutation UpdateLocation($input: UpdateLocation!) {\n    updateLocation(input: $input) {\n      id\n    }\n  }\n": typeof types.UpdateLocationDocument,
    "\n  query CitiesByRegionId($regionId: String!) {\n    citiesByRegionId(regionId: $regionId) {\n      ...CityFragment\n    }\n  }\n": typeof types.CitiesByRegionIdDocument,
    "\n  query Countries {\n    countries {\n      edges {\n        node {\n          ...CountryFragment\n        }\n      }\n    }\n  }\n": typeof types.CountriesDocument,
    "\n  query Hotel($id: ID!) {\n    hotel(id: $id) {\n      ...HotelFragment\n    }\n  }\n": typeof types.HotelDocument,
    "\n  query FilesByHotelId($hotelId: String!) {\n    filesByHotelId(hotelId: $hotelId) {\n      Urls\n    }\n  }\n": typeof types.FilesByHotelIdDocument,
    "\n  query RegionsByCountryId($countryId: String!) {\n    regionsByCountryId(countryId: $countryId) {\n      ...RegionFragment\n    }\n  }\n": typeof types.RegionsByCountryIdDocument,
};
const documents: Documents = {
    "\n  fragment CityFragment on City {\n    id\n    city\n    city_description\n    region_id\n  }\n": types.CityFragmentFragmentDoc,
    "\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n": types.CountryFragmentFragmentDoc,
    "\n  fragment FileFragment on File {\n    caption\n    mimetype\n    file_key\n    file_type\n  }\n": types.FileFragmentFragmentDoc,
    "\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n    latitude\n    longitude\n    Location {\n      id\n      location_name\n      location_description\n      City {\n        ...CityFragment\n        Region {\n          ...RegionFragment\n          Country {\n            ...CountryFragment\n          }\n        }\n      }\n    }\n  }\n": types.HotelFragmentFragmentDoc,
    "\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n": types.RegionFragmentFragmentDoc,
    "\n  mutation CreateFile($input: CreateFile!) {\n    createFile(input: $input) {\n      ...FileFragment\n    }\n  }\n": types.CreateFileDocument,
    "\n  mutation CreateLocation($input: CreateLocation!) {\n    createLocation(input: $input) {\n      id\n      location_name\n      location_description\n      city_id\n    }\n  }\n": types.CreateLocationDocument,
    "\n  mutation UpdateHotel($input: UpdateHotel!) {\n    updateHotel(input: $input) {\n      id\n    }\n  }\n": types.UpdateHotelDocument,
    "\n  mutation UpdateLocation($input: UpdateLocation!) {\n    updateLocation(input: $input) {\n      id\n    }\n  }\n": types.UpdateLocationDocument,
    "\n  query CitiesByRegionId($regionId: String!) {\n    citiesByRegionId(regionId: $regionId) {\n      ...CityFragment\n    }\n  }\n": types.CitiesByRegionIdDocument,
    "\n  query Countries {\n    countries {\n      edges {\n        node {\n          ...CountryFragment\n        }\n      }\n    }\n  }\n": types.CountriesDocument,
    "\n  query Hotel($id: ID!) {\n    hotel(id: $id) {\n      ...HotelFragment\n    }\n  }\n": types.HotelDocument,
    "\n  query FilesByHotelId($hotelId: String!) {\n    filesByHotelId(hotelId: $hotelId) {\n      Urls\n    }\n  }\n": types.FilesByHotelIdDocument,
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
export function graphql(source: "\n  fragment CityFragment on City {\n    id\n    city\n    city_description\n    region_id\n  }\n"): (typeof documents)["\n  fragment CityFragment on City {\n    id\n    city\n    city_description\n    region_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n"): (typeof documents)["\n  fragment CountryFragment on Country {\n    id\n    country\n    country_description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FileFragment on File {\n    caption\n    mimetype\n    file_key\n    file_type\n  }\n"): (typeof documents)["\n  fragment FileFragment on File {\n    caption\n    mimetype\n    file_key\n    file_type\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n    latitude\n    longitude\n    Location {\n      id\n      location_name\n      location_description\n      City {\n        ...CityFragment\n        Region {\n          ...RegionFragment\n          Country {\n            ...CountryFragment\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment HotelFragment on Hotel {\n    id\n    hotel_name\n    hotel_description\n    start_category\n    location_id\n    latitude\n    longitude\n    Location {\n      id\n      location_name\n      location_description\n      City {\n        ...CityFragment\n        Region {\n          ...RegionFragment\n          Country {\n            ...CountryFragment\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n"): (typeof documents)["\n  fragment RegionFragment on Region {\n    id\n    region\n    region_description\n    country_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateFile($input: CreateFile!) {\n    createFile(input: $input) {\n      ...FileFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFile($input: CreateFile!) {\n    createFile(input: $input) {\n      ...FileFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateLocation($input: CreateLocation!) {\n    createLocation(input: $input) {\n      id\n      location_name\n      location_description\n      city_id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateLocation($input: CreateLocation!) {\n    createLocation(input: $input) {\n      id\n      location_name\n      location_description\n      city_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateHotel($input: UpdateHotel!) {\n    updateHotel(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateHotel($input: UpdateHotel!) {\n    updateHotel(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateLocation($input: UpdateLocation!) {\n    updateLocation(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateLocation($input: UpdateLocation!) {\n    updateLocation(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CitiesByRegionId($regionId: String!) {\n    citiesByRegionId(regionId: $regionId) {\n      ...CityFragment\n    }\n  }\n"): (typeof documents)["\n  query CitiesByRegionId($regionId: String!) {\n    citiesByRegionId(regionId: $regionId) {\n      ...CityFragment\n    }\n  }\n"];
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
export function graphql(source: "\n  query FilesByHotelId($hotelId: String!) {\n    filesByHotelId(hotelId: $hotelId) {\n      Urls\n    }\n  }\n"): (typeof documents)["\n  query FilesByHotelId($hotelId: String!) {\n    filesByHotelId(hotelId: $hotelId) {\n      Urls\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query RegionsByCountryId($countryId: String!) {\n    regionsByCountryId(countryId: $countryId) {\n      ...RegionFragment\n    }\n  }\n"): (typeof documents)["\n  query RegionsByCountryId($countryId: String!) {\n    regionsByCountryId(countryId: $countryId) {\n      ...RegionFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;