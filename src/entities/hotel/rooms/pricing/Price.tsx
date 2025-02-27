"use client";

import React, { Suspense } from "react";
import { Loader } from "@/shared/ui/Loader";
import {
  useHotelRoomPriceByHotelRoomPriceSeasonId,
  useUpdateHotelRoomPrice,
} from "../hooks";
import UpdateInput from "@/shared/ui/UpdateInput";

type Props = {
  hotelRoomPriceSeasonId: string;
};
export const Price = ({ hotelRoomPriceSeasonId }: Props) => {
  const { price } = useHotelRoomPriceByHotelRoomPriceSeasonId(
    hotelRoomPriceSeasonId
  );
  const { updateHotelRoomPrice } = useUpdateHotelRoomPrice();

  const updatePrice = (prices: string) => {
    updateHotelRoomPrice({
      id: price[0].id,
      price: Number(prices),
    });
  };

  return (
    <Suspense fallback={<Loader />}>
      {price.map((price) => (
        <UpdateInput
          onChange={updatePrice}
          key={price.id}
          value={String(price.price)}
          name="price"
          placeholder="Price"
          type="number"
          className=""
        />
      ))}
    </Suspense>
  );
};
