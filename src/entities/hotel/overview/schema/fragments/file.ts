import { graphql } from "@/shared/graphql";

graphql(`
  fragment FileFragment on File {
    caption
    mimetype
    file_key
    file_type
  }
`);
