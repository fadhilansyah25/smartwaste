declare namespace DeliveryService {
  export type DeliveryService = {
    id: string;
    delivery_name: string;
    logo_uri: string | null;
    delivery_service_delivery_type: {
      id: number;
      type_name: string;
    };
  };

  export type DeliveryServiceByID = Omit<
    DeliveryService,
    'delivery_service_delivery_type'
  > & {
    delivery_type_id: number;
    delivery_service_delivery_service_products: delivery_service_product[];
  };

  type delivery_service_product = {
    id: string;
    service_name: string;
    price_perkilo: number;
    estimate_day: string;
  };

  export interface Repository {
    fetchAllDeliveryService(): Promise<DeliverService[]>;
    fetchDeliveryServiceById(id: string) : Promise<DeliveryServiceByID>
  }

  export interface Usecase {
    getAllDeliveryService(): Promise<DeliverService[]>;
    getDeliveryServiceById(id: string): fetchDeliveryServiceById<DeliveryServiceByID>
  }
}
