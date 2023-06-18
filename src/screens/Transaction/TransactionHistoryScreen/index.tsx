import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {style} from './style';

const TransactionHistoryScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={StyleSheet.absoluteFill}></View>
      <Text>TransactionHistoryScreen</Text>
    </SafeAreaView>
  );
};

export default TransactionHistoryScreen;
