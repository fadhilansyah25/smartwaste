import {formatPhoneNumber} from '../../utils/regexFormat';

export type RegisterForm = {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  rePassword: string;
};

export type ReducerActionType = 'HANDLE_INPUT_TEXT' | 'HANDLE_INPUT_PHONE';

type ReducerAction = {
  type: ReducerActionType;
  field: keyof RegisterForm;
  payload: string;
};

export const registerFormReducer = (
  state: RegisterForm,
  action: ReducerAction,
) => {
  switch (action.type) {
    case 'HANDLE_INPUT_TEXT':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'HANDLE_INPUT_PHONE':
      state.phoneNumber = formatPhoneNumber(action.payload);
    default:
      return state;
  }
};
