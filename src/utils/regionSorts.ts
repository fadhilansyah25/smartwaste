import Provincies from '../const/provinces.json';
import Regencies from '../const/regencies.json';
import Districts from '../const/districts.json';

export const selectProvincies = Provincies.map(item => {
  return {key: Number(item.id), value: item.name};
});

export const selectRegency = (provinceId: number) => {
  return Regencies.filter(item => Number(item.province_id) === provinceId).map(
    item => ({key: Number(item.id), value: item.name}),
  ) as {key: number; value: string}[];
};

export const selectDistrict = (regionId: number) => {
  return Districts.filter(item => Number(item.regency_id) === regionId).map(
    item => ({
      key: Number(item.id),
      value: item.name,
    }),
  ) as {key: number; value: string}[];
};

export function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}
