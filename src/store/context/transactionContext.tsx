import React from 'react';
import {
  CoordinateActions,
  coordinateReducer,
} from '../reducer/TransactionReducer';

export type InitialStateType = {
  coordinate: {
    lat: number;
    long: number;
  } | null;
};

const initialState: InitialStateType = {
  coordinate: null
};

const TransactionContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<CoordinateActions>;
}>({state: initialState, dispatch: () => null});

const mainReducer = (
  {coordinate}: InitialStateType,
  action: CoordinateActions,
) => ({
  coordinate: coordinateReducer(coordinate, action),
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
