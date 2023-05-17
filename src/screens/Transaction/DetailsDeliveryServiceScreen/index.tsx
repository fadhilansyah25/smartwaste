import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {style} from './style';

const DetailsDeliveryServiceScreen = () => {
  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView contentContainerStyle={style.scrollViewStyle}>
        <Text>DetailsDeliveryServiceScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsDeliveryServiceScreen;
