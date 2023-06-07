import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import {TransactionContext} from '@src/store/context/TransactionContext';
import firebaseServices from '@src/services/firebaseServices';
import geocodingServices from '@src/services/geocodingServices';
import { generateUniqueCode } from '@src/utils/generateCode';

export const useDeliveryConfirmScreen = () => {
  const user = firebaseServices.firebaseCheckCurrentUser;
  const {state} = React.useContext(TransactionContext);
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const uniqueCode = generateUniqueCode()

  const [userAddress, setUserAddress] = React.useState<
    GeocodeTypes.LocationAddress | undefined
  >();

  React.useEffect(() => {
    let isMounted = true;

    (async () => {
      if (state.coordinate) {
        const data = await geocodingServices.reverseGeocoding([
          state.coordinate?.long,
          state.coordinate?.lat,
        ]);
        if (isMounted) {
          setUserAddress(data);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [state.coordinate]);

  return {
    state,
    navigation,
    userAddress,
    uniqueCode,
    user,
  } as const;
};
