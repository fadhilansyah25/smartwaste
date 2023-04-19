import React from 'react';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {PersonalDataType, reducer} from './reducer';
import {minBirthday} from '../../utils/getInitialDate';
import {firebaseCreateUser} from '../../services/firebase';
import {RegisterContext} from '../../store/context/RegisterContext';

const PersonalDataForm: PersonalDataType = {
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

      await firebaseCreateUser({
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
