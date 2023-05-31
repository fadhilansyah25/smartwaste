import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@src/const/colors';
import FilterSvg from '@src/assets/svg/filter.svg';
import MarkerSvg from '@src/assets/svg/map-marker.svg';
import {useSearchMitra} from './hook';
import dayjs from 'dayjs';

const SearchMitraScreen = () => {
  const {navigation, mitra} = useSearchMitra();

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
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('MitraDetail', {mitra: item})}>
              <View style={style.mitraCardContainer}>
                <View style={{flexDirection: 'row', columnGap: 14}}>
                  <View style={{rowGap: 10, flex: 1}}>
                    <View style={{rowGap: 8}}>
                      <Text style={{color: colors.N900, fontWeight: '500'}}>
                        {item.name}
                      </Text>
                      <Text style={style.mitraCardTextAddrees}>
                        {item.address}
                      </Text>
                    </View>
                    <Text style={style.mitraCardTextHour}>
                      Buka Sampai Jam {item.closeTime} WIB
                    </Text>
                    <Text style={style.mitraCardTextPhone}>
                      {item.phoneNumber}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', columnGap: 4}}>
                    <MarkerSvg />
                    <Text style={style.mitraCardTextDistance}>
                      {item.distance} Km
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchMitraScreen;
