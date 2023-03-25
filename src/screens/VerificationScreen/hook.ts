import React from 'react';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';

export const useVerificationScreen = ({navigation}: AuthStackProps) => {
  const handleToPersonalForm = () => {
    navigation.navigate('PersonalDataForm');
  };

  return {handleToPersonalForm} as const;
};
