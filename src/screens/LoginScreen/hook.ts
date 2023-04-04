import React from 'react';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {SignInForm, signInFormReducer} from './reducer';
import {fireBaseAuthLogin} from '../../services/firebase';

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
      fireBaseAuthLogin({email: state.email, password: state.password})
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
