import {colors} from '@src/const/colors';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.N100,
  },
  bannerContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12
  },
});
