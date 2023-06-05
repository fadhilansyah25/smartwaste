import HasuraDeliveryService from '../apolllo/deliveryService/deliveryServiceRepository';

const hasura_delivery_service = new HasuraDeliveryService();

export default class DeliveryServiceUsecase implements DeliveryService.Usecase {
  async getAllDeliveryService() {
    try {
      const data = await hasura_delivery_service.fetchAllDeliveryService();
      return data;
    } catch (err) {
      return [];
    }
  }

  async getDeliveryServiceById(id: string) {
    try {
      const data = await hasura_delivery_service.fetchDeliveryServiceById(id);
      return data;
    } catch (error) {}
  }
}
