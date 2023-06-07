import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {Types} from '@src/store/reducer/TransactionReducer';
import firebaseServices from '@src/services/firebaseServices';
import GeocodingService from '@src/services/geocodingServices';

export const useDetailsDeliveryScreen = () => {
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const {state, dispatch} = React.useContext(TransactionContext);
  const user = firebaseServices.firebaseCheckCurrentUser;

  const [userAddress, setUserAddress] = React.useState<
    GeocodeTypes.LocationAddress | undefined
  >();
  const [detailAddress, setDetailAddress] = React.useState('');
  const [detailWaste, setDetailWaste] = React.useState('');

  const handleChangeDetailAddress = (text: string) => {
    setDetailAddress(text);
  };

  const handleChaneDetailWaste = (text: string) => {
    setDetailWaste(text);
  };

  const handleconfirm = () => {
    dispatch({
      type: Types.SetTransac,
      payload: {
        detailAdrees: detailAddress,
        detailWaste: detailWaste,
      },
    });
    navigation.navigate('CameraScreen');
  };

  React.useEffect(() => {
    let isMounted = true;

    (async () => {
      if (state.coordinate) {
        const data = await GeocodingService.reverseGeocoding([
          state.coordinate?.long,
          state.coordinate?.lat,
        ]);
        if (isMounted) {
          setUserAddress(data);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [state.coordinate]);

  return {
    navigation,
    state,
    detailAddress,
    detailWaste,
    userAddress,
    user,
    handleChaneDetailWaste,
    handleChangeDetailAddress,
    handleconfirm,
  } as const;
};
