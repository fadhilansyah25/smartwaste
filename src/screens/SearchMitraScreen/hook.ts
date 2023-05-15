import React from 'react';
import {mitra as mitraData} from '@src/const/const-data';
import {getDistanceFromLatLonInKm} from '@src/utils/regionSorts';
import Geolocation from 'react-native-geolocation-service';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {Types} from '@src/store/reducer/TransactionReducer';
import {requestLocationPermission} from '@src/utils/permissions';
import {MitraData} from '@src/types/mitra';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';

export const useSearchMitra = () => {
  const [mitra, setMitra] =
    React.useState<(MitraData & {distance: number})[]>();
  const {state, dispatch} = React.useContext(TransactionContext);
  const navigation = useNavigation<TransactionStackProps['navigation']>();

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            dispatch({
              type: Types.SetCoordinate,
              payload: {
                lat: position.coords.latitude,
                long: position.coords.longitude,
              },
            });
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

  // SideEffect
  React.useEffect(() => {
    let isMounted = true;

    if (state.coordinate === null) getLocation();

    if (state.coordinate) {
      const data = mitraData.map(item => ({
        ...item,
        distance: getDistanceFromLatLonInKm(
          state.coordinate?.lat as number,
          state.coordinate?.long as number,
          item.coordinate.lat,
          item.coordinate.long,
        ),
      }));
      if (isMounted) {
        setMitra(data);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [state.coordinate]);

  return {
    navigation,
    mitra,
  } as const;
};
