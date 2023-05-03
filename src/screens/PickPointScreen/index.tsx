import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {style} from './style';
import MapboxGL from '@rnmapbox/maps';
import {MAP_BOX_TOKEN_ACCESS} from '@env';
import MarkerSvg from '@src/assets/svg/map-marker.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {LocationAddress} from '@src/types/location';
import {CustomButton} from '@src/component';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {Types} from '@src/store/reducer/TransactionReducer';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  TransactionStackParamaterList,
  TransactionStackProps,
} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import {colors} from '@src/const/colors';
import Geolocation from 'react-native-geolocation-service';

MapboxGL.setAccessToken(MAP_BOX_TOKEN_ACCESS);

const reverseGeocoding = async (
  position: MapboxGL.MapState['properties']['center'],
) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position[1]}&lon=${position[0]}&addressdetails=1&limit=1`,
  );
  const data = await response.json();
  return data;
};

function PickPointScreen() {
  const {state, dispatch} = React.useContext(TransactionContext);
  const mapRef = React.useRef<MapboxGL.MapView>(null);
  const cameraRef = React.useRef<MapboxGL.Camera>(null);
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const route =
    useRoute<RouteProp<TransactionStackParamaterList, 'PickPoint'>>();
  const [addrLocation, setAddrLocation] = React.useState<
    LocationAddress | undefined
  >();
  const [location, setLocation] = useState<number[] | undefined>();

  const handleMapIdle = useCallback(async (state: MapboxGL.MapState) => {
    const data = await reverseGeocoding(state.properties.center);
    setAddrLocation(data);
  }, []);

  const handlePickCoordinate = useCallback(async () => {
    const center = await mapRef.current?.getCenter();
    if (center) {
      dispatch({
        type: Types.SetCoordinate,
        payload: {
          lat: center[1],
          long: center[0],
        },
      });
    }
    navigation.navigate('SearchMitra');
  }, []);

  const handleFlyToCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        cameraRef.current?.flyTo(
          [position.coords.longitude, position.coords.latitude],
          700,
        );
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!route.params && state.coordinate) {
        setLocation([state.coordinate.long, state.coordinate.lat]);
      } else if (route.params) {
        setLocation([route.params.long, route.params.lat]);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView style={style.screenContainer}>
      {/* MapView */}
      <View style={style.container}>
        {location ? (
          <View style={style.mapContainer}>
            <MarkerSvg style={style.mapMarker} height={36} width={36} />
            <MapboxGL.MapView
              style={style.map}
              ref={mapRef}
              compassEnabled
              zoomEnabled
              styleURL="mapbox://styles/mapbox/streets-v12"
              scaleBarEnabled={false}
              onMapIdle={handleMapIdle}>
              <MapboxGL.Camera
                ref={cameraRef}
                allowUpdates
                zoomLevel={15}
                animationMode="none"
                centerCoordinate={location}
              />
              <MapboxGL.UserLocation
                androidRenderMode="normal"
                animated={false}
              />
            </MapboxGL.MapView>
          </View>
        ) : null}
        {/* Search Location Input */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SearchLocation')}>
          <View>
            <View style={style.searchBarContainer}>
              <View style={style.searchBarContent}>
                <Icon name="ios-search" size={24} />
                <TextInput
                  editable={false}
                  placeholder="Cari Lokasi"
                  style={{padding: 0, flex: 1}}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginBottom: 8}}
          activeOpacity={0.8}
          onPress={handleFlyToCurrentLocation}>
          <View style={style.getCurrentLocationButton}>
            <Icon name="ios-locate" size={32} color={colors.T500} />
            <Text>Gunakan Lokasi Saat Ini</Text>
          </View>
        </TouchableOpacity>

        {/* Location Address */}
        <View>
          <Text style={{fontSize: 12, marginBottom: 8}}>Titik Lokasi Anda</Text>
          <Text>{addrLocation?.display_name}</Text>
        </View>
      </View>

      {/* Button Save Location */}
      <View style={{marginHorizontal: 20, marginBottom: 20}}>
        <CustomButton
          label="Pilih Lokasi"
          type="fill"
          onPress={handlePickCoordinate}
        />
      </View>
    </SafeAreaView>
  );
}

export default PickPointScreen;
