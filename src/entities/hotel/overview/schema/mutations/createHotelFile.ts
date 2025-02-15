import { graphql } from "@/shared/graphql";

export const createHotelFileMutation = graphql(`
  mutation CreateFile($input: CreateFile!) {
    createFile(input: $input) {
      ...FileFragment
    }
  }
`);
