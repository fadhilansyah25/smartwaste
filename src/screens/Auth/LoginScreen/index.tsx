import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {style} from './style';
import {useLoginScreen} from './hook';
import {CustomButton, InputText} from '@src/component';

const LoginScreen = () => {
  const {handleToRegister, state, dispatch, handleLogin} = useLoginScreen();

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
          <View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('@src/assets/image/companylogo-small.png')}
                style={style.companyLogo}
              />
            </View>
            <View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('@src/assets/image/illustration-1.png')}
                  style={style.illustration}
                />
              </View>
              <Text style={style.mainText}>Send Your Waste</Text>
              <Text style={style.descText}>
                Kirimkan Limbah anorganik Anda untuk {'\n'} didaur ulang secara
                bertanggung jawab
              </Text>
            </View>
          </View>
          <View style={{marginTop: 45}}>
            <InputText
              keyboardType="email-address"
              placeholder="Masukan email atau No. telepon"
              label="Email / No. Telepon"
              value={state.email}
              returnKeyType="done"
              warningText={state.emailErrorMessage}
              onChangeText={e =>
                dispatch({
                  type: 'HANDLE_INPUT_EMAIL',
                  payload: e,
                })
              }
            />
            <InputText
              keyboardType="default"
              placeholder="Masukan kata sandi"
              label="Kata Sandi"
              value={state.password}
              isPassword
              returnKeyType="done"
              warningText={state.passwordErrorMessage}
              containerStyle={{marginTop: 4}}
              onChangeText={e =>
                dispatch({
                  type: 'HANDLE_INPUT_PASSWORD',
                  payload: e,
                })
              }
            />
          </View>
          <View style={{marginTop: 72, marginBottom: 60}}>
            <CustomButton
              label="Masuk"
              type="fill"
              style={{paddingVertical: 11}}
              onPress={handleLogin}
            />
            <View style={style.horizontalRule} />
            <Text style={style.ctaRegsiterText}>Belum Terdaftar?</Text>
            <CustomButton
              style={{marginTop: 18}}
              label="Daftar"
              type="outline"
              onPress={handleToRegister}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
