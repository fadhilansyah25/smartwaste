import {useReducer, useRef} from 'react';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';

type RegisterForm = {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  rePassword: string;
};

const registerForm: RegisterForm = {
  username: '',
  email: '',
  phoneNumber: '',
  password: '',
  rePassword: '',
};

type ReducerActionType = 'HANDLE_INPUT_TEXT';

type ReducerAction = {
  type: ReducerActionType;
  field: keyof RegisterForm;
  payload: string;
};

export const formatPhoneNumber = (text: string) => {
  let formattedText = text.split('-').join('');
  if (formattedText.length > 0) {
    formattedText = formattedText
      .replace(/^(\d{3})(\d)/g, '$1-$2') // add space after 3rd character
      .replace(/(\d{4})(\d)/g, '$1-$2'); // add space after 8th character
  }
  return formattedText;
};

const registerFormReducer = (state: RegisterForm, action: ReducerAction) => {
  switch (action.type) {
    case 'HANDLE_INPUT_TEXT':
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

export const usePreRegis = ({navigation}: AuthStackProps) => {
  const handleToVerif = () => {
    navigation.navigate('AccVerification');
  };

  const [register, updateRegister] = useReducer(
    registerFormReducer,
    registerForm,
  );

  const stringFieldIDs = [
    'username',
    'email',
    'phoneNumber',
    'password',
    're-password',
  ];

  const stringFieldRefs = stringFieldIDs.map(() => useRef<any>());

  const posInd = (id: string) => stringFieldIDs.indexOf(id);
  const isLast = (id: string) => posInd(id) === stringFieldIDs.length - 1;

  return {
    handleToVerif,
    register,
    updateRegister,
    posInd,
    isLast,
    stringFieldRefs,
  } as const;
};
