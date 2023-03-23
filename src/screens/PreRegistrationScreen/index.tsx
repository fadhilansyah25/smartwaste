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
import InputText from '../../component/InputText';
import {colors} from '../../const/colors';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {style} from './style';
import {usePreRegis} from './usePreRegis';

const PreRegistrationScreen = (ScreenProps: AuthStackProps) => {
  const {handleToVerif} = usePreRegis(ScreenProps);
  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
          <View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/illustration-2.png')}
                style={style.illustration}
              />
            </View>
            <Text style={style.mainText}>Send Your Waste</Text>
            <Text style={style.descText}>
              Kirimkan Limbah anorganik Anda untuk {'\n'} didaur ulang secara
              bertanggung jawab
            </Text>
          </View>
          <View style={{marginTop: 45}}>
            <InputText
              placeholder="Masukan username"
              label="Username"
              returnKeyType="next"
            />
            <InputText
              keyboardType="email-address"
              placeholder="Masukan email"
              label="Email"
              returnKeyType="next"
              containerStyle={{marginTop: 14}}
            />
            <InputText
              keyboardType="phone-pad"
              placeholder="Masukan No. telepon"
              label="No. Telepon"
              returnKeyType="next"
              containerStyle={{marginTop: 14}}
            />
            <InputText
              keyboardType="default"
              placeholder="Masukan kata sandi"
              label="Kata Sandi"
              returnKeyType="next"
              isPassword
              containerStyle={{marginTop: 14}}
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
          <View style={{marginTop: 72, marginBottom: 28}}>
            <CustomButton
              label="Daftar"
              type="fill"
              style={{paddingVertical: 11}}
              onPress={handleToVerif}
            />
            <Text
              style={{
                fontSize: 12,
                color: colors.T500,
                marginTop: 14,
                textAlign: 'justify',
              }}>
              Dengan mendaftar, anda telah menyetujui dan akan mengikuti seluruh
              kebijakan privasi yang telah ditentukan oleh SmartWaste.
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreRegistrationScreen;
