import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {Types} from '@src/store/reducer/TransactionReducer';

export const useDetailsDeliveryScreen = () => {
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const {state, dispatch} = React.useContext(TransactionContext);
  const [detailAddress, setDetailAddress] = React.useState('');
  const [detailWaste, setDetailWaste] = React.useState('');

  const handleChangeDetailAddress = (text: string) => {
    setDetailAddress(text);
  };

  const handleChaneDetailWaste = (text: string) => {
    setDetailWaste(text);
  };

  const handleconfirm = () => {
    dispatch({
      type: Types.SetTransac,
      payload: {
        detailAdrees: detailAddress,
        detailWaste: detailWaste,
      },
    });
    navigation.navigate('SelectDeliveryServices');
  };

  return {
    navigation,
    state,
    detailAddress,
    detailWaste,
    handleChaneDetailWaste,
    handleChangeDetailAddress,
    handleconfirm,
  } as const;
};
