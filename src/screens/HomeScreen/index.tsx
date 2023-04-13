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
import Icon from 'react-native-vector-icons/FontAwesome5';
import {tutorData, tutorBannerData} from '../../const/const-data';
import GreetingsBar from '../../component/GreetingsBar';
import MainBanner from '../../component/MainBanner';
import DataCard from '../../component/DataCard';
import MenuButtonContainer from '../../component/MenuButtonContainer';

const HomeScreen = ({navigation}: RootStackProps) => {
  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {/* Greetings bar and avatar */}
        <GreetingsBar displayName={auth().currentUser?.displayName as string} />

        {/* Main Banner */}
        <MainBanner />

        {/* Data Card */}
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            gap: 10,
            marginTop: 20,
          }}>
          {/* Card Sampah Terkirim  */}
          <DataCard
            backgroundColor={['#4CB8C4', '#3CD3AD']}
            data={10.75}
            title="Sampah Terkirim"
            units="Kilogram"
            iconContainerColor="#EABA3D"
            icon={
              <Icon
                name="trash"
                size={12}
                color={colors.white}
                style={{top: -0.5, left: -0.5}}
              />
            }
          />

          {/* Card Poin Tercapai */}
          <DataCard
            backgroundColor={['#EABA3D', '#FEB47B']}
            data={1200}
            title="Jumlah Poin"
            units="Poin"
            iconContainerColor="#4CB8C4"
            icon={
              <Icon
                name="coins"
                size={12}
                color={colors.white}
                style={{top: -0.5, left: -0.5}}
              />
            }
          />
        </View>

        {/* Menu Button Container */}
        <MenuButtonContainer />

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
            paddingLeft: 20,
            marginTop: 20,
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
                elevation: 4,
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
              activeOpacity={0.9}
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
