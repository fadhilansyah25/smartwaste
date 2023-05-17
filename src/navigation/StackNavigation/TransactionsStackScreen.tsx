import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {CustomHeader} from '@src/component';
import {colors} from '@src/const/colors';
import {TransactionProvider} from '@src/store/context/TransactionContext';
import auth from '@react-native-firebase/auth';
import {Coordinate, MitraData} from '@src/types/mitra';
import {
  DeliveryDetailsScreen,
  MitraDetailScreen,
  PickPointScreen,
  SearchLocationScreen,
  SearchMitraScreen,
  SelectDeliveryServiceScreen,
  SelectWasteScreen,
} from '@src/screens/Transaction';

export type TransactionStackParamaterList = {
  SearchMitra: undefined;
  PickPoint: Coordinate | undefined;
  SearchLocation: undefined;
  MitraDetail: {mitra: MitraData};
  SelectWaste: undefined;
  DeliveryDetails: undefined;
  SelectDeliveryServices: undefined;
};

export type TransactionStackProps =
  NativeStackScreenProps<TransactionStackParamaterList>;

const TransactionStack =
  createNativeStackNavigator<TransactionStackParamaterList>();

const TransactionsStackScreen = () => {
  return (
    <TransactionProvider>
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
          initialParams={undefined}
          options={{
            animation: 'slide_from_right',
            headerShown: true,
            header: props => (
              <CustomHeader
                headerProps={props}
                backButton
                logo={false}
                headerCenter={<CenterHeader />}
                elevation={5}
              />
            ),
          }}
        />
        <TransactionStack.Screen
          name="SearchLocation"
          component={SearchLocationScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: false,
          }}
        />
        <TransactionStack.Screen
          name="MitraDetail"
          component={MitraDetailScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: true,
            header: props => (
              <CustomHeader
                headerProps={props}
                backButton
                logo={false}
                headerRight={<RightHeader />}
                headerCenter={<CenterHeader />}
                elevation={5}
              />
            ),
          }}
        />
        <TransactionStack.Screen
          name="SelectWaste"
          component={SelectWasteScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: true,
            header: props => (
              <CustomHeader
                headerProps={props}
                backButton
                logo={false}
                headerCenter={
                  <CenterHeaderTitleCustom title="Pilih Jenis Material Sampah" />
                }
                elevation={5}
              />
            ),
          }}
        />
        <TransactionStack.Screen
          name="DeliveryDetails"
          component={DeliveryDetailsScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: true,
            header: props => (
              <CustomHeader
                headerProps={props}
                backButton
                logo={false}
                headerCenter={
                  <CenterHeaderTitleCustom title="Detail Pengiriman" />
                }
                elevation={5}
              />
            ),
          }}
        />
        <TransactionStack.Screen
          name="SelectDeliveryServices"
          component={SelectDeliveryServiceScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: true,
            header: props => (
              <CustomHeader
                headerProps={props}
                backButton
                logo={false}
                headerCenter={
                  <CenterHeaderTitleCustom title="Pilih Jasa Pengiriman" />
                }
                elevation={5}
              />
            ),
          }}
        />
      </TransactionStack.Navigator>
    </TransactionProvider>
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

const CenterHeaderTitleCustom = ({title}: {title: string}) => {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '600',
          color: colors.T500,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default TransactionsStackScreen;
