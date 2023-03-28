import {useReducer, useRef} from 'react';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {RegisterForm, registerFormReducer} from './reducer';

const registerFormInitialState: RegisterForm = {
  username: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

const stringFieldIDs = [
  'username',
  'email',
  'phoneNumber',
  'password',
  'confirmPassword',
] as const;

export const usePreRegis = ({navigation}: AuthStackProps) => {
  const handleToVerif = () => {
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
    handleToVerif,
    register,
    updateRegister,
    posInd,
    isLast,
    stringFieldRefs,
  } as const;
};
