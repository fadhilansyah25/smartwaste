import {gql} from '@apollo/client';

export const FETCH_MITRA = gql`
  query getAllMitra(
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
    ) {
      id
      name
      address
      lat
      long
      distance
      closeTime
      openTime
      phoneNumber
    }
  }
`;
