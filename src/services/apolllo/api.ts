import {GetAllMitraQuery, Smart_Waste_Mitra} from '@src/generated/graphql';
import createApolloClient from './apollo';
import {FETCH_MITRA} from './queries';
import {ApolloQueryResult} from '@apollo/client';

interface API {
  fetchMitraData(): Promise<GetAllMitraQuery['smart_waste_mitra']>;
}
class HasuraAPI implements API {
  #apolloClient = createApolloClient();

  async fetchMitraData() {
    try {
      const result = await this.#apolloClient.query<GetAllMitraQuery>({
        query: FETCH_MITRA,
      });

      return result.data.smart_waste_mitra;
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
