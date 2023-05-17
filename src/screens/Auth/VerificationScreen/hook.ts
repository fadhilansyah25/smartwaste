import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useContext, useState} from 'react';
import {AuthStackProps} from '@src/navigation/StackNavigation/AuthStackScreen';
import FirebaseServices from '@src/services/firebaseServices';
import {RegisterContext} from '@src/store/context/RegisterContext';
import {useNavigation} from '@react-navigation/native'

export const useVerificationScreen = () => {
  const [code, setCode] = useState('');
  const {state} = useContext(RegisterContext);
  const navigation = useNavigation<AuthStackProps['navigation']>()

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
