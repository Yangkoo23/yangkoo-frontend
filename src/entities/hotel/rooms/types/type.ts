import { HotelRoomFragmentFragment } from "@/shared/graphql/graphql";

export type HotelRoom = Omit<
  HotelRoomFragmentFragment,
  "__fragmentName" | "$fragmentRefs" | "__typename" | " $fragmentName"
>;
