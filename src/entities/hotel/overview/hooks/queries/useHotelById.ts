import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { hotelByIdQuery } from "../../schema/queries/hotelById";
import { HotelFragmentFragment, HotelQuery } from "@/shared/graphql/graphql";
export function useHotelById(orgId: string) {
  const requestAPI = useRequestAPI();

  const { data, isLoading, error } = useSuspenseQuery<HotelQuery, Error>({
    queryKey: ["hotelById", orgId],
    queryFn: async () => {
      const response = await requestAPI<HotelQuery>(hotelByIdQuery, {
        id: orgId,
      });
      return response;
    },
  });
  return {
    hotel: data?.hotel as HotelFragmentFragment,
    isLoading,
    error,
  };
}
