import { useSuspenseQuery } from "@tanstack/react-query";
import { useRequestAPI } from "@/shared/utils/request";
import { imagesByHotelIdQuery } from "../../schema/queries/imagesByHotelId";
import { FilesByHotelIdQuery } from "@/shared/graphql/graphql";
import { useHotelImagesStore } from "../../store";
export function useImagesByHotelId(orgId: string) {
  const requestAPI = useRequestAPI();
  const { setHotelImages } = useHotelImagesStore();
  const { data, isLoading, error } = useSuspenseQuery<
    FilesByHotelIdQuery,
    Error
  >({
    queryKey: ["imagesByHotelId", orgId],
    queryFn: async () => {
      const response = await requestAPI<FilesByHotelIdQuery>(
        imagesByHotelIdQuery,
        {
          hotelId: orgId,
        }
      );
      setHotelImages(response.filesByHotelId.Urls as string[]);
      return response;
    },
  });
  return {
    urls: data?.filesByHotelId.Urls as string[],
    isLoading,
    error,
  };
}
