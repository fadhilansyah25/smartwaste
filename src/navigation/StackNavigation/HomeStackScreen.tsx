import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '@src/screens/HomeScreen';
import CustomHeader from '@src/component/CustomHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@src/const/colors';

export type HomeStackParamaterList = {
  Home: undefined;
};

export type HomeStackProps = NativeStackScreenProps<HomeStackParamaterList>;

const HomeStack = createNativeStackNavigator<HomeStackParamaterList>();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          header: props => (
            <CustomHeader
              headerProps={props}
              headerRight={<RightHeaderIcon />}
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

export default HomeStackScreen;
