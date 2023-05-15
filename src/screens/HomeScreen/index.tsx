import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import {
  GreetingsBar,
  MainBanner,
  AchivementCard,
  MenuButtonContainer,
  HorizontalRule,
  GuideCard,
  TutorialCard,
} from '@src/component';
import {style} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '@src/const/colors';

import {tutorBannerData, tutorData} from '@src/const/const-data';
import firebaseServices from '@src/services/firebaseServices';

const user = firebaseServices.firebaseCheckCurrentUser;

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {/* Greetings bar and avatar */}
        <GreetingsBar displayName={user()?.displayName as string} />

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
