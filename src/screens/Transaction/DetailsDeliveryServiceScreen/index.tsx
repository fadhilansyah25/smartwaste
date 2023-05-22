import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {style} from './style';
import {
  CustomButton,
  DeliveryServiceCard,
  DeliveryTypeCard,
  InputNumber,
  SelectListDropDown,
} from '@src/component';
import {colors} from '@src/const/colors';
import VespaSvg from '@src/assets/svg/vespa-white.svg';
import DropSvg from '@src/assets/svg/drop-point.svg';
import {useDetailsDeliveryServiceScreen} from './hook';

const data = [
  {key: '1', value: 'Regular'},
  {key: '2', value: 'Express'},
];

const DetailsDeliveryServiceScreen = () => {
  const {navigation, selected, setSelected, setWeight, weight} =
    useDetailsDeliveryServiceScreen();

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView contentContainerStyle={style.scrollViewStyle}>
        <DeliveryServiceCard serviceName="Gojek" startingPrice="Rp 10.000" />

        {/* Select Type Delivery */}
        <View style={{marginTop: 12, rowGap: 10}}>
          <Text style={style.titleText}>Pilih Tipe Pengiriman</Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <DeliveryTypeCard
              icon={<VespaSvg height={14} />}
              type={'Pickup'}
              desc="Paket akan dijemput kurir dalam waktu yang telah Anda tetapkan. (Bayar
                Langsung Ke Kurir)"
            />
            <DeliveryTypeCard
              icon={<DropSvg height={16} />}
              type={'Drop Off'}
              desc="Anda perlu mengantar paket ke Cabang/Agen/Gerai terdekat. (Bayar Langsung Ke Agen)"
            />
          </View>
        </View>

        {/* Desc */}
        <View style={{marginTop: 12, gap: 12}}>
          <View>
            <Text style={style.titleText}>Masukan Berat Paket (Kg)</Text>
            <Text style={{fontSize: 12}}>
              Masukkan berat dengan benar untuk mendapatkan harga
            </Text>
          </View>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              backgroundColor: colors.white,
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: colors.N500,
            }}>
            <InputNumber
              minimumValue={1}
              maximumValue={15}
              inputStyle={{
                flex: 1,
                paddingHorizontal: 10,
                backgroundColor: colors.white,
                color: colors.T900,
                fontSize: 14,
                fontWeight: '500',
                paddingVertical: 0,
              }}
            />
            <View
              style={{
                backgroundColor: colors.T500,
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: colors.N100}}>Kg</Text>
            </View>
          </View>

          <Text style={style.titleText}>Pilih layanan pengiriman</Text>

          <SelectListDropDown
            data={data}
            setSelected={(val: any) => setSelected(val)}
            search={false}
            boxStyles={{borderRadius: 5}}
            dropdownStyles={{borderRadius: 5}}
            defaultOption={data[0]}
            save="key"
          />
          <View style={{rowGap: 10}}>
            <Text style={style.titleText}>Rincian</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12}}>Berat Paket Aktual</Text>
              <Text
                style={{fontWeight: '600', color: colors.T500, fontSize: 12}}>
                5 Kg
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12}}>Harga / Kg</Text>
              <Text
                style={{fontWeight: '600', color: colors.T500, fontSize: 12}}>
                Rp 9.500
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12}}>Pembayaran</Text>
              <Text
                style={{fontWeight: '600', color: colors.T500, fontSize: 12}}>
                Langsung Ke Kurir
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{fontWeight: '600', color: colors.T500, fontSize: 12}}>
                Total
              </Text>
              <Text
                style={{fontWeight: '600', color: colors.T500, fontSize: 12}}>
                Rp 39.500
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={style.bottomNavContainer}>
        <CustomButton
          label="Selanjutnya"
          type="fill"
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('SelectDeliveryServices');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailsDeliveryServiceScreen;
