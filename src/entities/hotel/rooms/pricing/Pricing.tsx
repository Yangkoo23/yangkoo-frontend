"use client";

import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { Loader } from "@/shared/ui/Loader";
import { useParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AddPricingDialog } from "./AddPricingDialog";
import {
  useCreateHotelRoomPrice,
  useCreateHotelRoomPriceSeason,
  useCreateHotelRoomPriceYear,
} from "../hooks";

export const Pricing = () => {
  const params = useParams();
  const roomId = String(params?.roomId);
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || "";
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { createHotelRoomPriceYearAsync } = useCreateHotelRoomPriceYear();
  const { createHotelRoomPriceSeasonAsync } = useCreateHotelRoomPriceSeason();
  const { createHotelRoomPriceAsync } = useCreateHotelRoomPrice();

  const handleAddPricing = async (
    year: number,
    season: [string, string],
    price: number
  ) => {
    const resYear = await createHotelRoomPriceYearAsync({
      room_price_year: year,
      hotel_room_id: roomId,
    });

    const resSeason = await createHotelRoomPriceSeasonAsync({
      season_start: season[0],
      season_end: season[1],
      hotel_room_price_year_id: resYear.id,
    });
    await createHotelRoomPriceAsync({
      hotel_room_price_season_id: resSeason.id,
      price,
    });
  };

  if (!orgLoaded) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Room Pricing</h1>
      <Button onClick={() => setIsModalOpen(true)}>Add Pricing</Button>
      <Accordion type="single" collapsible className="w-2/5">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <AddPricingDialog
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleAddPricing={handleAddPricing}
      />
    </div>
  );
};
