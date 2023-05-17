import {colors} from '@src/const/colors';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bonusInfoCard: {
    rowGap: 10,
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: colors.T100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.G700,
  },
  scrollView: {
    rowGap: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    paddingBottom: 28 + 40,
    marginTop: 24,
  },
});
