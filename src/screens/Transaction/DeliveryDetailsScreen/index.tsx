import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {style} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {colors} from '@src/const/colors';
import {CustomButton} from '@src/component';
import {useDetailsDeliveryScreen} from './hook';

const DeliveryDetailsScreen = () => {
  const {
    detailAddress,
    detailWaste,
    handleChangeDetailAddress,
    handleChaneDetailWaste,
    handleconfirm,
  } = useDetailsDeliveryScreen();

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        contentContainerStyle={style.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
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
                  <View>
                    <Text style={{fontWeight: '700', color: colors.T600}}>
                      PENERIMA
                    </Text>
                  </View>
                  <Text style={{color: colors.T500, fontWeight: '600'}}>
                    Muhammad Fadil Ardiansyah
                  </Text>
                  <Text style={{color: colors.N500, fontSize: 12}}>
                    Jl. Nn Blok D4D No.13, RT.3/RW.3, Medang, Kec. Pagedangan,
                    Kabupaten Tangerang, Banten 15334, Indonesia
                  </Text>
                </View>

                {/* Address text input */}
                <View>
                  <TextInput
                    multiline={true}
                    numberOfLines={2}
                    style={[{verticalAlign: 'top'}, style.inputText]}
                    value={detailAddress}
                    onChangeText={handleChangeDetailAddress}
                    maxLength={200}
                  />
                  <Text style={{fontSize: 12, marginTop: 8}}>
                    {detailAddress.length}/200
                  </Text>
                </View>

                {/* Note */}
                <View style={{flexDirection: 'row', columnGap: 10}}>
                  <Icon
                    name="information-outline"
                    size={18}
                    color={colors.O900}
                  />
                  <Text style={{color: colors.O900, fontSize: 12}}>
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
            <Text style={{color: colors.T500, fontWeight: '600'}}>
              Bank Sampah Bumi Lestari
            </Text>
            <Text style={{color: colors.N500, fontSize: 12}}>
              Kebon Jeruk Indah Utama 6 No.8, RT.8/RW.7, Srengseng, Kec.
              Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11630
            </Text>
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
              <Text style={{color: colors.O900, fontSize: 12}}>
                Berikan detail sampah yang akan anda akan kirim
              </Text>
            </View>
            <TextInput
              placeholder="Contoh: Botol plastik bekas minuman 1Kg, kertas bekas 2Kg, kemasan bekas kosmetik 3Kg"
              multiline={true}
              numberOfLines={3}
              value={detailWaste}
              onChangeText={handleChaneDetailWaste}
              style={[{verticalAlign: 'top'}, style.inputText]}
            />
          </View>
        </View>
      </ScrollView>

      <View style={style.bottomNavContainer}>
        <CustomButton
          label="Selanjutnya"
          type="fill"
          activeOpacity={0.8}
          disabled={detailAddress.length === 0 || detailWaste.length === 0}
          onPress={handleconfirm}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeliveryDetailsScreen;
