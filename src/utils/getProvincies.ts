import Provincies from '../const/provinces.json';
import Regencies from '../const/regencies.json';

export const selectProvincies = Provincies.map(item => {
  return {key: item.id, value: item.name};
});

export const selectRegions = (id: string) => {
  const regencies = Regencies.filter(
    item => Number(item.province_id) === Number(id),
  ).map(item => ({key: item.id, value: item.name}));

  return regencies as {key: string; value: string}[];
};
