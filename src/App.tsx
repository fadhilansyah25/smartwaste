import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import {AuthStackScreen} from './navigation/StackNavigation/AuthStackScreen';

export type RootStackParamameterList = {
  Splash: undefined;
  Auth: undefined;
  Main: undefined;
};

export type RootStackProps = NativeStackScreenProps<RootStackParamameterList>;
const RootStack = createNativeStackNavigator<RootStackParamameterList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Splash'}>
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="Auth" component={AuthStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
