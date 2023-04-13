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
  menuButtonContainer: {
    marginHorizontal: 20,
    backgroundColor: colors.white,
    marginTop: 20,
    borderRadius: 11,
    elevation: 4,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
  },
});
