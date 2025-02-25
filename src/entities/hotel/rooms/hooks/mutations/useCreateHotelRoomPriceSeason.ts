import { useMutation } from "@tanstack/react-query";
import {
  CreateHotelRoomPriceSeason,
  CreateHotelRoomPriceSeasonMutation,
} from "@/shared/graphql/graphql";
import { createHotelRoomPriceSeasonMutation } from "../../schema/mutations/createHotelRoomPriceSeason";
import { useRequestAPI } from "@/shared/utils/request";
import { HotelRoomPriceSeason } from "../../types";

export function useCreateHotelRoomPriceSeason() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (input: CreateHotelRoomPriceSeason) => {
      const res = await requestAPI<CreateHotelRoomPriceSeasonMutation>(
        createHotelRoomPriceSeasonMutation,
        {
          input,
        }
      );
      return res;
    },
  });

  const createHotelRoomPriceSeason = (input: CreateHotelRoomPriceSeason) => {
    const response = mutation.mutate(input);
    return response;
  };

  const createHotelRoomPriceSeasonAsync = async (
    input: CreateHotelRoomPriceSeason
  ) => {
    const response = await mutation.mutateAsync(input);
    return response.createHotelRoomPriceSeason as HotelRoomPriceSeason;
  };

  return {
    createHotelRoomPriceSeason,
    createHotelRoomPriceSeasonAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
