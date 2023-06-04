import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {Types} from '@src/store/reducer/TransactionReducer';
import {requestLocationPermission} from '@src/utils/permissions';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import MitraUsecase from '@src/services/bussines/mitraUsecase';

export const useSearchMitra = () => {
  const [mitra, setMitra] = React.useState<Mitra.MitraWithDistance[]>();
  const {state, dispatch} = React.useContext(TransactionContext);
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const mitraUsecase = new MitraUsecase();
  const [loading, setLoading] = React.useState(true)

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

    (async () => {
      try {
        if (state.coordinate) {
          const item = await mitraUsecase.getAllMitraWithDistance({
            lat: state.coordinate.lat,
            long: state.coordinate.long,
          });
          if (isMounted) {
            setMitra(item as Mitra.MitraWithDistance[]);
            setLoading(false)
          }
        }
      } catch (err) {
        console.log(err);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [state.coordinate]);

  return {
    navigation,
    mitra,
    loading
  } as const;
};
