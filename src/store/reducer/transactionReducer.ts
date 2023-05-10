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
  SetTransac = 'SET_TRANSAC',
  ClearTransact = 'CLEAR_TRANSAC',
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
  action: CoordinateActions | MitraActions | TransactionActions,
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

// Mitra Reducer
type MitraPayload = {
  [Types.SetMitra]: InitialStateType['mitra'];
  [Types.DeleteMitra]: undefined;
};

export type MitraActions =
  ActionMap<MitraPayload>[keyof ActionMap<MitraPayload>];

export const MitraReducer = (
  state: InitialStateType['mitra'],
  action: CoordinateActions | MitraActions | TransactionActions,
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

// Transaction Reducer

type TransactionPayload = {
  [Types.SetTransac]: Partial<InitialStateType['transactionData']>;
  [Types.ClearTransact]: undefined;
};

export type TransactionActions =
  ActionMap<TransactionPayload>[keyof ActionMap<TransactionPayload>];

export const TransactionReducer = (
  state: InitialStateType['transactionData'],
  action: CoordinateActions | MitraActions | TransactionActions,
) => {
  switch (action.type) {
    case 'SET_TRANSAC':
      return {...state, ...action.payload};

    default:
      return state;
  }
};
