import React from 'react';
import {
  CoordinateActions,
  MitraActions,
  MitraReducer,
  TransactionActions,
  TransactionReducer,
  coordinateReducer,
} from '../reducer/TransactionReducer';

export interface InitialStateType {
  coordinate: Coordinate | null | undefined;
  mitra: MitraData | null | undefined;
  transactionData: {
    wasteType: number[] | null;
    detailAdrees: string;
    detailWaste: string;
    userId: string;
    userName: string;
    userAddress: string;
    deliveryProvider: DeliveryService.DeliveryService | undefined;
    deliveryServiceProduct:
      | DeliveryService.delivery_service_product
      | undefined;
    deliveryCost: number | undefined;
    weight: number | undefined;
    pickUpDate: Date | undefined;
    imageSource: Blob | null
  };
}

const initialState: InitialStateType = {
  coordinate: null,
  mitra: null,
  transactionData: {
    wasteType: null,
    detailAdrees: '',
    detailWaste: '',
    userId: '',
    userName: '',
    userAddress: '',
    deliveryProvider: undefined,
    deliveryServiceProduct: undefined,
    deliveryCost: undefined,
    weight: undefined,
    pickUpDate: undefined,
    imageSource: null
  },
};

const TransactionContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<
    CoordinateActions | MitraActions | TransactionActions
  >;
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
