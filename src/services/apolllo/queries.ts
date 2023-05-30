import {gql} from '@apollo/client';

export const FETCH_MITRA = gql`
  query getAllMitra {
    smart_waste_mitra {
      id
      name
      address
      closeTime
      openTime
      phoneNumber
      mitra_coordinate {
        lat
        long
      }
    }
  }
`;
