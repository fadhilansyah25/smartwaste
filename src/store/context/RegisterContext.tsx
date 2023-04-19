import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React from 'react';
import {
  ConfirmationActions,
  confirmationReducer,
  credentialReducer,
  UserCredentialActions,
} from '../reducer/RegsiterReducer';

type InitialStateType = {
  confirmation: FirebaseAuthTypes.PhoneAuthSnapshot | null;
  userCredential: FirebaseAuthTypes.UserCredential | null;
};

const initialState: InitialStateType = {
  confirmation: null,
  userCredential: null,
};

const RegisterContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<ConfirmationActions | UserCredentialActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  {confirmation, userCredential}: InitialStateType,
  action: ConfirmationActions | UserCredentialActions,
) => ({
  confirmation: confirmationReducer(confirmation, action),
  userCredential: credentialReducer(userCredential, action),
});

const RegisterProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);

  return (
    <RegisterContext.Provider value={{state, dispatch}}>
      {children}
    </RegisterContext.Provider>
  );
};

export {RegisterContext, RegisterProvider};
