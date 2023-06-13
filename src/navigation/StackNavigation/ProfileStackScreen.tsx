import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import CustomHeader from '@src/component/CustomHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@src/const/colors';
import MyAccountScreen from '@src/screens/Profile/MyAccountScreen';

export type ProfileStackParamaterList = {
  MyAccount: undefined;
};

export type ProfileStackProps =
  NativeStackScreenProps<ProfileStackParamaterList>;

const ProfileStack = createNativeStackNavigator<ProfileStackParamaterList>();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="MyAccount"
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen
        name="MyAccount"
        component={MyAccountScreen}
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
    </ProfileStack.Navigator>
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

export default ProfileStackScreen;
