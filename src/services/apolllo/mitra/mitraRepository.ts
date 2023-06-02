import createApolloClient from '../apollo';
import {GetAllMitraWithDistance} from './mitra.graphql';
import {
  GetAllMitraWithDistanceQuery,
  GetAllMitraWithDistanceQueryVariables,
} from '@src/services/generated/graphql';
import {ensureError} from '../../utils/serviceUtils';

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
    } catch (error) {
      const err = ensureError(error);
      throw err;
    }
  }
}

export default HasuraMitra;
