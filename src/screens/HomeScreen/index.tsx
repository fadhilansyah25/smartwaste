import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {style} from './style';
import auth from '@react-native-firebase/auth';
import {RootStackProps} from '../../App';
import {colors} from '../../const/colors';

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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: colors.T600, fontWeight: '600', fontSize: 16}}>
            Selamat Datang!
          </Text>
          <Text>{auth().currentUser?.displayName}</Text>
        </View>
        <TouchableOpacity onPress={handleSignOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
