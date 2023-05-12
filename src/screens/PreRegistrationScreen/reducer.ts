import {
  emailFormat,
  formatPhoneNumber,
  passwordFormat,
  phoneNumberFormat,
} from '../../utils/regexFormat';

type RegisterForm = {
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  emailErrorMessage: string;
  phoneNumberErrorMessage: string;
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
      if (!action.payload.match(emailFormat)) {
        return {
          ...state,
          email: action.payload,
          emailErrorMessage:
            'Please enter a valid email: eg. example@domain.com',
        } as RegisterForm;
      } else {
        return {
          ...state,
          email: action.payload,
          emailErrorMessage: '',
        } as RegisterForm;
      }
    case 'HANDLE_INPUT_PHONE':
      const formatedNumber = formatPhoneNumber(action.payload);
      if (!('+62 ' + formatedNumber).match(phoneNumberFormat)) {
        return {
          ...state,
          phoneNumber: formatedNumber,
          phoneNumberErrorMessage: 'Invalid phone number!',
        } as RegisterForm;
      } else {
        return {
          ...state,
          phoneNumber: formatedNumber,
          phoneNumberErrorMessage: '',
        } as RegisterForm;
      }
    case 'HANDLE_INPUT_PASSWORD':
      if (!action.payload.match(passwordFormat)) {
        return {
          ...state,
          password: action.payload,
          passwordErrorMessage:
            'Minimum eight characters, at least one letter and one number',
        } as RegisterForm;
      } else {
        return {
          ...state,
          password: action.payload,
          passwordErrorMessage: '',
        } as RegisterForm;
      }
    case 'HANDLE_INPUT_CONFIRM_PASSWORD':
      if (action.payload !== state.password) {
        return {
          ...state,
          confirmPassword: action.payload,
          confirmPasswordErrorMessage: 'Passwords do not match',
        } as RegisterForm;
      } else {
        return {
          ...state,
          confirmPassword: action.payload,
          confirmPasswordErrorMessage: '',
        } as RegisterForm;
      }
    default:
      return state;
  }
};
