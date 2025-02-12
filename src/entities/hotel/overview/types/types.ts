import {
  CountryFragmentFragment,
  RegionFragmentFragment,
  CityFragmentFragment,
} from "@/shared/graphql/graphql";

export type Country = NonNullable<CountryFragmentFragment>;
export type Region = NonNullable<RegionFragmentFragment>;
export type City = NonNullable<CityFragmentFragment>;
