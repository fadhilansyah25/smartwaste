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
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import GeocodingServices from '@src/services/geocodingServices';
import {GeocodeTypes} from '@src/services/geocodingServices/domain';

const SearchLocationScreen = () => {
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<
    GeocodeTypes.SearchLoc[]
  >([]);

  const searchLocation = React.useCallback(async () => {
    try {
      const json = await GeocodingServices.searchLocationByQuery(searchText);
      setSearchResults(json);
    } catch (error) {
      console.error(error);
    }
  }, [searchText]);

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText.length > 2) {
        searchLocation();
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

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
            style={{padding: 0, paddingLeft: 10, flex: 1}}
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
