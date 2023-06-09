
declare module '*/deliveryService.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetAllDeliveryService: DocumentNode;
export const GetDeliveryServiceById: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/mitra.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetAllMitraWithDistance: DocumentNode;
export const GetMitraById: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/transactionWaste.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AddNewTransaction: DocumentNode;
export const InsertDetailTransactionWasteType: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/wasteType.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetAllWastetype: DocumentNode;

  export default defaultDocument;
}
    