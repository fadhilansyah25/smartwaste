import React from 'react';
import {
  RouteProp,
  useNavigation,
  useRoute,
  CommonActions,
} from '@react-navigation/native';
import {
  TransactionStackParamaterList,
  TransactionStackProps,
} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import TransactionWasteUsecase from '@src/services/bussines/transactionWaste';
import {GetTransactionByIdQuery} from '@src/services/generated/graphql';
import {HomeStackProps} from '@src/navigation/StackNavigation/HomeStackScreen';

export const useSuccesTransactionScreen = () => {
  const navigation = useNavigation<HomeStackProps['navigation']>();
  const stackNavigation = useNavigation<TransactionStackProps['navigation']>();
  const route =
    useRoute<RouteProp<TransactionStackParamaterList, 'SuccessTransaction'>>();
  const transactionId = route.params.transactionID;
  const [transactionData, setTransactionData] =
    React.useState<
      GetTransactionByIdQuery['smart_waste_transaction_waste_by_pk']
    >();
  const transactionUsecase = new TransactionWasteUsecase();

  React.useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const data = await transactionUsecase.getTransactionWasteByid(
          transactionId as string,
        );

        if (isMounted) {
          setTransactionData(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [transactionId]);

  const handleBackToMenu = () => {
    stackNavigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SearchMitra'}], // Replace 'Home' with the name of your default screen in the tab stack
      }),
    );
    navigation.navigate('Home');
  };

  return {transactionData, handleBackToMenu} as const;
};
