export {};

declare global {
  type Coordinate = {
    lat: number;
    long: number;
  };

  type MitraData = {
    id: string;
    name: string;
    address: string;
    closeTime: string;
    openTime: string;
    lat: number;
    long: number;
    phoneNumber: string;
  };
}
