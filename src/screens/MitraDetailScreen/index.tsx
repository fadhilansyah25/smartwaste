import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {style} from './style';
import {colors} from '@src/const/colors';
import {RouteProp, useRoute} from '@react-navigation/native';
import {TransactionStackParamaterList} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import MarkerSvg from '@src/assets/svg/map-marker.svg';
import {getDistanceFromLatLonInKm} from '@src/utils/regionSorts';
import {TransactionContext} from '@src/store/context/TransactionContext';
import MapboxGL from '@rnmapbox/maps';
import {CustomButton} from '@src/component';

const MitraDetailScreen = () => {
  const route =
    useRoute<RouteProp<TransactionStackParamaterList, 'MitraDetail'>>();
  const data = route.params.mitra;
  const {state, dispatch} = React.useContext(TransactionContext);

  const [showElement, setShowElement] = React.useState(false);

  React.useEffect(() => {
    // Mengatur nilai state "showElement" menjadi true setelah 2 detik
    const timer = setTimeout(() => setShowElement(true), 1000);

    // Membersihkan timeout saat komponen di-unmount
    return () => clearTimeout(timer);
  }, []);

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
                {data.name}
              </Text>
              <Text style={style.cardAdreesInfoText}>{data.address}</Text>
            </View>
            <Text style={style.cardHourInfoText}>
              Buka Sampai Jam {data.closeHour} WIB
            </Text>
            <Text style={style.cardPhoneInfoText}>{data.phoneNumber}</Text>
          </View>
        </View>
      </View>

      {/* Mitra Distance Location Info */}
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: '600', color: colors.T800}}>
          Lokasi Mitra
        </Text>
        <View style={{flexDirection: 'row', columnGap: 4}}>
          <MarkerSvg />
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: colors.T800,
            }}>
            {getDistanceFromLatLonInKm(
              state.coordinate?.lat as number,
              state.coordinate?.long as number,
              data.coordinate.lat,
              data.coordinate.long,
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
              centerCoordinate={[data.coordinate.long, data.coordinate.lat]}
            />
            <MapboxGL.PointAnnotation
              id={data.name}
              coordinate={[data.coordinate.long, data.coordinate.lat]}
              children={
                <MarkerSvg style={style.mapMarker} height={36} width={36} />
              }
            />
          </MapboxGL.MapView>
        ) : null}
      </View>

      <View style={{flexDirection: 'row', marginBottom: 14, marginTop: 24, columnGap: 14}}>
        <CustomButton label="Batalkan" type="outline" style={{flex: 1}} />
        <CustomButton label="Kirim" type="fill" style={{flex: 1}} />
      </View>
    </SafeAreaView>
  );
};

export default MitraDetailScreen;
