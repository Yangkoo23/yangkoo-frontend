import {
  CountryFragmentFragment,
  RegionFragmentFragment,
} from "@/shared/graphql/graphql";

export type Country = NonNullable<CountryFragmentFragment>;
export type Region = NonNullable<RegionFragmentFragment>;
