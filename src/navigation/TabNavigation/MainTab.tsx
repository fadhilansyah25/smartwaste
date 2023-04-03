import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../const/colors';
import HomeStackScreen from '../StackNavigation/HomeStackScreen';

export type RootParamaterList = {
  HomeStack: undefined;
};

const Tab = createBottomTabNavigator<RootParamaterList>();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'TransactionsStack') {
            iconName = focused ? 'ios-trash' : 'ios-trash-outline';
          } else if (route.name === 'PoinStack') {
            iconName = focused ? 'ios-gift' : 'ios-gift-outline';
          } else if (route.name === 'ProfileStack') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          return (
            <Ionicons name={iconName as string} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="HomeStack" component={HomeStackScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainTab;
