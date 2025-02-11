import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { regionsByCountryIdQuery } from "../../schema/queries/regionsByCountryId";
import { RegionsByCountryIdQuery } from "@/shared/graphql/graphql";
import { Region } from "../../types/types";
import { useRegionsStore } from "../../store/useRegion";
export function useRegionsByCountryId(countryId: string) {
  const requestAPI = useRequestAPI();
  const { setRegions } = useRegionsStore();
  const { data, isLoading, error } = useSuspenseQuery<
    RegionsByCountryIdQuery,
    Error
  >({
    queryKey: ["regionsByCountryId", countryId],
    queryFn: async () => {
      const response = await requestAPI<RegionsByCountryIdQuery>(
        regionsByCountryIdQuery,
        {
          countryId,
        }
      );
      setRegions(response.regionsByCountryId as Region[]);
      return response;
    },
  });
  return {
    regionsByCountryId: data?.regionsByCountryId as Region[],
    isLoading,
    error,
  };
}
