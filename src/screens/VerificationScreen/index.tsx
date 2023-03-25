import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import CustomButton from '../../component/Button';
import VerCodeField from '../../component/VerCodeField';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {useVerificationScreen} from './hook';
import {style} from './style';

const VerificationScreen = (screenProps: AuthStackProps) => {
  const {handleToPersonalForm} = useVerificationScreen(screenProps);

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{minHeight: '100%'}}>
        <KeyboardAvoidingView
          enabled
          style={{flex: 1, justifyContent: 'space-between'}}>
          <View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/illustration-3.png')}
                style={style.illustration}
              />
            </View>
            <Text style={style.mainText}>Verifikasi Akun</Text>
            <Text style={style.descText}>
              Masukan kode verifikasi yang telah dikirim ke {'\n'} email atau
              sms ke no. telepon anda
            </Text>
            <View style={{marginTop: 56}}>
              <VerCodeField />
              <Text
                style={{
                  marginTop: 32,
                  textAlign: 'center',
                }}>
                Waktu Tersisa 1:59 Menit
              </Text>
            </View>
          </View>

          <View style={{marginVertical: 20}}>
            <CustomButton
              label="Submit"
              type="fill"
              style={{paddingVertical: 11}}
              onPress={handleToPersonalForm}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationScreen;
