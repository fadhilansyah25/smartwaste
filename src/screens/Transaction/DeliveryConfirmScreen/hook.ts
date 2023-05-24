import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';

export const useDeliveryConfirmScreen = () => {
  const navigation = useNavigation<TransactionStackProps['navigation']>();

  return {
    navigation,
  } as const;
};
