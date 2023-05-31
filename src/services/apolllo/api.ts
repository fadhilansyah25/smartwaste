import {
  GetAllMitraQuery,
  GetAllMitraQueryVariables,
} from '@src/generated/graphql';
import createApolloClient from './apollo';
import {FETCH_MITRA} from './queries';

interface API {
  fetchMitraData(
    minDistance: number,
    lat: number,
    long: number,
  ): Promise<GetAllMitraQuery['search_mitra_near_user']>;
}
class HasuraAPI implements API {
  #apolloClient = createApolloClient();

  async fetchMitraData(minDistance: number, lat: number, long: number) {
    try {
      const result = await this.#apolloClient.query<
        GetAllMitraQuery,
        GetAllMitraQueryVariables
      >({
        query: FETCH_MITRA,
        variables: {distance_kms: minDistance, latitude: lat, longitude: long},
      });

      return result.data.search_mitra_near_user;
    } catch (err) {
      const error = ensureError(err);
      throw error;
    }
  }
}

export default HasuraAPI;

function ensureError(value: unknown): Error {
  if (value instanceof Error) return value;

  let stringified = '[Unable to stringify the thrown value]';
  try {
    stringified = JSON.stringify(value);
  } catch {}

  const error = new Error(
    `This value was thrown as is, not through an Error: ${stringified}`,
  );
  return error;
}
