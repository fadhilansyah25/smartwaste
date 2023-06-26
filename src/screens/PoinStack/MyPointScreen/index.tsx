import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './style';
import {colors} from '@src/const/colors';
import {
  CustomButton,
  FilterButtonBadge,
  PointTransactionHistoryCard,
} from '@src/component';

const MyPointScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      {/* Banner */}
      <LinearGradient
        colors={['#4CB8C4', '#3CD3AD']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{borderTopRightRadius: 5, borderTopLeftRadius: 5}}>
        <View style={style.bannerContainer}>
          <Text style={{color: colors.N100, fontSize: 14}}>Saldo Poin</Text>
          <Text style={{color: colors.N100, fontSize: 28, fontWeight: '700'}}>
            1200
          </Text>
          <CustomButton
            label="Redeem Poin"
            type="fill"
            style={{
              elevation: 2,
              paddingHorizontal: 15,
              backgroundColor: colors.O800,
            }}
            textStyle={{fontSize: 14}}
          />
        </View>
      </LinearGradient>

      {/* Filter Menu */}
      <View style={{padding: 20}}>
        <Text style={{fontWeight: '700'}}>Riwayat Transaksi Poin</Text>
        <View style={{flexDirection: 'row', marginTop: 12, columnGap: 12}}>
          <FilterButtonBadge label="Semua Riwayat" />
          <FilterButtonBadge label="30 Hari Terakhir" />
        </View>
      </View>

      {/* List History Card */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
          paddingTop: 10,
        }}>
        <PointTransactionHistoryCard
          title="Kamu Mendapat Poin Reward!"
          desc="Setor Sampah Produk Unilever"
          date="20 Sep 2021 - 09:30 am"
          point={1000}
          status="plus"
        />
        <PointTransactionHistoryCard
          title="Redeem Poin Berhasil!"
          desc="Penukaran Pulsa"
          date="12 Sep 2021 - 11:30 am"
          point={2000}
          status="minus"
        />
        <PointTransactionHistoryCard
          title="Kamu Mendapat Poin Reward!"
          desc="Setor Sampah Produk Indofood"
          date="10 Sep 2021 - 02.20 pm"
          point={900}
          status="plus"
        />
        <PointTransactionHistoryCard
          title="Redeem Poin Berhasil!"
          desc="Penukaran Saldo PLN"
          date="08 Sep 2021 - 11:30 am"
          point={3000}
          status="minus"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPointScreen;
