import HasuraTransactionWaste from '../apolllo/transactionWaste/transactionRepository';
import firebaseServices from '../firebaseServices';
import {TransactionWaste} from '../models/transactionWaste';

const hasura_transactionWaste = new HasuraTransactionWaste();

export default class TransactionWasteUsecase
  implements TransactionWaste.Usecase
{
  async AddNewTransactionWaste(
    variables: Omit<TransactionWaste.InsertParams, 'image_uri'>,
    wasteType: number[],
    image: Blob,
  ) {
    try {
      const image_uri = await firebaseServices.savePhotoToStorage(image);
      const transactionID =
        await hasura_transactionWaste.AddNewTransactionWaste({
          ...variables,
          image_uri,
        });

      const selectedWasteType = wasteType.map(item => ({
        waste_type_id: item,
        transaction_waste_id: transactionID,
      }));

      await hasura_transactionWaste.InsertDetailWasteType({
        objects: selectedWasteType,
      });

      return transactionID;
    } catch (error) {
      throw error;
    }
  }
}
