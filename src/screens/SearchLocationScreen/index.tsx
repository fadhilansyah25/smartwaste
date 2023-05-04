import React from 'react';
import {View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@src/const/colors';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import {SearchLOC} from '@src/types/searchLoc';

const SearchLocationScreen = () => {
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<SearchLOC[]>([]);

  const searchLocation = React.useCallback(async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${searchText}&format=json`,
      );
      const json = await response.json();
      console.log(json);
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
    </SafeAreaView>
  );
};

export default SearchLocationScreen;
