import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CustomButton} from '../../component/Button/CustomButton';
import {InputText} from '../../component/InputText/InputText';
import {colors} from '../../const/colors';
import {style} from './LoginScreen.style';

const LoginScreen = () => {
  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/image/companylogo-small.png')}
              style={style.companyLogo}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/image/illustration-1.png')}
              style={style.illustration}
            />
          </View>
          <Text style={style.mainText}>Send Your Waste</Text>
          <Text style={style.descText}>
            Kirimkan Limbah anorganik Anda untuk {'\n'} didaur ulang secara
            bertanggung jawab
          </Text>
          <View style={{marginTop: 45}}>
            <View>
              <InputText
                keyboardType="email-address"
                placeholder="Masukan email atau No. telepon"
                label="Email / No. Telepon"
                returnKeyType="next"
              />
              <InputText
                keyboardType="default"
                placeholder="Masukan kata sandi"
                label="Kata Sandi"
                returnKeyType="next"
                isPassword
              />
            </View>
          </View>
          <View style={{marginTop: 73, marginBottom: 60}}>
            <CustomButton label="Masuk" type="fill" />
            <View
              style={{
                marginTop: 18,
                borderBottomColor: colors.T500,
                borderBottomWidth: 1,
              }}
            />
            <Text style={{marginTop: 18, textAlign: 'center'}}>
              Belum Punya Akun?
            </Text>
            <CustomButton
              style={{marginTop: 18}}
              label="Daftar"
              type="outline"
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
