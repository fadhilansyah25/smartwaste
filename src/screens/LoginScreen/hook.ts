import React from 'react';
import {AuthStackProps} from '@src/navigation/StackNavigation/AuthStackScreen';
import {SignInForm, signInFormReducer} from './reducer';
import FirebaseServices from '@src/services/firebaseServices';

const signInFormInitialState: SignInForm = {
  email: '',
  password: '',
  emailErrorMessage: '',
  passwordErrorMessage: '',
};

export const useLoginScreen = ({navigation}: AuthStackProps) => {
  const [state, dispatch] = React.useReducer(
    signInFormReducer,
    signInFormInitialState,
  );
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
