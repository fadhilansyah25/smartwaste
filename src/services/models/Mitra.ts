declare namespace MitraModels {
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

  export interface MitraRepository {
    fetchMitraWithDistance(
      params: MitraWithDistanceParams,
    ): Promise<MitraWithDistance[]>;
  }

  export interface MitraUseCase {
    getAllMitraWithDistance(
      params: MitraWithDistanceParams,
    ): Promise<MitraWithDistance[]>;
  }
}
