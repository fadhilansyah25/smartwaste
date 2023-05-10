import React from 'react';
import {
  CoordinateActions,
  MitraActions,
  MitraReducer,
  TransactionActions,
  TransactionReducer,
  coordinateReducer,
} from '../reducer/TransactionReducer';
import {Coordinate, MitraData} from '@src/types/mitra';

export interface InitialStateType {
  coordinate: Coordinate | null | undefined;
  mitra: MitraData | null | undefined;
  transactionData: {
    wasteType: number[] | null;
  };
}

const initialState: InitialStateType = {
  coordinate: null,
  mitra: null,
  transactionData: {
    wasteType: null,
  },
};

const TransactionContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<CoordinateActions | MitraActions>;
}>({state: initialState, dispatch: () => null});

const mainReducer = (
  {coordinate, mitra, transactionData}: InitialStateType,
  action: CoordinateActions | MitraActions | TransactionActions,
) => ({
  coordinate: coordinateReducer(coordinate, action),
  mitra: MitraReducer(mitra, action),
  transactionData: TransactionReducer(transactionData, action),
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
