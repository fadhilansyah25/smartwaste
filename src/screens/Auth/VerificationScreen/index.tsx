import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
  BackHandler,
} from 'react-native';
import {useVerificationScreen} from './hook';
import {style} from './style';
import {useFocusEffect} from '@react-navigation/native';
import { CustomButton, VerCodeField } from '@src/component';

const VerificationScreen = () => {
  const {handleConfirmCode, code, setCode} = useVerificationScreen();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <SafeAreaView style={style.screenContainer}>
      <KeyboardAvoidingView enabled>
        <View style={{minHeight: '100%'}}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('@src/assets/image/illustration-3.png')}
                  style={style.illustration}
                />
              </View>
              <Text style={style.mainText}>Verifikasi Akun</Text>
              <Text style={style.descText}>
                Masukan kode verifikasi yang telah dikirim ke {'\n'} email atau
                sms ke no. telepon anda
              </Text>
              <View style={{marginTop: 56}}>
                <VerCodeField value={code} setValue={setCode} />
                <Text
                  style={{
                    marginTop: 32,
                    textAlign: 'center',
                  }}>
                  Waktu Tersisa 1:59 Menit
                </Text>
              </View>
            </View>

            <View style={{marginBottom: 71}}>
              <CustomButton
                label="Submit"
                type="fill"
                style={{paddingVertical: 11}}
                onPress={handleConfirmCode}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerificationScreen;
