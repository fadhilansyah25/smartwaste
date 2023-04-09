import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import {style} from './style';
import auth from '@react-native-firebase/auth';
import {RootStackProps} from '../../App';
import {colors} from '../../const/colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../component/Button';

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
        {/* Greetings bar and avatar */}
        <View style={style.greetingsBarContainer}>
          <Text style={{color: colors.T600, fontWeight: '600', fontSize: 16}}>
            Selamat Datang!
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 10}}>
              <Text style={style.displayName}>
                {auth().currentUser?.displayName}
              </Text>
              <Text style={{fontSize: 12, lineHeight: 12}}>volunter</Text>
            </View>
            <View style={style.avatarBagde}>
              <Text style={{textAlign: 'center'}}>FA</Text>
            </View>
          </View>
        </View>

        {/* Main Banner */}
        <View style={style.mainBannerContainer}>
          <LinearGradient
            colors={['#4CB8C4', '#3CD3AD']}
            style={style.mainBannerGradient}
            start={{x: 0, y: 0}}
            end={{x: 0.7, y: 0}}>
            {/* Banner text copy */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 14,
                paddingHorizontal: 16,
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 18,
                    fontWeight: '700',
                  }}>
                  Send Your Waste
                </Text>
                <Text style={{color: colors.white, fontSize: 12}}>
                  Yuk buat transaksi pertamamu! Packing kemasan bekas Anda dan
                  kirim ke mitra Smart Waste
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/image/illustration-5.png')}
                  style={style.illustration}
                />
              </View>
            </View>

            {/* Banner Button */}
            <CustomButton
              style={{
                backgroundColor: colors.O800,
                marginVertical: 14,
                marginHorizontal: 16,
              }}
              label="Kirim Sekarang"
              type="fill"
            />
          </LinearGradient>
        </View>

        <TouchableOpacity onPress={handleSignOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
