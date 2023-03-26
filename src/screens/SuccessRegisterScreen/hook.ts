import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';

export const useSuccesRegisterScreen = ({navigation}: AuthStackProps) => {
  const handleToLogin = () => {
    navigation.navigate('Login');
  };

  return {handleToLogin} as const;
};
