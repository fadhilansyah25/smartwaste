import React from 'react';
import {SafeAreaView, View, TextInput, FlatList, Text} from 'react-native';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@src/const/colors';
import FilterSvg from '@src/assets/svg/filter.svg';
import {mitra as mitraData} from '@src/const/const-data';
import {getDistanceFromLatLonInKm} from '@src/utils/regionSorts';
import MarkerSvg from '@src/assets/svg/map-marker.svg';
import Geolocation from 'react-native-geolocation-service';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {Types} from '@src/store/reducer/TransactionReducer';
import {requestLocationPermission} from '@src/utils/permissions';

const SearchMitraScreen = () => {
  const [mitra, setMitra] = React.useState<any>();
  const {state, dispatch} = React.useContext(TransactionContext);

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

  React.useEffect(() => {
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
      setMitra(data);
    }
  }, [state.coordinate]);

  return (
    <SafeAreaView style={style.screenContainer}>
      {/* Search Bar */}
      <View style={style.searchBarContainer}>
        <View style={style.searchBarContent}>
          <Icon name="ios-search" size={24} />
          <TextInput placeholder="Cari Mitra" style={{padding: 0, flex: 1}} />
        </View>
        <View style={{paddingLeft: 12}}>
          <FilterSvg />
        </View>
      </View>

      {/* Mitra List Card Data */}
      <View>
        <FlatList
          data={mitra}
          contentContainerStyle={style.mitraListContainer}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          renderItem={({item}) => (
            <View
              style={{
                padding: 12,
                backgroundColor: colors.white,
                elevation: 4,
                borderRadius: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{rowGap: 10, flex: 1}}>
                  <View style={{rowGap: 8}}>
                    <Text style={{color: colors.N900, fontWeight: '500'}}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: colors.N500,
                        fontSize: 12,
                        fontWeight: '400',
                      }}>
                      {item.address}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: colors.T600,
                      fontSize: 12,
                      fontWeight: '600',
                    }}>
                    Buka Sampai Jam {item.closeHour} WIB
                  </Text>
                  <Text
                    style={{
                      color: colors.T800,
                      fontSize: 12,
                      fontWeight: '400',
                    }}>
                    {item.phoneNumber}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', columnGap: 4}}>
                  <MarkerSvg />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      color: colors.T800,
                    }}>
                    {item.distance.toFixed(0)} Km
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchMitraScreen;
