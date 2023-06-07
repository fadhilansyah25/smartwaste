import React from 'react';
import {Linking} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

export const useCameraScreen = () => {
  const camera = React.useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;

  const [showCamera, setShowCamera] = React.useState(true);
  const [imageSource, setImageSource] = React.useState('');

  React.useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      console.log(`Camera permission status: ${permission}`);
      if (permission === 'denied') await Linking.openSettings();
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
      console.log(photo.path);
    }
  };

  const handleUsePhoto = () => {
    setShowCamera(true);
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
