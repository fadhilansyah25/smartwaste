import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import {style} from './style';
import auth from '@react-native-firebase/auth';
import {RootStackProps} from '../../App';
import {colors} from '../../const/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {tutorData, tutorBannerData} from '../../const/const-data';
import GreetingsBar from '../../component/GreetingsBar';
import MainBanner from '../../component/MainBanner';
import AchivementCard from '../../component/Card/AchivementCard';
import MenuButtonContainer from '../../component/MenuButtonContainer';
import GuideCard from '../../component/Card/GuideCard';
import TutorialCard from '../../component/Card/TutorialCard';
import HorizontalRule from '../../component/HorizontalRule';

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
        <View style={style.dataCardSection}>
          {/* Card Sampah Terkirim  */}
          <AchivementCard
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
          <AchivementCard
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
        <HorizontalRule
          borderWidth={1}
          borderColor={colors.T500}
          style={{marginHorizontal: 20, marginVertical: 18}}
        />
        <Text style={style.subtitleText}>Tata Cara</Text>
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
            <GuideCard
              imageUrl={item.imageUrl}
              title={item.title}
              desc={item.description}
            />
          )}
        />

        {/* List Tutorial */}
        <HorizontalRule
          borderWidth={1}
          borderColor={colors.T500}
          style={{marginHorizontal: 20, marginVertical: 18}}
        />
        <Text style={style.subtitleText}>Panduan</Text>
        <FlatList
          horizontal
          data={tutorBannerData}
          contentContainerStyle={style.listTutorialContainer}
          decelerationRate="fast"
          snapToInterval={Dimensions.get('window').width - 20}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <TutorialCard imageUrl={item.imageUrl} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
