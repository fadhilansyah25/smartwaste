import React from 'react';
import {Text, View} from 'react-native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {CustomHeader} from '@src/component';
import {colors} from '@src/const/colors';
import SearchMitraScreen from '@src/screens/SearchMitraScreen';
import auth from '@react-native-firebase/auth';

export type HomeStackParamaterList = {
  Home: undefined;
};

export type HomeStackProps = NativeStackScreenProps<HomeStackParamaterList>;

const HomeStack = createNativeStackNavigator<HomeStackParamaterList>();

const TransactionsStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="Home"
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
    </HomeStack.Navigator>
  );
};

const RightHeader = () => {
  return (
    <Text
      style={{
        flex: 1,
        textAlign: 'right',
        fontWeight: '700',
        color: colors.T500,
      }}>
      Ganti
    </Text>
  );
};

const CenterHeader = () => {
  return (
    <View style={{marginLeft: 20}}>
      <Text style={{fontSize: 12, fontWeight: '600', color: colors.T500}}>
        <Text style={{color: colors.N400}}>Lokasi Anda</Text>{'  '}
        {auth().currentUser?.displayName}
      </Text>
      <Text style={{fontSize: 12}}>{auth().currentUser?.displayName}</Text>
    </View>
  );
};

export default TransactionsStackScreen;
