import React from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@src/const/colors';
import {useSearchLocation} from './hook';

const SearchLocationScreen = () => {
  const {searchText, navigation, searchResults, setSearchText} =
    useSearchLocation();

  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={style.searchBarContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('PickPoint')}>
          <Icon name="ios-chevron-back" size={36} color={colors.T500} />
        </TouchableOpacity>
        <View style={style.searchBarContent}>
          <TextInput
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="Cari Lokasi"
            style={style.searchBarTextField}
          />
          <Icon name="ios-search" size={24} />
        </View>
      </View>

      <FlatList
        contentContainerStyle={{paddingHorizontal: 20, marginTop: 12}}
        data={searchResults}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PickPoint', {
                lat: Number(item.lat),
                long: Number(item.lon),
              });
            }}>
            <View style={style.searchResultCard}>
              <Text>{item.display_name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default SearchLocationScreen;
