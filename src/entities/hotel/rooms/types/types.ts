import {
  HotelRoomFragmentFragment,
  PriceTypeEnum,
  HotelRoomInclusionFragmentFragment,
} from "@/shared/graphql/graphql";
export { PriceTypeEnum } from "@/shared/graphql/graphql";

export type HotelRoom = Omit<
  HotelRoomFragmentFragment,
  "__fragmentName" | "$fragmentRefs" | "__typename" | " $fragmentName"
>;

export type HotelRoomInclusion = Omit<
  HotelRoomInclusionFragmentFragment,
  "__fragmentName" | "$fragmentRefs" | "__typename" | " $fragmentName"
>;
export type Images = {
  id: string;
  url: string;
};
