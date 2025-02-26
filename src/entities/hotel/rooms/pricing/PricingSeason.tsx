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
import { usePricingStore } from "../store";
import { Button } from "@/components/ui/button";
import { AddPricingSeasonDialog } from "./AddPricingSeasonDialog";

type Props = {
  hotelRoomPriceYearId: string;
};
export const PricingSeason = ({ hotelRoomPriceYearId }: Props) => {
  const { isLoading } =
    useHotelRoomPriceSeasonsByHotelRoomPriceYearId(hotelRoomPriceYearId);
  const { years } = usePricingStore();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const yearData = years.find((y) => y.id === hotelRoomPriceYearId);
  const storedSeasons = yearData?.seasons ?? [];

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Accordion type="single" collapsible className="w-full ml-4">
          {storedSeasons.map((season) => (
            <React.Fragment key={season.id}>
              <AccordionItem value={`item-${season.id}`}>
                <AccordionTrigger>{season.season_start}</AccordionTrigger>
                <AccordionContent>
                  <Price hotelRoomPriceSeasonId={season.id} />
                </AccordionContent>
              </AccordionItem>
            </React.Fragment>
          ))}
          <Button
            variant={"ghost"}
            className="mt-2"
            onClick={() => setIsModalOpen(true)}
          >
            Add Season
          </Button>
        </Accordion>
      </Suspense>
      <AddPricingSeasonDialog
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        hotelRoomPriceYearId={hotelRoomPriceYearId}
      />
    </>
  );
};
