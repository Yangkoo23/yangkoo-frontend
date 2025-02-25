"use client";

import React, { Suspense } from "react";
import { Loader } from "@/shared/ui/Loader";
import { useHotelRoomPriceByHotelRoomPriceSeasonId } from "../hooks";

type Props = {
  hotelRoomPriceSeasonId: string;
};
export const Price = ({ hotelRoomPriceSeasonId }: Props) => {
  const { price } = useHotelRoomPriceByHotelRoomPriceSeasonId(
    hotelRoomPriceSeasonId
  );

  return (
    <Suspense fallback={<Loader />}>
      {price.map((price) => price.price)}
    </Suspense>
  );
};
