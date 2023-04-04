import {SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';
import {style} from './style';
import auth from '@react-native-firebase/auth';
import {RootStackProps} from '../../App';

const HomeScreen = ({navigation}: RootStackProps) => {
  const handleSignOut = () => {
    auth().signOut();
    navigation.navigate('Auth');
  };
  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <TouchableOpacity onPress={handleSignOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
