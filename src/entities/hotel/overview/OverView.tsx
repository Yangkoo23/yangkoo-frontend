"use client";

import UpdateInput from "@/shared/ui/UpdateInput";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOrganization } from "@clerk/nextjs";
import {
  useHotelById,
  useCountries,
  useRegionsByCountryId,
  useCitiesByRegionId,
  useCreateLocation,
  useUpdateHotel,
} from "./hooks";
import { useRegionsStore, useCitiesStore } from "./store";
import { Loader } from "@/shared/ui/Loader";

export const OverView = () => {
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const { regions } = useRegionsStore();
  const { cities } = useCitiesStore();

  const orgId = organization?.id || "";
  const { hotel } = useHotelById(orgId);
  const { countries } = useCountries();
  const { regionsByCountryId } = useRegionsByCountryId();
  const { citiesByRegionId } = useCitiesByRegionId();
  const { createLocationAsync } = useCreateLocation();
  const { updateHotelAsync } = useUpdateHotel();
  const [locationId, setLocationId] = useState<string | null>(null);

  const onSelectCountryChange = (countryId: string) => {
    regionsByCountryId(countryId);
  };

  const onSelectRegionChange = (regionId: string) => {
    citiesByRegionId(regionId);
  };

  const onSelectCityChange = async (cityId: string) => {
    const id = await createLocationAsync({
      city_id: cityId,
      location_name: "",
    });
    setLocationId(id);
    const hotel = await updateHotelAsync({ id: orgId, location_id: id });
    console.log(hotel);
  };

  if (!orgLoaded) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 border border-red-600 min-h-screen md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Overview</h1>
      <div className="w-full max-w-md space-y-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="hotelName"
            className="text-lg font-medium text-gray-700"
          >
            Hotel Name
          </label>
          <UpdateInput
            id="hotelName"
            name="name"
            value={hotel.hotel_name}
            onChange={(value) => console.log(value)}
            placeholder="Enter hotel name"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="country"
            className="text-lg font-medium text-gray-700"
          >
            Country
          </label>
          <Select onValueChange={onSelectCountryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.id} value={country.id}>
                  {country.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {regions.length > 0 && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="country"
              className="text-lg font-medium text-gray-700"
            >
              Region / State
            </label>
            <Select onValueChange={onSelectRegionChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region.id} value={region.id}>
                    {region.region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {cities.length > 0 && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="country"
              className="text-lg font-medium text-gray-700"
            >
              City / Town
            </label>
            <Select onValueChange={onSelectCityChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.id} value={city.id}>
                    {city.city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {locationId && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="location"
              className="text-lg font-medium text-gray-700"
            >
              Location
            </label>
            <UpdateInput
              id="location"
              name="location"
              value={hotel.hotel_name}
              onChange={(value) => console.log(value)}
              placeholder="Enter Location Name"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        )}
      </div>
    </div>
  );
};
