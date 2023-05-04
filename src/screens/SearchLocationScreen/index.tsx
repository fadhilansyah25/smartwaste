import React from 'react';
import {View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@src/const/colors';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';

const SearchLocationScreen = () => {
  const navigation = useNavigation<TransactionStackProps['navigation']>();

  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={style.searchBarContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('PickPoint')}>
          <Icon name="ios-chevron-back" size={36} color={colors.T500} />
        </TouchableOpacity>
        <View style={style.searchBarContent}>
          <TextInput
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
