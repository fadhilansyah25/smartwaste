import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {CustomHeader} from '@src/component';
import {colors} from '@src/const/colors';
import SearchMitraScreen from '@src/screens/SearchMitraScreen';
import PickPointScreen from '@src/screens/PickPointScreen';
import auth from '@react-native-firebase/auth';

export type TransactionStackParamaterList = {
  SearchMitra: undefined;
  PickPoint: undefined;
};

export type TransactionStackProps =
  NativeStackScreenProps<TransactionStackParamaterList>;

const TransactionStack =
  createNativeStackNavigator<TransactionStackParamaterList>();

const TransactionsStackScreen = () => {
  return (
    <TransactionStack.Navigator
      initialRouteName="SearchMitra"
      screenOptions={{headerShown: false}}>
      <TransactionStack.Screen
        name="SearchMitra"
        component={SearchMitraScreen}
        options={{
          headerShown: true,
          header: props => (
            <CustomHeader
              headerProps={props}
              backButton
              logo={false}
              headerRight={<RightHeader />}
              headerCenter={<CenterHeader />}
              elevation={0}
            />
          ),
        }}
      />
      <TransactionStack.Screen
        name="PickPoint"
        component={PickPointScreen}
        options={{
          headerShown: true,
          header: props => (
            <CustomHeader
              headerProps={props}
              backButton
              logo={false}
              headerCenter={<CenterHeader />}
              elevation={0}
            />
          ),
        }}
      />
    </TransactionStack.Navigator>
  );
};

const RightHeader = () => {
  const navigation = useNavigation<TransactionStackProps['navigation']>();

  return (
    <TouchableOpacity
      style={{flex: 1}}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('PickPoint')}>
      <Text
        style={{
          textAlign: 'right',
          fontWeight: '700',
          color: colors.T500,
        }}>
        Ganti
      </Text>
    </TouchableOpacity>
  );
};

const CenterHeader = () => {
  return (
    <View style={{marginLeft: 20}}>
      <Text style={{fontSize: 12, fontWeight: '600', color: colors.T500}}>
        <Text style={{color: colors.N400}}>Lokasi Anda</Text>
        {'  '}
        {auth().currentUser?.displayName}
      </Text>
      <Text style={{fontSize: 12}}>{auth().currentUser?.displayName}</Text>
    </View>
  );
};

export default TransactionsStackScreen;
