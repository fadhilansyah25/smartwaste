import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export const style = StyleSheet.create({
  screenContainer: {
    backgroundColor: colors.white,
  },
  linearCardContainer: {
    flex: 1,
    borderRadius: 11,
    padding: 12,
    justifyContent: 'space-between',
  },
});
