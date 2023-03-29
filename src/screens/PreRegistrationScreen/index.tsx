import React, {useRef} from 'react';
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
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {style} from './style';
import {usePreRegis} from './hook';
import InputPhoneNumber from '../../component/InputPhoneNumber';

const PreRegistrationScreen = (screenProps: AuthStackProps) => {
  const {
    handleToVerif,
    register,
    updateRegister,
    posInd,
    isLast,
    stringFieldRefs,
  } = usePreRegis(screenProps);

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
          <View style={{marginTop: 28}}>
            <InputText
              keyboardType="email-address"
              placeholder="Masukan email"
              label="Email"
              value={register.email}
              onChangeText={e =>
                updateRegister({
                  type: 'HANDLE_INPUT_EMAIL',
                  payload: e,
                })
              }
              ref={stringFieldRefs[posInd('email')]}
              blurOnSubmit={isLast('email')}
              returnKeyType={isLast('email') ? 'done' : 'next'}
              onSubmitEditing={
                isLast('email')
                  ? undefined
                  : () => stringFieldRefs[posInd('email') + 1].current.focus()
              }
            />
            <InputPhoneNumber
              placeholder="855 2342 8900"
              label="No. Telepon"
              containerStyle={{marginTop: 8}}
              value={register.phoneNumber}
              onChangeText={e => {
                updateRegister({
                  type: 'HANDLE_INPUT_PHONE',
                  payload: e,
                });
              }}
              ref={stringFieldRefs[posInd('phoneNumber')]}
              blurOnSubmit={isLast('phoneNumber')}
              returnKeyType={isLast('phoneNumber') ? 'done' : 'next'}
              maxLength={14}
              onSubmitEditing={
                isLast('phoneNumber')
                  ? undefined
                  : () =>
                      stringFieldRefs[posInd('phoneNumber') + 1].current.focus()
              }
            />
            <InputText
              keyboardType="default"
              placeholder="Masukan kata sandi"
              label="Kata Sandi"
              isPassword
              containerStyle={{marginTop: 8}}
              value={register.password}
              onChangeText={e =>
                updateRegister({
                  type: 'HANDLE_INPUT_PASSWORD',
                  payload: e,
                })
              }
              ref={stringFieldRefs[posInd('password')]}
              blurOnSubmit={isLast('password')}
              returnKeyType={isLast('password') ? 'done' : 'next'}
              onSubmitEditing={
                isLast('password')
                  ? undefined
                  : () =>
                      stringFieldRefs[posInd('password') + 1].current.focus()
              }
            />
            <InputText
              keyboardType="default"
              placeholder="Masukan kata sandi"
              label="Ulangi Kata Sandi"
              isPassword
              containerStyle={{marginTop: 8}}
              value={register.confirmPassword}
              onChangeText={e =>
                updateRegister({
                  type: 'HANDLE_INPUT_CONFIRM_PASSWORD',
                  payload: e,
                })
              }
              ref={stringFieldRefs[posInd('confirmPassword')]}
              blurOnSubmit={isLast('confirmPassword')}
              returnKeyType={isLast('confirmPassword') ? 'done' : 'next'}
              onSubmitEditing={
                isLast('confirmPassword')
                  ? undefined
                  : () =>
                      stringFieldRefs[
                        posInd('confirmPassword') + 1
                      ].current.focus()
              }
            />
          </View>
          <View style={{marginTop: 72, marginBottom: 32}}>
            <CustomButton
              label="Daftar"
              type="fill"
              style={{paddingVertical: 11}}
              onPress={handleToVerif}
            />
            <Text style={style.discText}>
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
