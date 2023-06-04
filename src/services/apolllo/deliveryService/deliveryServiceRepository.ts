import {ensureError} from '@src/services/utils/serviceUtils';
import createApolloClient from '../apollo';
import {GetAllDeliveryService} from './deliveryService.graphql';
import {GetAllDeliveryServiceQuery} from '@src/services/generated/graphql';

export default class HasuraDeliveryService
  implements DeliveryService.Repository
{
  #apolloClient = createApolloClient();

  async fetchAllDeliveryService() {
    try {
      const result = await this.#apolloClient.query<GetAllDeliveryServiceQuery>(
        {query: GetAllDeliveryService},
      );

      return result.data
        .smart_waste_delivery_service as DeliveryService.DeliveryService[];
    } catch (error) {
      const err = ensureError(error);
      throw err;
    }
  }
}
