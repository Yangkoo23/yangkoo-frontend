import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { hotelRoomPriceYearsByHotelRoomIdQuery } from "../../schema/queries/hotelRoomPriceYears";
import { HotelRoomPriceYearsByHotelRoomIdQuery } from "@/shared/graphql/graphql";
import { HotelRoomPriceYear } from "../../types";
export function useHotelRoomPriceYearsByHotelRoomId(orgId: string) {
  const requestAPI = useRequestAPI();
  const { data, isLoading, error } = useSuspenseQuery<
    HotelRoomPriceYearsByHotelRoomIdQuery,
    Error
  >({
    queryKey: ["hotelRoomPriceYearsByHotelRoomId", orgId],
    queryFn: async () => {
      const response = await requestAPI<HotelRoomPriceYearsByHotelRoomIdQuery>(
        hotelRoomPriceYearsByHotelRoomIdQuery,
        {
          hotelRoomId: orgId,
        }
      );

      return response;
    },
  });
  return {
    years: data?.hotelRoomPriceYearsByHotelRoomId as HotelRoomPriceYear[],
    isLoading,
    error,
  };
}
