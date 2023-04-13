import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../const/colors';
import CustomButton from '../Button';

const MainBanner = () => {
  return (
    <View style={style.mainBannerContainer}>
      <LinearGradient
        colors={['#4CB8C4', '#3CD3AD']}
        style={{borderRadius: 11, width: '100%'}}
        start={{x: 0, y: 0}}
        end={{x: 0.7, y: 0}}>
        {/* Banner text copy */}
        <View style={style.mainCopyText}>
          <View style={{flex: 1}}>
            <Text style={style.titleText}>Send Your Waste</Text>
            <Text style={{color: colors.white, fontSize: 12}}>
              Yuk buat transaksi pertamamu! Packing kemasan bekas Anda dan kirim
              ke mitra Smart Waste
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/image/illustration-5.png')}
              style={{resizeMode: 'contain'}}
            />
          </View>
        </View>

        {/* Banner Button */}
        <CustomButton
          style={style.bannerButton}
          label="Kirim Sekarang"
          type="fill"
        />
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  mainBannerContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    elevation: 4,
  },
  mainCopyText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 10,
  },
  titleText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  bannerButton: {
    backgroundColor: colors.O800,
    marginVertical: 14,
    marginHorizontal: 16,
  },
});

export default MainBanner;
