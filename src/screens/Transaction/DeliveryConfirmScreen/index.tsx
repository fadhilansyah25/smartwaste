import React from 'react';
import {SafeAreaView, ScrollView, Text, View, TextInput} from 'react-native';
import {style} from './style';
import {
  AddressCard,
  CustomButton,
  DeliveryServiceCard,
  UniqueCodeCard,
} from '@src/component';
import {useDeliveryConfirmScreen} from './hook';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {colors} from '@src/const/colors';
import TruckSvg from '@src/assets/svg/delivery-car.svg';

const DeliveryConfirmScreen = () => {
  const {navigation, userAddress, state, uniqueCode, user} =
    useDeliveryConfirmScreen();

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        contentContainerStyle={style.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        <UniqueCodeCard uniqueCode={uniqueCode} />

        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            {/* Map Maker Dashed  */}
            <View style={{alignItems: 'center'}}>
              <Icon name="map-marker" size={24} color={colors.G900} />
              <View style={style.dashedLine} />
              <Icon name="map-marker" size={24} color={colors.O700} />
            </View>

            <View style={{flex: 1}}>
              {/* Pengirim sampah Card */}
              <View style={{rowGap: 12}}>
                <View style={{rowGap: 8}}>
                  {/* Pengirim Sampah Header */}
                  <Text style={{fontWeight: '700', color: colors.T600}}>
                    PENGIRIM
                  </Text>
                  <AddressCard
                    placeName={user()?.displayName as string}
                    adress={userAddress?.display_name as string}
                  />
                </View>

                {/* Address text input */}
                <TextInput
                  multiline={true}
                  editable={false}
                  value={state.transactionData.detailAdrees}
                  numberOfLines={2}
                  style={[{verticalAlign: 'top'}, style.inputText]}
                />

                {/* Note */}
                <View style={{flexDirection: 'row', columnGap: 10}}>
                  <Icon
                    name="information-outline"
                    size={18}
                    color={colors.O900}
                  />
                  <Text style={style.warningText}>
                    Pastikan alamat Anda sudah sesuai
                  </Text>
                </View>
              </View>

              {/* Penerima Sampah Header */}
              <View style={style.mitraHeaderCard}>
                <Text style={{fontWeight: '700', color: colors.T600}}>
                  PENERIMA
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginLeft: 24 + 10, rowGap: 8, marginTop: 3}}>
            <AddressCard
              placeName={state.mitra?.name as string}
              adress={state.mitra?.address as string}
            />
            <Text style={{color: colors.T600}}>087774502637</Text>
          </View>
        </View>

        <View style={{marginTop: 20, rowGap: 8}}>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <EntypoIcon name="box" size={24} color={colors.T500} />
            <View>
              <Text style={{fontWeight: '700', color: colors.T600}}>
                DETAIL SAMPAH
              </Text>
            </View>
          </View>

          <View style={{marginLeft: 24 + 10, rowGap: 14}}>
            <View style={{flexDirection: 'row', columnGap: 10}}>
              <Icon name="information-outline" size={18} color={colors.O900} />
              <Text style={style.warningText}>
                Pastikan detail sampah yang akan anda akan kirim sudah sesuai
              </Text>
            </View>
            <TextInput
              editable={false}
              multiline={true}
              numberOfLines={3}
              value={state.transactionData.detailWaste}
              style={[{verticalAlign: 'top'}, style.inputText]}
            />
          </View>
        </View>

        <View style={{marginTop: 20, rowGap: 8}}>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <TruckSvg width={24} height={24} />
            <View>
              <Text style={{fontWeight: '700', color: colors.T600}}>
                JASA PENGIRIMAN
              </Text>
            </View>
          </View>

          <View style={{marginLeft: 24 + 10, rowGap: 14}}>
            <DeliveryServiceCard
              serviceName={
                state.transactionData.deliveryProvider?.delivery_name
              }
            />
            <View style={{rowGap: 10}}>
              <Text style={style.titleText}>Rincian</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 12}}>Berat Paket Aktual</Text>
                <Text style={style.detailText}>
                  {state.transactionData.weight}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 12}}>Harga / Kg</Text>
                <Text style={style.detailText}>
                  {state.transactionData.deliveryServiceProduct?.price_perkilo}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={style.detailText}>Total</Text>
                <Text style={style.detailText}>
                  {(state.transactionData.weight as number) *
                    (state.transactionData.deliveryServiceProduct
                      ?.price_perkilo as number)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={style.bottomNavContainer}>
        <CustomButton
          label="Konfirmasi"
          type="fill"
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('CameraScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeliveryConfirmScreen;
