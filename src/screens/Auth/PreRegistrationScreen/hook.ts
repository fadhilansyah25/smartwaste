import {useContext, useReducer, useRef} from 'react';
import {AuthStackProps} from '@src/navigation/StackNavigation/AuthStackScreen';
import FirebaseServices from '@src/services/firebaseServices';
import {RegisterContext} from '@src/store/context/RegisterContext';
import {Types} from '@src/store/reducer/RegitserReducer';
import {registerFormReducer} from './reducer';
import {useNavigation} from '@react-navigation/native';

const registerFormInitialState = {
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

export const usePreRegis = () => {
  const {dispatch} = useContext(RegisterContext);
  const [register, updateRegister] = useReducer(
    registerFormReducer,
    registerFormInitialState,
  );
  const navigation = useNavigation<AuthStackProps['navigation']>();

  const handleRegisterSubmit = async () => {
    if (
      register.confirmPasswordErrorMessage === '' &&
      register.passwordErrorMessage === '' &&
      register.phoneNumberErrorMessage === '' &&
      register.emailErrorMessage === ''
    ) {
      // verify phone number
      await FirebaseServices.verifyPhoneNumber('+62 ' + register.phoneNumber)
        .then(async confirmation => {
          dispatch({
            type: Types.SetConfirm,
            payload: {
              confirmation: confirmation,
            },
          });

          // create an account
          await FirebaseServices.firebaseAuthRegister({
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

              // navigate to verfication phone code screen
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
