import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';

export const usePersonalDataFromScreen = ({navigation}: AuthStackProps) => {
  const handleToPersonalForm = () => {
    navigation.navigate('PersonalDataForm');
  };

  return {handleToPersonalForm} as const;
};
