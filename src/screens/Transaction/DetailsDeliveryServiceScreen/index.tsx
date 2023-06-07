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
import {InputDate, InputTime} from '@src/component';
import {
  initialTime,
  maximumPickupDate,
  maximumTime,
  today,
} from '@src/utils/getInitialDate';
import {formatterIDR} from '@src/utils/formatter';

const DetailsDeliveryServiceScreen = () => {
  const {
    deliveryType,
    deliveryServiceData,
    deliveryProduct,
    weight,
    pickupDate,
    setPickupDate,
    setWeight,
    setDeliveryProduct,
    setDeliveryType,
    handleConfirm,
  } = useDetailsDeliveryServiceScreen();

  const data =
    deliveryServiceData?.delivery_service_delivery_service_products.map(
      item => ({
        key: item.id,
        value: item.service_name,
      }),
    );

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView contentContainerStyle={style.scrollViewStyle}>
        <DeliveryServiceCard
          serviceName={deliveryServiceData?.delivery_name}
          startingPrice={formatterIDR.format(
            deliveryServiceData?.delivery_service_delivery_service_products[0]
              .price_perkilo as number,
          )}
        />

        {/* Select Type Delivery */}
        <View style={{marginTop: 12, rowGap: 10}}>
          <Text style={style.titleText}>Pilih Tipe Pengiriman</Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <DeliveryTypeCard
              onPress={() => setDeliveryType(0)}
              containerStyle={
                deliveryType === 0 && {
                  borderColor: colors.T500,
                  backgroundColor: colors.T100,
                }
              }
              icon={<VespaSvg height={14} />}
              type={'Pickup'}
              desc="Paket akan dijemput kurir dalam waktu yang telah Anda tetapkan. (Bayar
                Langsung Ke Kurir)"
            />
            <DeliveryTypeCard
              containerStyle={
                deliveryType === 1 && {
                  borderColor: colors.T500,
                  backgroundColor: colors.T100,
                }
              }
              onPress={() => setDeliveryType(1)}
              icon={<DropSvg height={16} />}
              type={'Drop Off'}
              desc="Anda perlu mengantar paket ke Cabang/Agen/Gerai terdekat. (Bayar Langsung Ke Agen)"
            />
          </View>
        </View>

        {/* Desc */}
        <View style={{marginTop: 12, gap: 12}}>
          {deliveryType === 0 && (
            <View style={{flexDirection: 'row', gap: 12}}>
              <InputDate
                label="Tanggal Jemput"
                labelStyle={{fontSize: 12}}
                initialDate={pickupDate}
                minimumDate={today}
                maximumDate={maximumPickupDate}
                inputStyle={{paddingVertical: 6, paddingHorizontal: 4}}
                containerStyle={{flex: 1}}
                onChangeDate={(_, date) => setPickupDate(date as Date)}
              />
              <InputTime
                label="Jam Jemput"
                labelStyle={{fontSize: 12}}
                inputStyle={{paddingVertical: 6, paddingHorizontal: 4}}
                initialTime={pickupDate}
                minimumDate={initialTime}
                maximumDate={maximumTime}
                containerStyle={{flex: 1}}
                onChangeDate={(_, date) => setPickupDate(date as Date)}
              />
            </View>
          )}
          <View>
            <Text style={style.titleText}>Masukan Berat Paket (Kg)</Text>
            <Text style={{fontSize: 12}}>
              Masukkan berat dengan benar untuk mendapatkan harga
            </Text>
          </View>
          <View style={style.inputWeightContainer}>
            <InputNumber
              minimumValue={1}
              maximumValue={15}
              inputStyle={style.inputWeight}
              onChange={text => setWeight(Number(text))}
            />
            <View style={style.inputWeightLogo}>
              <Text style={{color: colors.N100}}>Kg</Text>
            </View>
          </View>

          <Text style={style.titleText}>Pilih layanan pengiriman</Text>

          {data ? (
            <SelectListDropDown
              data={data}
              setSelected={(val: any) => setDeliveryProduct(val)}
              search={false}
              boxStyles={{borderRadius: 5}}
              dropdownStyles={{borderRadius: 5}}
              defaultOption={data[0]}
              save="key"
            />
          ) : null}

          <View style={{rowGap: 10}}>
            <Text style={style.titleText}>Rincian</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12}}>Berat Paket Aktual</Text>
              <Text style={style.textDetailDelivery}>{weight} Kg</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12}}>Harga / Kg</Text>
              <Text style={style.textDetailDelivery}>
                {formatterIDR.format(
                  deliveryServiceData?.delivery_service_delivery_service_products?.find(
                    item => item.id === deliveryProduct,
                  )?.price_perkilo as number,
                )}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12}}>Pembayaran</Text>
              <Text style={style.textDetailDelivery}>Langsung Ke Kurir</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={style.textDetailDelivery}>Total</Text>
              <Text style={style.textDetailDelivery}>
                {formatterIDR.format(
                  (deliveryServiceData?.delivery_service_delivery_service_products?.find(
                    item => item.id === deliveryProduct,
                  )?.price_perkilo as number) * weight,
                )}
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
          onPress={handleConfirm}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailsDeliveryServiceScreen;
