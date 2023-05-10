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
    fontSize: 16,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 24,
  },
  cardContainer: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: colors.O200,
    borderRadius: 5,
    rowGap: 12,
  },
  cardHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  cardTextContent: {
    color: colors.O900,
    fontSize: 12,
    marginBottom: 8,
  },
  textInfo: {
    color: colors.T500,
    fontSize: 12,
    marginTop: 24,
    marginBottom: 12,
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
