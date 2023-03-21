import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {PreRegistrationScreen} from '../../screens/PreRegistrationScreen/PreRegistrationScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import {CustomHeader} from '../../component/CustomHeader/CustomHeader';
import {VerificationScreen} from '../../screens/VerificationScreen/VerificationScreen';

export type AuthStackParamaterList = {
  Login: undefined;
  PreRegister: undefined;
  AccVerification: undefined;
  Main: undefined;
};

export type AuthStackProps = NativeStackScreenProps<AuthStackParamaterList>;
const AuthStack = createNativeStackNavigator<AuthStackParamaterList>();

export const AuthStackScreen = () => {
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
    </AuthStack.Navigator>
  );
};
