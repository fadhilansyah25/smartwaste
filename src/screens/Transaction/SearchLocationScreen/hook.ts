import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import GeocodingServices from '@src/services/geocodingServices';

export const useSearchLocation = () => {
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

  // SideEffect
  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText.length > 2) {
        searchLocation();
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  return {
    navigation,
    searchText,
    searchResults,
    setSearchText,
  } as const;
};
