import {emailFormat, passwordFormat} from '../../utils/regexFormat';

type SignInForm = {
  email: string;
  password: string;
  emailErrorMessage: string;
  passwordErrorMessage: string;
};

export type ReducerActionType = 'HANDLE_INPUT_EMAIL' | 'HANDLE_INPUT_PASSWORD';

type ReducerAction = {
  type: ReducerActionType;
  payload: string;
};

export const signInFormReducer = (state: SignInForm, action: ReducerAction) => {
  switch (action.type) {
    case 'HANDLE_INPUT_EMAIL':
      if (!action.payload.match(emailFormat)) {
        return {
          ...state,
          email: action.payload,
          emailErrorMessage:
            'Please enter a valid email: eg. example@domain.com',
        } as SignInForm;
      } else {
        return {
          ...state,
          email: action.payload,
          emailErrorMessage: '',
        } as SignInForm;
      }
    case 'HANDLE_INPUT_PASSWORD':
      if (!action.payload.match(passwordFormat)) {
        return {
          ...state,
          password: action.payload,
          passwordErrorMessage:
            'Minimum eight characters, at least one letter and one number',
        } as SignInForm;
      } else {
        return {
          ...state,
          password: action.payload,
          passwordErrorMessage: '',
        } as SignInForm;
      }
    default:
      return state;
  }
};
