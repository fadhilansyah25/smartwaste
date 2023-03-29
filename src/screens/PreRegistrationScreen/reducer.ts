import {formatPhoneNumber} from '../../utils/regexFormat';

export type RegisterForm = {
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  confirmPasswordErrorMessage: string;
};

export type ReducerActionType =
  | 'HANDLE_INPUT_EMAIL'
  | 'HANDLE_INPUT_PHONE'
  | 'HANDLE_INPUT_PASSWORD'
  | 'HANDLE_INPUT_CONFIRM_PASSWORD';

type ReducerAction = {
  type: ReducerActionType;
  payload: string;
};

export const registerFormReducer = (
  state: RegisterForm,
  action: ReducerAction,
) => {
  switch (action.type) {
    case 'HANDLE_INPUT_EMAIL':
      return {
        ...state,
        ['email']: action.payload,
      };
    case 'HANDLE_INPUT_PHONE':
      const formatedNumber = formatPhoneNumber(action.payload);
      return {
        ...state,
        ['phoneNumber']: formatedNumber,
      };
    default:
      return state;
  }
};
