import {StyleSheet} from 'react-native';
import {colors} from '../../../const/colors';

export const style = StyleSheet.create({
  screenContainer: {
    backgroundColor: colors.white,
  },
  dataCardSection: {
    marginHorizontal: 20,
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  subtitleText: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: '700',
  },
  listTutorialContainer: {
    marginTop: 12,
    paddingLeft: 20,
    marginBottom: 20,
    paddingBottom: 20,
  },
});
