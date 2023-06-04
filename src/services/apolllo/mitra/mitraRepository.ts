import createApolloClient from '../apollo';
import {GetAllMitraWithDistance} from './mitra.graphql';
import {
  GetAllMitraWithDistanceQuery,
  GetAllMitraWithDistanceQueryVariables,
} from '@src/services/generated/graphql';
import {ensureError} from '../../utils/serviceUtils';

export default class HasuraMitra implements Mitra.Repository {
  #apolloClient = createApolloClient();

  async fetchMitraWithDistance({
    lat,
    long,
    minDistance = 20,
  }: Mitra.MitraWithDistanceParams) {
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
        .search_mitra_near_user as Mitra.MitraWithDistance[];
    } catch (error) {
      const err = ensureError(error);
      throw err;
    }
  }
}
