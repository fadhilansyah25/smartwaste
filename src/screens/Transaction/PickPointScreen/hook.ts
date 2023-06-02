import React from 'react';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {Types} from '@src/store/reducer/TransactionReducer';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  TransactionStackParamaterList,
  TransactionStackProps,
} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import Geolocation from 'react-native-geolocation-service';
import GeocodingService from '@src/services/geocodingServices';
import MapboxGL from '@rnmapbox/maps';
import {MAP_BOX_TOKEN_ACCESS} from '@env';

MapboxGL.setAccessToken(MAP_BOX_TOKEN_ACCESS);

export const usePickPoint = () => {
  const {state, dispatch} = React.useContext(TransactionContext);
  const mapRef = React.useRef<MapboxGL.MapView>(null);
  const cameraRef = React.useRef<MapboxGL.Camera>(null);
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const route =
    useRoute<RouteProp<TransactionStackParamaterList, 'PickPoint'>>();
  const [addrLocation, setAddrLocation] = React.useState<
    GeocodeTypes.LocationAddress | undefined
  >();
  const [location, setLocation] = React.useState<number[] | undefined>();

  const handleMapIdle = React.useCallback(async (state: MapboxGL.MapState) => {
    const data = await GeocodingService.reverseGeocoding(
      state.properties.center,
    );
    setAddrLocation(data);
  }, []);

  const handlePickCoordinate = React.useCallback(async () => {
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
    navigation.goBack();
  }, []);

  const handleFlyToCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        cameraRef.current?.flyTo(
          [position.coords.longitude, position.coords.latitude],
          0,
        );
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  // SideEffect
  React.useEffect(() => {
    let isMounted = true;

    const timeout = setTimeout(() => {
      if (isMounted) {
        if (route.params === undefined && state.coordinate) {
          setLocation([state.coordinate.long, state.coordinate.lat]);
        } else if (route.params !== undefined) {
          setLocation([route.params.long, route.params.lat]);
        }
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
      isMounted = false;
    };
  }, [route.params]);

  return {
    location,
    mapRef,
    cameraRef,
    navigation,
    addrLocation,
    handleMapIdle,
    handleFlyToCurrentLocation,
    handlePickCoordinate,
  } as const;
};
