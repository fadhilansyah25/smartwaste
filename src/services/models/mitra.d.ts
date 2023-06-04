declare namespace Mitra {
  export type Mitra = {
    id: string;
    name: string;
    address: string;
    closeTime: string;
    openTime: string;
    lat: number;
    long: number;
    phoneNumber: string;
  };

  export type MitraWithDistance = Mitra & {
    distance: number;
  };

  export type MitraWithDistanceParams = {
    lat: number;
    long: number;
    minDistance?: number;
  };

  export type MitraByIdWithDistance = {
    id: string;
    lat: number;
    long: number;
  };

  export interface Repository {
    fetchMitraWithDistance(
      params: MitraWithDistanceParams,
    ): Promise<MitraWithDistance[]>;

    // fetchMitraByIdWithDistance(
    //   params: MitraByIdWithDistance,
    // ): Promise<MitraWithDistance>;
  }

  export interface Usecase {
    getAllMitraWithDistance(
      params: MitraWithDistanceParams,
    ): Promise<MitraWithDistance[]>;

    // getMitraByIdWithDistance(
    //   params: MitraByIdWithDistance,
    // ): Promise<MitraWithDistance>;
  }
}
