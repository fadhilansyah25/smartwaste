import {colors} from '@src/const/colors';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    position: 'relative',
  },
  map: {
    flex: 1,
  },
});
