import {RootStackProps} from '../../App';

export const useSuccesRegisterScreen = ({navigation}: RootStackProps) => {
  const handleToLogin = () => {
    navigation.navigate('Main');
  };

  return {handleToLogin} as const;
};
