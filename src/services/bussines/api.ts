import {Coordinate, MitraData} from '@src/types/mitra';
import HasuraAPI from '../apolllo/api';
import {getDistanceFromLatLonInKm} from '@src/utils/regionSorts';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc)

const hasuraAPi = new HasuraAPI();
type MitraDataWithDistance = MitraData & {distance: number};
type UserCoordinate = Coordinate;

export const getAllMitraData = async ({lat, long}: UserCoordinate) => {
  let dataMitra: MitraDataWithDistance[] = [];

  await hasuraAPi.fetchMitraData().then(item => {
    dataMitra = item.map(
      item =>
        ({
          ...item,
          coordinate: {
            lat: item.mitra_coordinate[0].lat,
            long: item.mitra_coordinate[0].long,
          },
          distance: getDistanceFromLatLonInKm(
            lat as number,
            long as number,
            item.mitra_coordinate[0].lat,
            item.mitra_coordinate[0].long,
          ),
        } as MitraDataWithDistance),
    );
  });

  console.log(dataMitra[0].closeTime.toString());
//   console.log(dayjs.utc(dataMitra[0].closeTime, "HH:mm:ssZ"));
  return dataMitra;
};
