import {ensureError} from '@src/services/utils/serviceUtils';
import createApolloClient from '../apollo';
import {
  GetAllDeliveryService,
  GetDeliveryServiceById,
} from './deliveryService.graphql';
import {
  GetAllDeliveryServiceQuery,
  GetDeliveryServiceByIdQuery,
  GetDeliveryServiceByIdQueryVariables,
} from '@src/services/generated/graphql';

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

  async fetchDeliveryServiceById(id: string) {
    try {
      const result = await this.#apolloClient.query<
        GetDeliveryServiceByIdQuery,
        GetDeliveryServiceByIdQueryVariables
      >({query: GetDeliveryServiceById, variables: {id}});

      return result.data
        .smart_waste_delivery_service[0] as DeliveryService.DeliveryServiceByID;
    } catch (error) {
      const err = ensureError(error);
      throw err;
    }
  }
}
