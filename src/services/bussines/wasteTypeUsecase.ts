import HasuraWasteType from '../apolllo/wasteType/wasteTypeRepository';

const hasura_wasteType = new HasuraWasteType();

class WasteTypeUsecase implements WasteTypeModels.WasteUsecase {
  async getAllWasteType() {
    try {
      const data = hasura_wasteType.fetchAllWasteType();

      return data;
    } catch (error) {
      throw error;
    }
  }
}
