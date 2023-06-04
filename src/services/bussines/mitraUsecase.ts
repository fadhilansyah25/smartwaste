import HasuraMitra from '@src/services/apolllo/mitra/mitraRepository';

const hasura_mitra = new HasuraMitra();

export default class MitraUsecase implements Mitra.Usecase {
  async getAllMitraWithDistance({
    lat,
    long,
    minDistance = 20,
  }: Mitra.MitraWithDistanceParams) {
    try {
      const dataMitra = await hasura_mitra.fetchMitraWithDistance({
        lat,
        long,
        minDistance,
      });
      return dataMitra as Mitra.MitraWithDistance[];
    } catch (err) {
      return [];
    }
  }
}
