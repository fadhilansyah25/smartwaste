import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {style} from './style';
import {colors} from '@src/const/colors';
import MarkerSvg from '@src/assets/svg/map-marker.svg';
import {getDistanceFromLatLonInKm} from '@src/utils/regionSorts';
import MapboxGL from '@rnmapbox/maps';
import {CustomButton} from '@src/component';
import {useMitraDetail} from './hook';

const MitraDetailScreen = () => {
  const {dataMitra, showElement, state, navigation, handlePickMitra} =
    useMitraDetail();

  return (
    <SafeAreaView style={style.screenContainer}>
      {/* Title Screen */}
      <Text style={style.titleScreen}>Setor Sampah Ke</Text>

      {/* Mitra Card Info Data */}
      <View style={style.cardContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{rowGap: 10, flex: 1}}>
            <View style={{rowGap: 8}}>
              <Text style={{color: colors.N900, fontWeight: '500'}}>
                {dataMitra.name}
              </Text>
              <Text style={style.cardAdreesInfoText}>{dataMitra.address}</Text>
            </View>
            <Text style={style.cardHourInfoText}>
              Buka Sampai Jam {dataMitra.closeHour} WIB
            </Text>
            <Text style={style.cardPhoneInfoText}>{dataMitra.phoneNumber}</Text>
          </View>
        </View>
      </View>

      {/* Mitra Distance Location Info */}
      <View style={style.distanceLocationContainer}>
        <Text style={{fontWeight: '600', color: colors.T800}}>
          Lokasi Mitra
        </Text>
        <View style={{flexDirection: 'row', columnGap: 4}}>
          <MarkerSvg />
          <Text style={style.distanceText}>
            {getDistanceFromLatLonInKm(
              state.coordinate?.lat as number,
              state.coordinate?.long as number,
              dataMitra.coordinate.lat,
              dataMitra.coordinate.long,
            ).toFixed(0)}{' '}
            Km
          </Text>
        </View>
      </View>

      {/* Maps */}
      <View style={style.mapContainer}>
        {showElement ? (
          <MapboxGL.MapView
            style={style.map}
            styleURL="mapbox://styles/mapbox/streets-v12"
            scaleBarEnabled={false}
            scrollEnabled={false}
            pitchEnabled={false}>
            <MapboxGL.Camera
              zoomLevel={15}
              animationMode="none"
              centerCoordinate={[
                dataMitra.coordinate.long,
                dataMitra.coordinate.lat,
              ]}
            />
            <MapboxGL.PointAnnotation
              id={dataMitra.name}
              coordinate={[dataMitra.coordinate.long, dataMitra.coordinate.lat]}
              children={
                <MarkerSvg style={style.mapMarker} height={36} width={36} />
              }
            />
          </MapboxGL.MapView>
        ) : null}
      </View>

      <View style={style.buttonContainer}>
        <CustomButton
          label="Batalkan"
          type="outline"
          style={{flex: 1}}
          onPress={() => navigation.goBack()}
        />
        <CustomButton
          label="Kirim"
          type="fill"
          style={{flex: 1}}
          onPress={handlePickMitra}
        />
      </View>
    </SafeAreaView>
  );
};

export default MitraDetailScreen;
