import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {style} from './style';
import auth from '@react-native-firebase/auth';
import {RootStackProps} from '../../App';
import {colors} from '../../const/colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../component/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import VespaSvg from '../../assets/svg/vespa.svg';
import BoxSvg from '../../assets/svg/box.svg';
import GiftSvg from '../../assets/svg/gift.svg';
import {tutorData, tutorBannerData} from '../../const/const-data';
import GreetingsBar from '../../component/GreetingsBar';

const HomeScreen = ({navigation}: RootStackProps) => {
  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {/* Greetings bar and avatar */}
        <GreetingsBar displayName={auth().currentUser?.displayName as string} />

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
          {/* Card Sampah Terkirim  */}
          <View style={{flex: 1, height: 132}}>
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

          {/* Card Poin Tercapai */}
          <View style={{flex: 1, height: 132}}>
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

        {/* Menu Button Container */}
        <View>
          <View style={style.menuButtonContainer}>
            {/* Button Jemput Sampah */}
            <View style={{alignItems: 'center', gap: 8}}>
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 56,
                  backgroundColor: '#C3E2A4',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <VespaSvg />
              </View>
              <Text style={{fontSize: 12, fontWeight: '700'}}>
                Jemput Sampah
              </Text>
            </View>

            {/* Button Kirim Sampah */}
            <View style={{alignItems: 'center', gap: 8}}>
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 56,
                  backgroundColor: 'rgba(189, 0, 255, 0.19)',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <BoxSvg />
              </View>
              <Text style={{fontSize: 12, fontWeight: '700'}}>
                Kirim Sampah
              </Text>
            </View>

            {/* Button Poin Sampah */}
            <View style={{alignItems: 'center', gap: 8}}>
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 56,
                  backgroundColor: 'rgba(44, 90, 252, 0.27)',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <GiftSvg />
              </View>
              <Text style={{fontSize: 12, fontWeight: '700'}}>Redeem Poin</Text>
            </View>
          </View>
        </View>

        {/* List Tata Cara Pengiriman  */}
        <View
          style={{
            marginVertical: 18,
            borderBottomColor: colors.T500,
            borderBottomWidth: 1,
            marginHorizontal: 20,
          }}
        />
        <Text style={{marginHorizontal: 20, fontSize: 16, fontWeight: '700'}}>
          Tata Cara
        </Text>
        <FlatList
          horizontal
          data={tutorData}
          decelerationRate="fast"
          contentContainerStyle={{
            marginTop: 20,
            paddingLeft: 20,
            paddingVertical: 20,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={{
                width: 225,
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 2.5,
                marginRight: 20,
                borderRadius: 11,
                paddingHorizontal: 10,
                backgroundColor: colors.white,
                paddingBottom: 20,
                elevation: 6,
              }}>
              <Image
                source={item.imageUrl}
                resizeMethod={'resize'}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  marginTop: 8,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 12,
                  fontSize: 12,
                }}>
                {item.description}
              </Text>
            </View>
          )}
        />

        {/* List Tutorial */}
        <View
          style={{
            marginVertical: 18,
            borderBottomColor: colors.T500,
            borderBottomWidth: 1,
            marginHorizontal: 20,
          }}
        />
        <Text style={{marginHorizontal: 20, fontSize: 16, fontWeight: '700'}}>
          Panduan
        </Text>
        <FlatList
          horizontal
          data={tutorBannerData}
          contentContainerStyle={{
            marginTop: 12,
            paddingLeft: 20,
            marginBottom: 20,
            paddingBottom: 20,
          }}
          decelerationRate="fast"
          snapToInterval={Dimensions.get('window').width - 20}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                marginRight: 20,
                width: Dimensions.get('window').width - 40,
                height: 190,
                borderRadius: 25,
                elevation: 4,
              }}>
              <Image
                source={item.imageUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  flex: 1,
                  resizeMode: 'cover',
                }}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
