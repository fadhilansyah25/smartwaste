import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useContext, useState} from 'react';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {confirmCode} from '../../services/firebase';
import {AppContext} from '../../store/context';

export const useVerificationScreen = ({navigation}: AuthStackProps) => {
  const [code, setCode] = useState('');
  const {state} = useContext(AppContext);

  const handleConfirmCode = async () => {
    try {
      const credential = confirmCode(
        state.confirmation as FirebaseAuthTypes.PhoneAuthSnapshot,
        code,
      );
      let userData = await auth().currentUser!.linkWithCredential(credential);
      console.log(userData);
    } catch (error: any) {
      if (error.code == 'auth/invalid-verification-code') {
        console.log('Invalid code.');
      } else {
        console.log('Account linking error');
      }
    }

    // navigation.navigate('PersonalDataForm');
  };

  return {handleConfirmCode, code, setCode} as const;
};
