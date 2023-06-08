import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import firebaseServices from '@src/services/firebaseServices';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {Types} from '@src/store/reducer/TransactionReducer';
import React from 'react';
import {Linking} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

export const useCameraScreen = () => {
  const {dispatch} = React.useContext(TransactionContext);
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const camera = React.useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;

  const [showCamera, setShowCamera] = React.useState(true);
  const [imageSource, setImageSource] = React.useState('');

  React.useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      // console.log(`Camera permission status: ${permission}`);
      if (permission === 'denied') await Linking.openSettings();
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
    }
  };

  const handleUsePhoto = async () => {
    const response = await fetch(`file://${imageSource}`);
    const blob = await response.blob();
    dispatch({
      type: Types.SetTransac,
      payload: {
        imageSource: blob,
      },
    });
    navigation.navigate('SelectDeliveryServices');
  };

  return {
    device,
    showCamera,
    imageSource,
    camera,
    capturePhoto,
    handleUsePhoto,
    setShowCamera,
  } as const;
};
