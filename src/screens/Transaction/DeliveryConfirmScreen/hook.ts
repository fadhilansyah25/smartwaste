import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import {TransactionContext} from '@src/store/context/TransactionContext';
import firebaseServices from '@src/services/firebaseServices';
import geocodingServices from '@src/services/geocodingServices';
import {generateUniqueCode} from '@src/utils/generateCode';
import TransactionWasteUsecase from '@src/services/bussines/transactionWaste';

export const useDeliveryConfirmScreen = () => {
  const user = firebaseServices.firebaseCheckCurrentUser;
  const {state} = React.useContext(TransactionContext);
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const uniqueCode = generateUniqueCode();
  const transactionUsecase = new TransactionWasteUsecase();

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

  const handleConfirmTransactionWaste = async () => {
    try {
      const res = transactionUsecase.AddNewTransactionWaste(
        {
          user_id: user()?.uid as string,
          user_address: userAddress?.display_name as string,
          user_lat: state.coordinate?.lat as number,
          user_long: state.coordinate?.long as number,
          user_name: user()?.displayName as string,
          detail_address: state.transactionData.detailAdrees,
          detail_waste: state.transactionData.detailWaste,
          mitra_id: state.mitra?.id as string,
          delivery_product_id: state.transactionData.deliveryServiceProduct
            ?.id as string,
          delivery_service_id: state.transactionData.deliveryProvider
            ?.id as string,
          delivery_total_cost:
            (state.transactionData.weight as number) *
            (state.transactionData.deliveryServiceProduct
              ?.price_perkilo as number),

          waste_weight: state.transactionData.weight as number,
          pickup_date: state.transactionData.pickUpDate
            ? state.transactionData.pickUpDate
            : null,
          package_code: uniqueCode,
        },
        state.transactionData.wasteType as number[],
        state.transactionData.imageSource as Blob,
      );

      await res.then(res => console.log(res));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    state,
    navigation,
    userAddress,
    uniqueCode,
    user,
    handleConfirmTransactionWaste,
  } as const;
};
