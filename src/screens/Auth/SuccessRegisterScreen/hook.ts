import {useNavigation} from '@react-navigation/native';
import {RootStackProps} from '@src/App';

export const useSuccesRegisterScreen = () => {
  const navigation = useNavigation<RootStackProps['navigation']>();
  const handleToLogin = () => {
    navigation.navigate('Main');
  };

  return {handleToLogin} as const;
};
