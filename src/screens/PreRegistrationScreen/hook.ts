import {useContext, useReducer, useRef} from 'react';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {firebaseAuthRegister, verifyPhoneNumber} from '../../services/firebase';
import {AppContext} from '../../store/context';
import {Types} from '../../store/reducer';
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
  const {dispatch} = useContext(AppContext);
  const [register, updateRegister] = useReducer(
    registerFormReducer,
    registerFormInitialState,
  );

  const handleRegisterSubmit = async () => {
    // if (
    //   register.confirmPasswordErrorMessage === '' &&
    //   register.passwordErrorMessage === '' &&
    //   register.phoneNumberErrorMessage === '' &&
    //   register.emailErrorMessage === ''
    // ) {
    //   await verifyPhoneNumber('+62 ' + register.phoneNumber)
    //     .then(async confirmation => {
    //       dispatch({
    //         type: Types.SetConfirm,
    //         payload: {
    //           confirmation: confirmation,
    //         },
    //       });
    //       await firebaseAuthRegister({
    //         email: register.email,
    //         password: register.password,
    //       })
    //         .then(credential => {
    //           dispatch({
    //             type: Types.SetCredit,
    //             payload: {
    //               userCredential: credential,
    //             },
    //           });
    //         })
    //         .catch(error => {
    //           console.log(error.code);
    //         });
    //     })
    //     .catch(error => {
    //       console.log(error.code);
    //     });
    // }
    navigation.navigate('AccVerification');
  };

  const stringFieldRefs = stringFieldIDs.map(() => useRef<any>());

  const posInd = (id: (typeof stringFieldIDs)[number]) =>
    stringFieldIDs.indexOf(id);
  const isLast = (id: (typeof stringFieldIDs)[number]) =>
    posInd(id) === stringFieldIDs.length - 1;

  return {
    handleRegisterSubmit,
    register,
    updateRegister,
    posInd,
    isLast,
    stringFieldRefs,
  } as const;
};
