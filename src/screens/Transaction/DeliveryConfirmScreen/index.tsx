import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {style} from './style';
import {CustomButton} from '@src/component';
import {useDeliveryConfirmScreen} from './hook';

const DeliveryConfirmScreen = () => {
  const {navigation} = useDeliveryConfirmScreen();

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView contentContainerStyle={style.scrollViewStyle}></ScrollView>

      {/* Bottom Navbar */}
      <View style={style.bottomNavContainer}>
        <CustomButton
          label="Selanjutnya"
          type="fill"
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('SelectDeliveryServices');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeliveryConfirmScreen;
