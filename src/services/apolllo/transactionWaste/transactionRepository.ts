import {
  AddNewTransactionMutation,
  AddNewTransactionMutationVariables,
  Exact,
  GetTransactionByIdQuery,
  GetTransactionByIdQueryVariables,
  InsertDetailTransactionWasteTypeMutation,
  Smart_Waste_Transaction_Waste_Type_Insert_Input,
} from '@src/services/generated/graphql';
import createApolloClient from '../apollo';
import {
  AddNewTransaction,
  InsertDetailTransactionWasteType,
  GetTransactionById,
} from './transactionWaste.graphql';
import {ensureError} from '@src/services/utils/serviceUtils';
import {TransactionWaste} from '@src/services/models/transactionWaste';

export default class HasuraTransactionWaste
  implements TransactionWaste.Repository
{
  #apolloClient = createApolloClient();

  async addNewTransactionWaste(variables: TransactionWaste.InsertParams) {
    try {
      const result = await this.#apolloClient.mutate<
        AddNewTransactionMutation,
        AddNewTransactionMutationVariables
      >({
        mutation: AddNewTransaction,
        variables: variables,
      });

      return {id: result.data?.insert_smart_waste_transaction_waste_one?.id};
    } catch (error) {
      const err = ensureError(error);
      throw err;
    }
  }

  async insertDetailWasteType(
    wasteType: Exact<{
      objects:
        | Smart_Waste_Transaction_Waste_Type_Insert_Input
        | Smart_Waste_Transaction_Waste_Type_Insert_Input[];
    }>,
  ) {
    try {
      await this.#apolloClient.mutate<InsertDetailTransactionWasteTypeMutation>(
        {mutation: InsertDetailTransactionWasteType, variables: wasteType},
      );
    } catch (error) {
      const err = ensureError(error);
      throw err;
    }
  }

  async getTransactionById(id: string) {
    try {
      const result = await this.#apolloClient.query<
        GetTransactionByIdQuery,
        GetTransactionByIdQueryVariables
      >({query: GetTransactionById, variables: {id}});

      return result.data;
    } catch (error) {
      const err = ensureError(error);
      throw err;
    }
  }
}
