import React from 'react';
import {AuthStackProps} from '@src/navigation/StackNavigation/AuthStackScreen';
import {reducer} from './reducer';
import {minBirthday} from '@src/utils/getInitialDate';
import FirebaseServices from '@src/services/firebaseServices';
import {RegisterContext} from '@src/store/context/RegisterContext';

const PersonalDataForm = {
  fullName: '',
  birthDate: minBirthday,
  address: '',
  provincesID: 11,
  regencyID: 1101,
  districtID: 1101010,
};

export const usePersonalDataFromScreen = ({navigation}: AuthStackProps) => {
  const [state, dispatch] = React.useReducer(reducer, PersonalDataForm);
  const context = React.useContext(RegisterContext);

  const handleSubmit = async () => {
    if (
      state.fullName !== '' &&
      state.address !== '' &&
      context.state.userCredential?.user.uid
    ) {
      await context.state.userCredential?.user
        .updateProfile({displayName: state.fullName})
        .catch(error => {
          console.log(error.code);
        });

      await FirebaseServices.firebaseCreateUser({
        uid: context.state.userCredential?.user.uid,
        ...state,
      })
        .then(() => {
          navigation.navigate('SuccessRegister');
        })
        .catch(error => console.log(error.code));
    }
  };

  return {handleSubmit, state, dispatch} as const;
};
