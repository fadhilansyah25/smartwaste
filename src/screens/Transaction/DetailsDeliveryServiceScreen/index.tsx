import React from 'react';
import {SafeAreaView, ScrollView, Text, View, TextInput} from 'react-native';
import {style} from './style';
import {DeliveryServiceCard, SelectListDropDown} from '@src/component';
import {colors} from '@src/const/colors';

const DetailsDeliveryServiceScreen = () => {
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Regular'},
    {key: '2', value: 'Express'},
  ];

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView contentContainerStyle={style.scrollViewStyle}>
        <DeliveryServiceCard serviceName="Gojek" startingPrice="Rp 10.000" />
        <Text>Pilih Tipe Pengiriman</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text>
              Paket akan dijemput kurir dalam waktu yang telah Anda tetapkan.
              (Bayar Langsung Ke Kurir)
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text>
              Paket akan dijemput kurir dalam waktu yang telah Anda tetapkan.
              (Bayar Langsung Ke Kurir)
            </Text>
          </View>
        </View>
        <View>
          <Text>Masukan Berat Paket (Kg)</Text>
          <Text>Masukkan berat dengan benar untuk mendapatkan harga</Text>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              backgroundColor: colors.white,
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: colors.N500,
            }}>
            <TextInput
              style={{
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
              <Text>Kg</Text>
            </View>
          </View>
          <Text>Pilih layanan pengiriman</Text>

          <SelectListDropDown
            data={data}
            setSelected={(val: any) => setSelected(val)}
            search={false}
            boxStyles={{borderRadius: 5}}
            dropdownStyles={{borderRadius: 5}}
            defaultOption={data[0]}
            save="key"
          />
          <View style={{rowGap: 12}}>
            <Text>Rincian</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Berat Paket Aktual</Text>
              <Text style={{fontWeight: '600', color: colors.T500}}>5 Kg</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Harga / Kg</Text>
              <Text style={{fontWeight: '600', color: colors.T500}}>
                Rp 9.500
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Pembayaran</Text>
              <Text style={{fontWeight: '600', color: colors.T500}}>
                Langsung Ke Kurir
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: '600', color: colors.T500}}>Total</Text>
              <Text style={{fontWeight: '600', color: colors.T500}}>
                Rp 39.500
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsDeliveryServiceScreen;
