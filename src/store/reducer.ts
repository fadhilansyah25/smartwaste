import {FirebaseAuthTypes} from '@react-native-firebase/auth';

type ActionMap<M extends {[index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SetConfirm = 'SET_CONFIRMATION',
  SetCredit = 'SET_USER_CREDENTIAL',
}

// Consfirmation Reducer
type ConfirmPayload = {
  [Types.SetConfirm]: {
    confirmation: FirebaseAuthTypes.PhoneAuthSnapshot;
  };
};

export type ConfirmationActions =
  ActionMap<ConfirmPayload>[keyof ActionMap<ConfirmPayload>];

export const confirmationReducer = (
  state: FirebaseAuthTypes.PhoneAuthSnapshot | null,
  action: ConfirmationActions | UserCredentialActions,
) => {
  switch (action.type) {
    case 'SET_CONFIRMATION':
      return action.payload.confirmation;
    default:
      return state;
  }
};

// UserCredential Reducer
type UserCredentialPayload = {
  [Types.SetCredit]: {
    userCredential: FirebaseAuthTypes.UserCredential;
  };
};

export type UserCredentialActions =
  ActionMap<UserCredentialPayload>[keyof ActionMap<UserCredentialPayload>];

export const credentialReducer = (
  state: FirebaseAuthTypes.UserCredential | null,
  action: ConfirmationActions | UserCredentialActions,
) => {
  switch (action.type) {
    case 'SET_USER_CREDENTIAL':
      return action.payload.userCredential;
    default:
      return state;
  }
};
