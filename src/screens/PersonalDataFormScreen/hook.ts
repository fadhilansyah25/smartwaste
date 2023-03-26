import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';

export const usePersonalDataFromScreen = ({navigation}: AuthStackProps) => {
  const handleSubmit = () => {
    navigation.navigate('SuccessRegister');
  };

  return {handleSubmit} as const;
};
