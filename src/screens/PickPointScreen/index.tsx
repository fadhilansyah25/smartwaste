import React from 'react';
import {PermissionsAndroid, SafeAreaView, View} from 'react-native';
import {style} from './style';
import MapboxGL, {MapView} from '@rnmapbox/maps';
import {MAP_BOX_TOKEN_ACCESS} from '@env';
import Geolocation from 'react-native-geolocation-service';
import MarkerSvg from '@src/assets/svg/map-marker.svg';
import {Position} from '@rnmapbox/maps/lib/typescript/types/Position';

MapboxGL.setAccessToken(MAP_BOX_TOKEN_ACCESS);

function PickPointScreen() {
  const [location, setLocation] = React.useState<number[]>();
  const [centerLoc, setCenterLoc] = React.useState<number[]>();
  const mapRef = React.useRef<any | null>(null);

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation([position.coords.longitude, position.coords.latitude]);
            setCenterLoc([position.coords.longitude, position.coords.latitude]);
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

  React.useEffect(() => {
    const delay = setTimeout(() => {
      getLocation();
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={style.container}>
        {location ? (
          <MapboxGL.MapView
            style={style.map}
            ref={mapRef}
            compassEnabled
            zoomEnabled
            styleURL="mapbox://styles/mapbox/streets-v12"
            onPress={feat => console.log(feat)}
            onCameraChanged={mapState =>
              setCenterLoc(mapState.properties.center)
            }>
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
            <MapboxGL.PointAnnotation
              key="pointAnnotation"
              id="pointAnnotation"
              children={
                <View>
                  <MarkerSvg height={45} width={45} />
                </View>
              }
              coordinate={centerLoc as Position}
            />
          </MapboxGL.MapView>
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
