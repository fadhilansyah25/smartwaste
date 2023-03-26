import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import CustomButton from '../../component/Button';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {useSuccesRegisterScreen} from './hook';
import {style} from './style';

const SuccessRegisterScreen = (ScreenProps: AuthStackProps) => {
  const {handleToLogin} = useSuccesRegisterScreen(ScreenProps);

  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={{height: '100%', justifyContent: 'space-between'}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/image/companylogo-small.png')}
            style={style.companyLogo}
          />
        </View>
        <View>
          <View style={{alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/illustration-4.png')}
                style={style.illustration}
              />
            </View>
            <Text style={style.mainText}>Akun Berhasil Dibuat</Text>
            <Text style={style.descText}>
              Mulai pilah sampah Anda. Untuk layanan Send Your Waste, Anda hanya
              bisa mengirim sampah jenis anorganik
            </Text>
          </View>
        </View>
        <View style={{marginTop: 72, marginBottom: 60}}>
          <CustomButton
            label="Masuk"
            type="fill"
            style={{paddingVertical: 11}}
            onPress={handleToLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessRegisterScreen;
