declare namespace DeliveryService {
  export type DeliveryService = {
    id: '70325cfb-f204-435b-a94d-4775249c79f4';
    delivery_name: string;
    logo_uri: null;
    delivery_service_delivery_type: {
      id: number;
      type_name: string;
    };
  };

  export interface Repository {
    fetchAllDeliveryService(): Promise<DeliverService[]>;
  }

  export interface Usecase {
    getAllDeliveryService(): Promise<DeliverService[]>;
  }
}
