import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {CustomHeader} from '@src/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@src/const/colors';
import SearchMitraScreen from '@src/screens/SearchMitraScreen';

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
              headerRight={<RightHeaderIcon />}
              elevation={0}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const RightHeaderIcon = () => {
  return (
    <MaterialIcons
      style={{flex: 1, textAlign: 'right'}}
      name="headset-mic"
      color={colors.T600}
      size={24}></MaterialIcons>
  );
};

export default TransactionsStackScreen;
