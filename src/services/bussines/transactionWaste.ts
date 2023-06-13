import HasuraTransactionWaste from '../apolllo/transactionWaste/transactionRepository';
import firebaseServices from '../firebaseServices';
import {TransactionWaste} from '../models/transactionWaste';

const hasura_transactionWaste = new HasuraTransactionWaste();

export default class TransactionWasteUsecase
  implements TransactionWaste.Usecase
{
  async addNewTransactionWaste(
    variables: Omit<TransactionWaste.InsertParams, 'image_uri'>,
    wasteType: number[],
    image: Blob,
  ) {
    try {
      const image_uri = await firebaseServices.savePhotoToStorage(image);
      const res = await hasura_transactionWaste.addNewTransactionWaste({
        ...variables,
        image_uri,
      });

      const selectedWasteType = wasteType.map(item => ({
        waste_type_id: item,
        transaction_waste_id: res.id,
      }));

      await hasura_transactionWaste.insertDetailWasteType({
        objects: selectedWasteType,
      });

      return res;
    } catch (error) {
      throw error;
    }
  }

  async getTransactionWasteByid(id: string) {
    try {
      const res = await hasura_transactionWaste.getTransactionById(id);

      return res.smart_waste_transaction_waste_by_pk;
    } catch (error) {
      throw error;
    }
  }
}
