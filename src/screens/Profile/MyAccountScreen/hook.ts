import React from 'react';
import {RootStackProps} from '@src/App';
import firebaseServices from '@src/services/firebaseServices';
import {useNavigation} from '@react-navigation/native';

export const useMyAccoutScreen = () => {
  const navigation = useNavigation<RootStackProps['navigation']>();
  const user = firebaseServices.firebaseCheckCurrentUser();

  const handleLogout = () => {
    firebaseServices.firebaseLogout();
    navigation.replace('Auth');
  };

  return {handleLogout, user} as const;
};
