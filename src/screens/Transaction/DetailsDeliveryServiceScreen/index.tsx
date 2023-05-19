import React from 'react';
import {SafeAreaView, ScrollView, Text, View, TextInput} from 'react-native';
import {style} from './style';
import {DeliveryServiceCard, SelectListDropDown} from '@src/component';
import {colors} from '@src/const/colors';
import VespaSvg from '@src/assets/svg/vespa-white.svg';
import DropSvg from '@src/assets/svg/drop-point.svg';

const DetailsDeliveryServiceScreen = () => {
  const [selected, setSelected] = React.useState('');
  const [weight, setWeight] = React.useState<number>(1);
  const data = [
    {key: '1', value: 'Regular'},
    {key: '2', value: 'Express'},
  ];

  const handleInputChange = (text: string) => {
    // Menghapus karakter non-angka dan non-desimal
    // Menghapus karakter non-angka dan non-desimal
    const numericValue = text.replace(/[^0-9.]/g, '');

    // Memastikan hanya ada satu titik desimal yang diperbolehkan
    const decimalCount = (numericValue.match(/\./g) || []).length;
    const cleanedValue =
      decimalCount <= 1 ? numericValue : numericValue.slice(0, -1);

    // Memastikan nilai minimal 1
    const number = parseFloat(cleanedValue);
    const minValue = 1;
    const validatedValue =
      isNaN(number) || number < minValue ? 1 : cleanedValue;

    setWeight(Number(validatedValue));
  };

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
            <TextInput
              keyboardType="numeric"
              value={weight.toString()}
              style={{
                flex: 1,
                paddingHorizontal: 10,
                backgroundColor: colors.white,
                color: colors.T900,
                fontSize: 14,
                fontWeight: '500',
                paddingVertical: 0,
              }}
              onChangeText={handleInputChange}
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
    </SafeAreaView>
  );
};

export default DetailsDeliveryServiceScreen;

const DeliveryTypeCard = ({
  icon,
  type,
  desc,
}: {
  icon: JSX.Element;
  type: string;
  desc: string;
}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: colors.N500,
        borderRadius: 5,
        gap: 8,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <View
          style={{
            backgroundColor: colors.T500,
            width: 28,
            height: 28,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          {icon}
        </View>
        <Text style={{fontWeight: '600', color: colors.N700}}>{type}</Text>
      </View>
      <Text style={{fontSize: 12}}>{desc}</Text>
    </View>
  );
};