import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';

export const useDetailsDeliveryServiceScreen = () => {
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const [selected, setSelected] = React.useState('');
  const [weight, setWeight] = React.useState<number>(1);
  const [deliveryType, setDeliveryType] = React.useState<0 | 1>(0);

  return {
    navigation,
    selected,
    weight,
    deliveryType,
    setDeliveryType,
    setSelected,
    setWeight,
  } as const;
};
