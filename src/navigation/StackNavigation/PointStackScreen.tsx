import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import CustomHeader from '@src/component/CustomHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@src/const/colors';
import MyPointScreen from '@src/screens/PoinStack/MyPointScreen';

export type PointStackParamaterList = {
  MyPoint: undefined;
};

export type PointStackProps = NativeStackScreenProps<PointStackParamaterList>;

const PointStack = createNativeStackNavigator<PointStackParamaterList>();

const PointStackScreen = () => {
  return (
    <PointStack.Navigator
      initialRouteName="MyPoint"
      screenOptions={{headerShown: false}}>
      <PointStack.Screen
        name="MyPoint"
        component={MyPointScreen}
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
    </PointStack.Navigator>
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

export default PointStackScreen;
