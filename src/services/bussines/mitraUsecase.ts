import HasuraMitra from '@src/services/apolllo/mitra/mitraRepository';

const hasura_mitra = new HasuraMitra();

export default class MitraUsecase implements MitraModels.MitraUsecase {
  async getAllMitraWithDistance({
    lat,
    long,
    minDistance = 20,
  }: MitraModels.MitraWithDistanceParams) {
    try {
      const dataMitra = await hasura_mitra.fetchMitraWithDistance({
        lat,
        long,
        minDistance,
      });
      return dataMitra as MitraModels.MitraWithDistance[];
    } catch (err) {
      return [];
    }
  }
}
