import HasuraWasteType from '../apolllo/wasteType/wasteTypeRepository';

const hasura_wasteType = new HasuraWasteType();

export default class WasteTypeUsecase implements WasteType.Usecase {
  async getAllWasteType() {
    try {
      const data = hasura_wasteType.fetchAllWasteType();

      return data;
    } catch (error) {
      throw error;
    }
  }
}
