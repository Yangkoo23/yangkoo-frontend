import { graphql } from "@/shared/graphql";

graphql(`
  fragment HotelFragment on Hotel {
    id
    hotel_name
    hotel_description
    start_category
    location_id
  }
`);
