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
    paddingBottom: 28 + 40 + 20,
    marginTop: 24
  },
});
