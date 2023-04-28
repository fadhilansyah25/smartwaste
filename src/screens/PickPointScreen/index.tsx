import React from 'react';
import {PermissionsAndroid, SafeAreaView, View} from 'react-native';
import {style} from './style';
import MapboxGL from '@rnmapbox/maps';
import {MAP_BOX_TOKEN_ACCESS} from '@env';
import Geolocation from 'react-native-geolocation-service';
import MarkerSvg from '@src/assets/svg/map-marker.svg';

MapboxGL.setAccessToken(MAP_BOX_TOKEN_ACCESS);

function PickPointScreen() {
  const [location, setLocation] = React.useState<number[]>();
  const [addrLocation, setAddrLocation] = React.useState<any>(null);

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
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${position[0]},${position[1]}.json?access_token=${MAP_BOX_TOKEN_ACCESS}`,
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

  return (
    <SafeAreaView style={style.screenContainer}>
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
