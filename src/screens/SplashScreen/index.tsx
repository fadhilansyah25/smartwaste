import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Image, Text} from 'react-native';
import {RootStackProps} from '../../App';
import {colors} from '../../const/colors';
import {styles} from './style';
import firebaseServices from '@src/services/firebaseServices';

const SplashScreen = ({navigation}: RootStackProps) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let timeOut = setTimeout(() => {
      setAnimating(false);
      const user = firebaseServices.firebaseCheckCurrentUser;
      navigation.replace(!user ? 'Auth' : 'Main');
    }, 2000);

    return () => {
      clearTimeout(timeOut);
      isMounted = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/companylogo.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.companyName}>Smart Waste</Text>
      <ActivityIndicator
        animating={animating}
        color={colors.white}
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;
