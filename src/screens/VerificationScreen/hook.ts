import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useContext, useState} from 'react';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import FirebaseServices from '@src/services/firebaseServices';
import {RegisterContext} from '../../store/context/RegisterContext';

export const useVerificationScreen = ({navigation}: AuthStackProps) => {
  const [code, setCode] = useState('');
  const {state} = useContext(RegisterContext);

  const handleConfirmCode = async () => {
    try {
      const credential = FirebaseServices.confirmCode({
        confirm: state.confirmation as FirebaseAuthTypes.PhoneAuthSnapshot,
        code,
      });
      const _ = await auth().currentUser!.linkWithCredential(credential);

      //
      navigation.navigate('PersonalDataForm');
    } catch (error: any) {
      if (error.code == 'auth/invalid-verification-code') {
        console.log('Invalid code.');
      } else {
        console.log('Account linking error');
      }
    }
  };

  return {handleConfirmCode, code, setCode} as const;
};
