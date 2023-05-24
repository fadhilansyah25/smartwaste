import {colors} from '@src/const/colors';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewStyle: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    paddingBottom: 28 + 100,
    marginTop: 20,
  },
  bottomNavContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.white,
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 14,
    elevation: 10,
  },
});
