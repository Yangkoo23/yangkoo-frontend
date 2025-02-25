import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { hotelRoomPriceSeasonsByHotelRoomPriceYearIdQuery } from "../../schema/queries/hotelRoomPriceSeasons";
import { HotelRoomPriceSeasonsByHotelRoomPriceYearIdQuery } from "@/shared/graphql/graphql";
import { HotelRoomPriceSeason } from "../../types";
export function useHotelRoomPriceSeasonsByHotelRoomPriceYearId(orgId: string) {
  const requestAPI = useRequestAPI();
  const { data, isLoading, error } = useSuspenseQuery<
    HotelRoomPriceSeasonsByHotelRoomPriceYearIdQuery,
    Error
  >({
    queryKey: ["hotelRoomPriceSeasonsByHotelRoomPriceYearId", orgId],
    queryFn: async () => {
      const response =
        await requestAPI<HotelRoomPriceSeasonsByHotelRoomPriceYearIdQuery>(
          hotelRoomPriceSeasonsByHotelRoomPriceYearIdQuery,
          {
            hotelRoomPriceYearId: orgId,
          }
        );

      return response;
    },
  });
  return {
    seasons:
      data?.hotelRoomPriceSeasonsByHotelRoomPriceYearId as HotelRoomPriceSeason[],
    isLoading,
    error,
  };
}
