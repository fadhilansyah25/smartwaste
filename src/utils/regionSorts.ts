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
  return Districts.filter(item => Number(item.regency_id) === regionId).map(item => ({
    key: Number(item.id),
    value: item.name,
  })) as {key: number; value: string}[];
};
