import HasuraDeliveryService from '../apolllo/deliveryService/deliveryServiceRepository';

const hasura_mitra = new HasuraDeliveryService();

export default class DeliveryServiceUsecase implements DeliveryService.Usecase {
  async getAllDeliveryService() {
    try {
      const dataMitra = await hasura_mitra.fetchAllDeliveryService();
      return dataMitra as DeliveryService.DeliveryService[];
    } catch (err) {
      return [];
    }
  }
}
