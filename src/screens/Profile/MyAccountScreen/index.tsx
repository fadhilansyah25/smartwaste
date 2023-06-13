import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {style} from './style';
import {AvatarBadge, CustomButton} from '@src/component';
import {colors} from '@src/const/colors';
import {useMyAccoutScreen} from './hook';
import LinearGradient from 'react-native-linear-gradient';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

const MyAccountScreen = () => {
  const {handleLogout, user} = useMyAccoutScreen();

  return (
    <SafeAreaView style={style.screenContainer}>
      <LinearGradient
        colors={['#4CB8C4', '#3CD3AD']}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 2}}>
        <View style={style.mainBanner}>
          <AvatarBadge size={70} label={user?.displayName as string} />
          <Text style={{fontWeight: '500', color: colors.N100, fontSize: 18}}>
            {user?.displayName}
          </Text>
        </View>
      </LinearGradient>
      <ScrollView
        contentContainerStyle={style.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        {/* List Menu */}
        <View>
          <View style={style.menuButton}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <IonicIcon name="ios-person" size={18} />
              <Text>Profil Saya</Text>
            </View>
            <IonicIcon name="ios-chevron-forward" size={18} />
          </View>
          <View style={style.menuButton}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <IonicIcon name="ios-location" size={18} />
              <Text>Alamat</Text>
            </View>
            <IonicIcon name="ios-chevron-forward" size={18} />
          </View>
          <View style={style.menuButton}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <FontistoIcon name="ticket-alt" size={18} />
              <Text>Kode Referal</Text>
            </View>
            <IonicIcon name="ios-chevron-forward" size={18} />
          </View>
          <View style={style.menuButton}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <IonicIcon name="ios-lock-closed" size={18} />
              <Text>Password</Text>
            </View>
            <IonicIcon name="ios-chevron-forward" size={18} />
          </View>
        </View>

        {/* Logout Button */}
        <CustomButton
          label="Keluar"
          type="outline"
          style={{borderColor: colors.R500}}
          textStyle={{color: colors.R500}}
          onPress={handleLogout}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyAccountScreen;
