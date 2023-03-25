import React from 'react';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';

export const useLoginScreen = ({navigation}: AuthStackProps) => {
  const handleToRegister = () => {
    navigation.navigate('PreRegister');
  };
  return {
    handleToRegister,
  } as const;
};
