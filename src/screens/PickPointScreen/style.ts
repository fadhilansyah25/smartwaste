import {colors} from '@src/const/colors';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    position: 'relative',
  },
  map: {
    flex: 1,
  },
});
