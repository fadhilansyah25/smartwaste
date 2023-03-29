import {useReducer, useRef} from 'react';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {RegisterForm, registerFormReducer} from './reducer';

const registerFormInitialState: RegisterForm = {
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  confirmPasswordErrorMessage: '',
  phoneNumberErrorMessage: '',
  emailErrorMessage: '',
  passwordErrorMessage: '',
};

const stringFieldIDs = [
  'email',
  'phoneNumber',
  'password',
  'confirmPassword',
] as const;

export const usePreRegis = ({navigation}: AuthStackProps) => {
  const handleRegisterSubmit = () => {
    navigation.navigate('AccVerification');
  };

  const [register, updateRegister] = useReducer(
    registerFormReducer,
    registerFormInitialState,
  );

  const stringFieldRefs = stringFieldIDs.map(() => useRef<any>());

  const posInd = (id: (typeof stringFieldIDs)[number]) =>
    stringFieldIDs.indexOf(id);
  const isLast = (id: (typeof stringFieldIDs)[number]) =>
    posInd(id) === stringFieldIDs.length - 1;

  return {
    handleToVerif: handleRegisterSubmit,
    register,
    updateRegister,
    posInd,
    isLast,
    stringFieldRefs,
  } as const;
};
