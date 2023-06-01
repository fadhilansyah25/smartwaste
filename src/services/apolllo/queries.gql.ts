import {gql} from '@apollo/client';

export const FETCH_MITRA = gql`
  query getAllMitraWithDistance(
    $distance_kms: Int!
    $latitude: float8!
    $longitude: float8!
  ) {
    search_mitra_near_user(
      args: {
        distance_kms: $distance_kms
        latitude: $latitude
        longitude: $longitude
      }
      order_by: {distance: asc}
    ) {
      id
      name
      address
      phoneNumber
      openTime
      closeTime
      long
      lat
      distance
    }
  }
`;
