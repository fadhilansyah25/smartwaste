import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';

export const useDetailsDeliveryServiceScreen = () => {
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const [selected, setSelected] = React.useState('');
  const [weight, setWeight] = React.useState<number>(1);

  return {
    navigation,
    selected,
    setSelected,
    weight,
    setWeight,
  } as const;
};
