import React from 'react';
import {signInFormReducer} from './reducer';
import FirebaseServices from '@src/services/firebaseServices';
import {useNavigation} from '@react-navigation/native'
import { AuthStackProps } from '@src/navigation/StackNavigation/AuthStackScreen';

const signInFormInitialState = {
  email: '',
  password: '',
  emailErrorMessage: '',
  passwordErrorMessage: '',
};

export const useLoginScreen = () => {
  const [state, dispatch] = React.useReducer(
    signInFormReducer,
    signInFormInitialState,
  );
  const navigation = useNavigation<AuthStackProps['navigation']>()

  const handleLogin = () => {
    if (state.emailErrorMessage === '' && state.passwordErrorMessage === '') {
      FirebaseServices.fireBaseAuthLogin({
        email: state.email,
        password: state.password,
      })
        .then(() => {
          navigation.navigate('Main');
        })
        .catch(error => {
          console.log(error.code);
        });
    }
  };

  const handleToRegister = () => {
    navigation.navigate('PreRegister');
  };
  return {
    handleToRegister,
    state,
    dispatch,
    handleLogin,
  } as const;
};
