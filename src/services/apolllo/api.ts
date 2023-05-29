import createApolloClient from './apollo';
import {FETCH_MITRA} from './queries';

class HasuraAPI {
  #apolloClient = createApolloClient();

  async fetchMitraData() {
    try {
      const result = await this.#apolloClient.query({query: FETCH_MITRA});

      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new HasuraAPI();
