import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {style} from './style';
import MapboxGL from '@rnmapbox/maps';
import {MAP_BOX_TOKEN_ACCESS} from '@env';
import MarkerSvg from '@src/assets/svg/map-marker.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomButton} from '@src/component';
import {colors} from '@src/const/colors';
import {usePickPoint} from './hook';

MapboxGL.setAccessToken(MAP_BOX_TOKEN_ACCESS);

function PickPointScreen() {
  const {
    location,
    mapRef,
    cameraRef,
    navigation,
    addrLocation,
    handleMapIdle,
    handleFlyToCurrentLocation,
    handlePickCoordinate,
  } = usePickPoint();

  return (
    <SafeAreaView style={style.screenContainer}>
      {/* MapView */}
      <View style={style.container}>
        {location ? (
          <View style={style.mapContainer}>
            <MarkerSvg style={style.mapMarker} height={36} width={36} />
            <MapboxGL.MapView
              style={style.map}
              ref={mapRef}
              compassEnabled
              zoomEnabled
              styleURL="mapbox://styles/mapbox/streets-v12"
              scaleBarEnabled={false}
              onMapIdle={handleMapIdle}>
              <MapboxGL.Camera
                ref={cameraRef}
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
        {/* Search Location Input */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SearchLocation')}>
          <View>
            <View style={style.searchBarContainer}>
              <View style={style.searchBarContent}>
                <Icon name="ios-search" size={24} />
                <TextInput
                  editable={false}
                  placeholder="Cari Lokasi"
                  style={{padding: 0, flex: 1}}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginBottom: 8}}
          activeOpacity={0.8}
          onPress={handleFlyToCurrentLocation}>
          <View style={style.getCurrentLocationButton}>
            <Icon name="ios-locate" size={32} color={colors.T500} />
            <Text>Gunakan Lokasi Saat Ini</Text>
          </View>
        </TouchableOpacity>

        {/* Location Address */}
        <View>
          <Text style={{fontSize: 12, marginBottom: 8}}>Titik Lokasi Anda</Text>
          <Text>{addrLocation?.display_name}</Text>
        </View>
      </View>

      {/* Button Save Location */}
      <View style={{marginHorizontal: 20, marginBottom: 20}}>
        <CustomButton
          label="Pilih Lokasi"
          type="fill"
          onPress={handlePickCoordinate}
        />
      </View>
    </SafeAreaView>
  );
}

export default PickPointScreen;
