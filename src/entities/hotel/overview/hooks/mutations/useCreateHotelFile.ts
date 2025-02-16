import { useMutation } from "@tanstack/react-query";
import { CreateFile, CreateFileMutation } from "@/shared/graphql/graphql";
import { createHotelFileMutation } from "../../schema/mutations/createHotelFile";
import { useRequestAPI } from "@/shared/utils/request";

export function useCreateHotelFile() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (input: CreateFile) => {
      const res = await requestAPI<CreateFileMutation>(
        createHotelFileMutation,
        {
          input,
        }
      );

      return res;
    },
  });

  const createHotelFile = (input: CreateFile) => {
    const response = mutation.mutate(input);
    return response;
  };

  const createHotelFileAsync = async (input: CreateFile) => {
    const response = await mutation.mutateAsync(input);
    return response.createFile;
  };

  return {
    createHotelFile,
    createHotelFileAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
