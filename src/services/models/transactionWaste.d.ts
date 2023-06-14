import {
  AddNewTransactionMutation,
  AddNewTransactionMutationVariables,
  GetTransactionByIdQuery,
  InsertDetailTransactionWasteTypeMutationVariables,
} from '../generated/graphql';

declare namespace TransactionWaste {
  type InsertParams = {
    delivery_product_id: string;
    delivery_service_id: string;
    delivery_total_cost: number;
    detail_address: string;
    detail_waste: string;
    image_uri: string;
    mitra_id: string;
    pickup_date?: Date | null;
    user_address: string;
    user_id: string;
    user_lat: number;
    user_long: number;
    user_name: string;
    waste_weight: number;
    package_code: string;
  };

  interface Repository {
    addNewTransactionWaste(variables: InsertParams): Promise<{id: string}>;

    insertDetailWasteType(
      wasteType: InsertDetailTransactionWasteTypeMutationVariables,
    ): Promise<void>;

    getTransactionById(id: string): Promise<GetTransactionByIdQuery>;
  }

  interface Usecase {
    addNewTransactionWaste(
      variables: Omit<InsertParams, 'image_uri'>,
      wasteType: number[],
      image: Blob,
    ): Promise<{id: string}>;

    getTransactionWasteByid(
      id: string,
    ): Promise<GetTransactionByIdQuery['smart_waste_transaction_waste_by_pk']>;
  }
}