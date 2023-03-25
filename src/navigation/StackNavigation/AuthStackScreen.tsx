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

export type AuthStackParamaterList = {
  Login: undefined;
  PreRegister: undefined;
  AccVerification: undefined;
  PersonalDataForm: undefined;
  Main: undefined;
};

export type AuthStackProps = NativeStackScreenProps<AuthStackParamaterList>;
const AuthStack = createNativeStackNavigator<AuthStackParamaterList>();

const AuthStackScreen = () => {
  return (
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
            <CustomHeader HeaderProps={props} LeftTitle="Pendaftaran" />
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
            <CustomHeader HeaderProps={props} LeftTitle="Verifikasi Kode" />
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
            <CustomHeader HeaderProps={props} LeftTitle="Form Data Pribadi" />
          ),
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
