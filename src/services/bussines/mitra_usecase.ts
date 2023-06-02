import HasuraMitra from '@src/services/apolllo/mitra/mitraRepository';

const hasura_mitra = new HasuraMitra();

class MitraUseCase implements MitraModels.MitraUseCase {
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

export default MitraUseCase;
