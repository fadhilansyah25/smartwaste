import createApolloClient from '@src/services/apolllo/apollo';
import {ensureError} from '@src/services/utils/serviceUtils';
import {
  GetAllMitraWithDistanceQuery,
  GetAllMitraWithDistanceQueryVariables,
} from '@src/services/generated/graphql';
import {GetAllMitraWithDistance} from './mitra.graphql';

class HasuraMitra implements MitraModels.MitraRepository {
  #apolloClient = createApolloClient();

  async fetchMitraWithDistance({
    lat,
    long,
    minDistance = 20,
  }: MitraModels.MitraWithDistanceParams) {
    try {
      const result = await this.#apolloClient.query<
        GetAllMitraWithDistanceQuery,
        GetAllMitraWithDistanceQueryVariables
      >({
        query: GetAllMitraWithDistance,
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

export default HasuraMitra;
