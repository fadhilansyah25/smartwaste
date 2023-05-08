import {MitraData} from '@src/types/mitra';
import {InitialStateType} from '../context/TransactionContext';

type ActionMap<M extends {[index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SetCoordinate = 'SET_COORDINATE',
  DeleteCoordinate = 'DELETE_COORINATE',
  SetMitra = 'SET_MITRA',
  DeleteMitra = 'DELETE_MITRA',
}

// Coordinate Recuder
type CoordinatePayload = {
  [Types.SetCoordinate]: InitialStateType['coordinate'];
  [Types.DeleteCoordinate]: undefined;
};

export type CoordinateActions =
  ActionMap<CoordinatePayload>[keyof ActionMap<CoordinatePayload>];

export const coordinateReducer = (
  state: InitialStateType['coordinate'],
  action: CoordinateActions | MitraActions,
) => {
  switch (action.type) {
    case 'SET_COORDINATE':
      return action.payload;
    case 'DELETE_COORINATE':
      return null;
    default:
      return state;
  }
};

// Transaction Reducer
type MitraPayload = {
  [Types.SetMitra]: InitialStateType['mitra'];
  [Types.DeleteMitra]: undefined;
};

export type MitraActions =
  ActionMap<MitraPayload>[keyof ActionMap<MitraPayload>];

export const MitraReducer = (
  state: InitialStateType['mitra'],
  action: CoordinateActions | MitraActions,
) => {
  switch (action.type) {
    case 'SET_MITRA':
      return action.payload;
    case 'DELETE_MITRA':
      return null;
    default:
      return state;
  }
};
