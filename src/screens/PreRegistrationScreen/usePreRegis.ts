import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';

export const usePreRegis = ({navigation}: AuthStackProps) => {
  const handleToVerif = () => {
    navigation.navigate('AccVerification');
  };
  return {handleToVerif} as const;
};
