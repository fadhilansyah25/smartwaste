import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import VespaSvg from '../../assets/svg/vespa.svg';
import BoxSvg from '../../assets/svg/box.svg';
import GiftSvg from '../../assets/svg/gift.svg';
import {colors} from '../../const/colors';

const MenuButtonContainer = () => {
  return (
    <View>
      <View style={style.menuButtonContainer}>
        {/* Button Jemput Sampah */}
        <View style={{alignItems: 'center', gap: 8}}>
          <View
            style={{
              ...style.iconContainer,
              backgroundColor: '#C3E2A4',
            }}>
            <VespaSvg />
          </View>
          <Text style={{fontSize: 12, fontWeight: '700'}}>Jemput Sampah</Text>
        </View>

        {/* Button Kirim Sampah */}
        <View style={{alignItems: 'center', gap: 8}}>
          <View
            style={{
              ...style.iconContainer,
              backgroundColor: 'rgba(189, 0, 255, 0.19)',
            }}>
            <BoxSvg />
          </View>
          <Text style={{fontSize: 12, fontWeight: '700'}}>Kirim Sampah</Text>
        </View>

        {/* Button Poin Sampah */}
        <View style={{alignItems: 'center', gap: 8}}>
          <View
            style={{
              ...style.iconContainer,
              backgroundColor: 'rgba(44, 90, 252, 0.27)',
            }}>
            <GiftSvg />
          </View>
          <Text style={{fontSize: 12, fontWeight: '700'}}>Redeem Poin</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  menuButtonContainer: {
    marginHorizontal: 20,
    backgroundColor: colors.white,
    marginTop: 20,
    borderRadius: 11,
    elevation: 4,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 56,
    backgroundColor: 'rgba(44, 90, 252, 0.27)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuButtonContainer;
