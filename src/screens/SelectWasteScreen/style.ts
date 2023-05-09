import {colors} from '@src/const/colors';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    columnGap: 18,
    borderWidth: 1,
    borderColor: colors.T500,
    borderRadius: 5,
  },
  titleScreen: {
    color: colors.T500,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
  textInfo: {
    color: colors.T500,
    fontSize: 12,
    marginTop: 24,
    marginBottom: 12,
  },
  textInfo2: {
    color: colors.T500,
    fontSize: 12,
    marginTop: 24,
    marginBottom: 12,
  },
});
