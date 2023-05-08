import React from 'react';
import {
  CoordinateActions,
  MitraActions,
  MitraReducer,
  coordinateReducer,
} from '../reducer/TransactionReducer';
import {Coordinate, MitraData} from '@src/types/mitra';

export type InitialStateType = {
  coordinate: Coordinate | null;
  mitra: MitraData | null;
};

const initialState: InitialStateType = {
  coordinate: null,
  mitra: null,
};

const TransactionContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<CoordinateActions | MitraActions>;
}>({state: initialState, dispatch: () => null});

const mainReducer = (
  {coordinate, mitra}: InitialStateType,
  action: CoordinateActions | MitraActions,
) => ({
  coordinate: coordinateReducer(coordinate, action),
  mitra: MitraReducer(mitra, action),
});

const TransactionProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);

  return (
    <TransactionContext.Provider value={{state, dispatch}}>
      {children}
    </TransactionContext.Provider>
  );
};

export {TransactionContext, TransactionProvider};
