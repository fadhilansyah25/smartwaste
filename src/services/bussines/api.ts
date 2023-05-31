import {Coordinate, MitraData} from '@src/types/mitra';
import HasuraAPI from '../apolllo/api';

const hasuraAPi = new HasuraAPI();

export const getAllMitraData = async ({
  minDistance = 20,
  lat,
  long,
}: {minDistance?: number} & Coordinate) => {
  let dataMitra: MitraData[] = [];

  await hasuraAPi.fetchMitraData(minDistance, lat, long).then(item => {
    dataMitra = item as MitraData[];
  });

  return dataMitra;
};
