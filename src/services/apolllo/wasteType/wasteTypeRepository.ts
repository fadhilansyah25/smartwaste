import {GetAllWastetypeQuery} from '@src/services/generated/graphql';
import createApolloClient from '../apollo';
import {GetAllWastetype} from './wasteType.graphql';
import {ensureError} from '@src/services/utils/serviceUtils';

export default class HasuraWasteType
  implements WasteType.Repository
{
  #apolloClient = createApolloClient();

  async fetchAllWasteType() {
    try {
      const result = await this.#apolloClient.query<GetAllWastetypeQuery>({
        query: GetAllWastetype,
      });

      return result.data.smart_waste_waste_type as WasteType.WasteType[];
    } catch (error) {
      const err = ensureError(error);
      throw err;
    }
  }
}
