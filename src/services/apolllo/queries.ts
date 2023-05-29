import {gql} from '@apollo/client';

export const FETCH_MITRA = gql`
  query {
    smart_waste_mitra {
      address
      close_time
      id
      name
      open_time
      phone
      mitra_coordinate {
        lat
        long
      }
    }
  }
`;
