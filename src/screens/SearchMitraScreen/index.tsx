import React from 'react';
import {SafeAreaView, View, TextInput, FlatList, Text} from 'react-native';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@src/const/colors';
import FilterSvg from '@src/assets/svg/filter.svg';
import {mitra} from '@src/const/const-data';
import {getDistanceFromLatLonInKm} from '@src/utils/regionSorts';
import MarkerSvg from '@src/assets/svg/map-marker.svg';

const SearchMitraScreen = () => {
  // -6.266091, 106.613069
  const newMitra = mitra.map(item => ({
    ...item,
    distance: getDistanceFromLatLonInKm(
      -6.266091,
      106.613069,
      item.coordinate.lat,
      item.coordinate.long,
    ),
  }));

  return (
    <SafeAreaView style={style.screenContainer}>
      {/* Search Bar */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 12,
          backgroundColor: colors.T100,
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 8,
            columnGap: 10,
            borderColor: colors.T500,
            borderWidth: 1,
            borderRadius: 4,
            backgroundColor: colors.N100,
            flex: 1,
          }}>
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
          data={newMitra}
          contentContainerStyle={{
            backgroundColor: colors.white,
            paddingTop: 12,
            paddingHorizontal: 20,
            marginBottom: 20,
            paddingBottom: 160,
            minHeight: '100%',
          }}
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
