import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, Text} from 'react-native';
import {RootStackProps} from '../../App';
import {colors} from '../../const/colors';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}: RootStackProps) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setAnimating(false);
      const user = auth().currentUser;

      navigation.replace(!user ? 'Auth' : 'Main');
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/companylogo.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.T500,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  companyName: {
    fontWeight: '600',
    fontSize: 30,
    color: colors.white,
  },
});
