import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import PreRegistrationScreen from '@src/screens/PreRegistrationScreen';
import LoginScreen from '@src/screens/LoginScreen';
import CustomHeader from '@src/component/CustomHeader';
import VerificationScreen from '@src/screens/VerificationScreen';
import PersonalDataFormScreen from '@src/screens/PersonalDataFormScreen';
import SuccessRegisterScreen from '@src/screens/SuccessRegisterScreen';
import {AppProvider} from '@src/store/context';

export type AuthStackParamaterList = {
  Login: undefined;
  PreRegister: undefined;
  AccVerification: undefined;
  PersonalDataForm: undefined;
  SuccessRegister: undefined;
  Main: undefined;
};

export type AuthStackProps = NativeStackScreenProps<AuthStackParamaterList>;
const AuthStack = createNativeStackNavigator<AuthStackParamaterList>();

const AuthStackScreen = () => {
  return (
    <AppProvider>
      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen
          name="PreRegister"
          component={PreRegistrationScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: true,
            header: props => (
              <CustomHeader headerProps={props} rightTitle="Pendaftaran" />
            ),
          }}
        />
        <AuthStack.Screen
          name="AccVerification"
          component={VerificationScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: true,
            header: props => (
              <CustomHeader headerProps={props} rightTitle="Verifikasi Kode" />
            ),
          }}
        />
        <AuthStack.Screen
          name="PersonalDataForm"
          component={PersonalDataFormScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: true,
            header: props => (
              <CustomHeader headerProps={props} rightTitle="Form Data Pribadi" />
            ),
          }}
        />
        <AuthStack.Screen
          name="SuccessRegister"
          component={SuccessRegisterScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
      </AuthStack.Navigator>
    </AppProvider>
  );
};

export default AuthStackScreen;
