import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '@src/const/colors';
import HomeStackScreen from '../StackNavigation/HomeStackScreen';
import TransactionsStackScreen, {
  TransactionStackParamaterList,
} from '../StackNavigation/TransactionsStackScreen';
import ProfileStackScreen from '../StackNavigation/ProfileStackScreen';
import PointStackScreen from '../StackNavigation/PointStackScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootParamaterList = {
  HomeStack: undefined;
  TransactionsStack: NavigatorScreenParams<TransactionStackParamaterList>;
  ProfileStack: undefined;
  PoinStack: undefined;
};

export type TabProps = NativeStackScreenProps<RootParamaterList>;
const Tab = createBottomTabNavigator<RootParamaterList>();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      detachInactiveScreens={true}
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
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen
        name="TransactionsStack"
        component={TransactionsStackScreen}
        listeners={({navigation, route}) => ({
          tabPress: () => navigation.navigate('TransactionHistory'),
        })}
        options={({route}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route);
            const validScreen = [
              'PickPoint',
              'SearchLocation',
              'MitraDetail',
              'SelectWaste',
              'DeliveryDetails',
              'SelectDeliveryServices',
              'DetailsDeliveryService',
              'DeliveryConfirm',
              'CameraScreen',
              'SuccessTransaction',
            ];
            if (validScreen.includes(routeName as string))
              return {display: 'none'};
            return;
          })(route),
        })}
      />
      <Tab.Screen name="PoinStack" component={PointStackScreen} />
      <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
