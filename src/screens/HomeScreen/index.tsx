import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {style} from './style';
import auth from '@react-native-firebase/auth';
import {RootStackProps} from '../../App';
import {colors} from '../../const/colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../component/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';

const minHeight = Dimensions.get('screen').height;

const HomeScreen = ({navigation}: RootStackProps) => {
  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{minHeight: minHeight}}>
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
                gap: 10,
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

        {/* Data Card */}
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            gap: 10,
            marginTop: 20,
          }}>
          <View style={{flex: 1, height: 140}}>
            <LinearGradient
              colors={['#4CB8C4', '#3CD3AD']}
              style={style.linearCardContainer}
              start={{x: 0, y: 0}}
              end={{x: 0.7, y: 0}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 24,
                    backgroundColor: '#EABA3D',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon
                    name="trash"
                    size={12}
                    color={colors.white}
                    style={{top: -0.5, left: -0.5}}
                  />
                </View>
                <Text style={{fontWeight: '700', color: colors.white}}>
                  Sampah Terkirim
                </Text>
              </View>
              <Text
                style={{fontSize: 22, fontWeight: '700', color: colors.white}}>
                10,75
              </Text>
              <Text style={{color: colors.white, fontWeight: '600'}}>
                Kilogram
              </Text>
            </LinearGradient>
          </View>
          <View style={{flex: 1, height: 140}}>
            <LinearGradient
              colors={['#EABA3D', '#FEB47B']}
              style={style.linearCardContainer}
              start={{x: 0, y: 0}}
              end={{x: 0.7, y: 0}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 24,
                    backgroundColor: '#4CB8C4',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon
                    name="coins"
                    size={12}
                    color={colors.white}
                    style={{top: -0.5, left: -0.5}}
                  />
                </View>
                <Text style={{fontWeight: '700', color: colors.white}}>
                  Poin Tercapai
                </Text>
              </View>
              <Text
                style={{fontSize: 22, fontWeight: '700', color: colors.white}}>
                1.200
              </Text>
              <Text style={{color: colors.white, fontWeight: '600'}}>Poin</Text>
            </LinearGradient>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
