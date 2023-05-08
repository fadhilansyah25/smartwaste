import React from 'react';
import {SafeAreaView} from 'react-native';
import {style} from './style';
import {TransactionContext} from '@src/store/context/TransactionContext';

const SelectWasteScreen = () => {
  const {state, dispatch} = React.useContext(TransactionContext);

  return <SafeAreaView style={style.screenContainer}></SafeAreaView>;
};

export default SelectWasteScreen;
