
declare module '*/deliveryService.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetAllDeliveryService: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/mitra.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetAllMitraWithDistance: DocumentNode;
export const GetMitraById: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/wasteType.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetAllWastetype: DocumentNode;

  export default defaultDocument;
}
    