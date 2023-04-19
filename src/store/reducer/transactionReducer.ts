import {InitialStateType} from '../context/transactionContext';

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
  DeletCoordinate = 'DELETE_COORINATE',
}

// Coordinate Recuder
type CoordinatePayload = {
  [Types.SetCoordinate]: InitialStateType['coordinate'];
  [Types.DeletCoordinate]: undefined;
};

export type CoordinateActions =
  ActionMap<CoordinatePayload>[keyof ActionMap<CoordinatePayload>];

export const coordinateReducer = (
  state: InitialStateType['coordinate'],
  action: CoordinateActions,
) => {
  switch (action.type) {
    case 'SET_COORDINATE':
      return action.payload;
    case 'DELETE_COORINATE':
      return {lat: 0, long: 0};
    default:
      return state;
  }
};
