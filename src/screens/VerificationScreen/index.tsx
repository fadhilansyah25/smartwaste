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
import {style} from './style';

export const VerificationScreen = (ScreenProps: AuthStackProps) => {
  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled style={style.scrollView}>
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

          <View>
            <CustomButton
              label="Submit"
              type="fill"
              style={{paddingVertical: 11}}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
