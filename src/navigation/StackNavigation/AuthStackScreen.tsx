import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import PreRegistrationScreen from '../../screens/PreRegistrationScreen';
import LoginScreen from '../../screens/LoginScreen';
import CustomHeader from '../../component/CustomHeader';
import VerificationScreen from '../../screens/VerificationScreen';
import PersonalDataFormScreen from '../../screens/PersonalDataFormScreen';
import SuccessRegisterScreen from '../../screens/SuccessRegisterScreen';
import {AppProvider} from '../../store/context';

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
