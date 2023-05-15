import {colors} from '@src/const/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.T500,
  },
  imageStyle: {
    width: '90%',
    resizeMode: 'contain',
    margin: 30,
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
