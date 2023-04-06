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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 14,
          }}>
          <Text style={{color: colors.T600, fontWeight: '600', fontSize: 16}}>
            Selamat Datang!
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 10}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',
                  color: colors.T600,
                }}>
                {auth().currentUser?.displayName}
              </Text>
              <Text style={{fontSize: 12, lineHeight: 12}}>volunter</Text>
            </View>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: 'gray',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>FA</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={handleSignOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
