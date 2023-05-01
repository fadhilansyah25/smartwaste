import React from 'react';
import {
  PermissionsAndroid,
  SafeAreaView,
  View,
  TextInput,
  Text,
} from 'react-native';
import {style} from './style';
import MapboxGL from '@rnmapbox/maps';
import {MAP_BOX_TOKEN_ACCESS} from '@env';
import Geolocation from 'react-native-geolocation-service';
import MarkerSvg from '@src/assets/svg/map-marker.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@src/const/colors';
import {LocationAddress} from '@src/types/location';
import {CustomButton} from '@src/component';

MapboxGL.setAccessToken(MAP_BOX_TOKEN_ACCESS);

function PickPointScreen() {
  const [location, setLocation] = React.useState<number[]>();
  const [addrLocation, setAddrLocation] = React.useState<
    LocationAddress | undefined
  >();

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation([position.coords.longitude, position.coords.latitude]);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };

  const reverseGeocoding = async (
    position: MapboxGL.MapState['properties']['center'],
  ) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position[1]}&lon=${position[0]}&addressdetails=1&limit=1`,
      // `https://api.mapbox.com/geocoding/v5/mapbox.places/${position[0]},${position[1]}.json?access_token=${MAP_BOX_TOKEN_ACCESS}`,
    );
    const data = await response.json();
    setAddrLocation(data);
  };

  React.useEffect(() => {
    const delay = setTimeout(() => {
      getLocation();
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const handleMapIdle = (state: MapboxGL.MapState) => {
    reverseGeocoding(state.properties.center);
  };

  console.log(addrLocation);

  return (
    <SafeAreaView style={style.screenContainer}>
      {/* MapView */}
      <View style={style.container}>
        {location ? (
          <View style={{flex: 1, position: 'relative'}}>
            <MarkerSvg
              style={{
                position: 'absolute',
                zIndex: 10,
                right: '44%',
                top: '46.2%',
              }}
              height={40}
              width={40}
            />
            <MapboxGL.MapView
              style={style.map}
              compassEnabled
              zoomEnabled
              styleURL="mapbox://styles/mapbox/streets-v12"
              scaleBarEnabled={false}
              onMapIdle={handleMapIdle}>
              <MapboxGL.Camera
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
        {/* Search Location */}
        <View>
          <View
            style={{
              paddingVertical: 12,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
                columnGap: 10,
                borderColor: colors.T500,
                borderWidth: 1,
                borderRadius: 4,
                backgroundColor: colors.N100,
                flex: 1,
              }}>
              <Icon name="ios-search" size={24} />
              <TextInput
                editable={false}
                placeholder="Cari Lokasi"
                style={{padding: 0, flex: 1}}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Location Address */}
      <View style={{marginHorizontal: 20, marginBottom: 20}}>
        <Text style={{fontSize: 12, marginBottom: 8}}>Titik Lokasi Anda</Text>
        <Text>{addrLocation?.display_name}</Text>
      </View>

      {/* Button Save Location */}
      <View style={{marginHorizontal: 20, marginBottom: 20}}>
        <CustomButton label="Pilih Lokasi" type="fill" />
      </View>
    </SafeAreaView>
  );
}

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === 'granted') {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export default PickPointScreen;
