import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import CustomButton from '../../component/Button';
import VerCodeField from '../../component/VerCodeField';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {useVerificationScreen} from './hook';
import {style} from './style';

const VerificationScreen = (screenProps: AuthStackProps) => {
  const {handleConfirmCode, code, setCode} = useVerificationScreen(screenProps);

  return (
    <SafeAreaView style={style.screenContainer}>
      <KeyboardAvoidingView enabled>
        <View style={{minHeight: '100%'}}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
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
