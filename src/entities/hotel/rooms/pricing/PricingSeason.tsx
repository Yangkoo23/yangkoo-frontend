"use client";

import React, { Suspense } from "react";
import { Loader } from "@/shared/ui/Loader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useHotelRoomPriceSeasonsByHotelRoomPriceYearId } from "../hooks";
import { Price } from "./Price";

type Props = {
  hotelRoomPriceYearId: string;
};
export const PricingSeason = ({ hotelRoomPriceYearId }: Props) => {
  const { seasons } =
    useHotelRoomPriceSeasonsByHotelRoomPriceYearId(hotelRoomPriceYearId);

  return (
    <Suspense fallback={<Loader />}>
      <Accordion type="single" collapsible className="w-full ml-4">
        {seasons.map((season) => (
          <AccordionItem key={season.id} value={`item-${season.id}`}>
            <AccordionTrigger>{season.season_start}</AccordionTrigger>
            <AccordionContent>
              <Price hotelRoomPriceSeasonId={season.id} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Suspense>
  );
};
