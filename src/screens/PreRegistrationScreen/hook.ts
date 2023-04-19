import {useContext, useReducer, useRef} from 'react';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {firebaseAuthRegister, verifyPhoneNumber} from '../../services/firebase';
import {RegisterContext} from '../../store/context/RegisterContext';
import {Types} from '../../store/reducer/RegsiterReducer';
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
  const {dispatch} = useContext(RegisterContext);
  const [register, updateRegister] = useReducer(
    registerFormReducer,
    registerFormInitialState,
  );

  const handleRegisterSubmit = async () => {
    if (
      register.confirmPasswordErrorMessage === '' &&
      register.passwordErrorMessage === '' &&
      register.phoneNumberErrorMessage === '' &&
      register.emailErrorMessage === ''
    ) {
      // verify phone number
      await verifyPhoneNumber('+62 ' + register.phoneNumber)
        .then(async confirmation => {
          dispatch({
            type: Types.SetConfirm,
            payload: {
              confirmation: confirmation,
            },
          });

          // create an account
          await firebaseAuthRegister({
            email: register.email,
            password: register.password,
          })
            .then(credential => {
              dispatch({
                type: Types.SetCredit,
                payload: {
                  userCredential: credential,
                },
              });

              // nvaigate to verfication phone code screen
              navigation.navigate('AccVerification');
            })
            // catch error from create account
            .catch(error => {
              console.log(error.code);
            });
          // end of create an account function
        })
        // catch error from verify phone number
        .catch(error => {
          console.log(error.code);
        });
      // end of verify phone number function
    }
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
