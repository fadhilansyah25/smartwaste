import {
  GetAllMitraQuery,
  GetAllMitraQueryVariables,
} from '@src/generated/graphql';
import createApolloClient from './apollo';
import {FETCH_MITRA} from './queries.gql';
import {ensureError} from '../utils/serviceUtils';

class Hasura_Mitra implements MitraModels.MitraRepository {
  #apolloClient = createApolloClient();

  async fetchMitraWithDistance({
    lat,
    long,
    minDistance = 20,
  }: MitraModels.MitraWithDistanceParams) {
    try {
      const result = await this.#apolloClient.query<
        GetAllMitraQuery,
        GetAllMitraQueryVariables
      >({
        query: FETCH_MITRA,
        variables: {
          distance_kms: minDistance,
          latitude: lat,
          longitude: long,
        },
      });
      return result.data
        .search_mitra_near_user as MitraModels.MitraWithDistance[];
    } catch (err) {
      const error = ensureError(err);
      throw error;
    }
  }
}

export default Hasura_Mitra;
