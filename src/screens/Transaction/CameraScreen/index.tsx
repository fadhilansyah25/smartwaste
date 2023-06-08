import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Camera, CameraDevice} from 'react-native-vision-camera';
import {styles} from './style';
import {useCameraScreen} from './hook';

const CameraScreen = () => {
  const {
    device,
    imageSource,
    camera,
    showCamera,
    capturePhoto,
    setShowCamera,
    handleUsePhoto,
  } = useCameraScreen();

  if (device == null) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device as CameraDevice}
            isActive={showCamera}
            photo={true}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.camButton}
              onPress={() => capturePhoto()}
            />
          </View>
        </>
      ) : (
        <>
          {imageSource !== '' ? (
            <Image
              style={styles.image}
              source={{
                uri: `file://'${imageSource}`,
              }}
            />
          ) : null}
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.retakeButton}
                onPress={() => setShowCamera(true)}>
                <Text style={{color: '#77c3ec', fontWeight: '500'}}>
                  Ambil Ulang
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmImageButton}
                onPress={handleUsePhoto}>
                <Text style={{color: 'white', fontWeight: '500'}}>
                  Gunakan Gambar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default CameraScreen;
