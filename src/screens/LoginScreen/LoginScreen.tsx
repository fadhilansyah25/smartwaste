import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {CustomButton} from '../../component/Button/CustomButton';
import {InputText} from '../../component/InputText/InputText';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {style} from './LoginScreen.style';
import {useLoginScreen} from './useLoginScreen';

const LoginScreen = (screenProps: AuthStackProps) => {
  const {handleToRegister} = useLoginScreen(screenProps);

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
          <View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/companylogo-small.png')}
                style={style.companyLogo}
              />
            </View>
            <View>
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
            </View>
          </View>
          <View style={{marginTop: 45}}>
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
              containerStyle={{marginTop: 14}}
            />
          </View>
          <View style={{marginTop: 72, marginBottom: 60}}>
            <CustomButton
              label="Masuk"
              type="fill"
              style={{paddingVertical: 11}}
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
