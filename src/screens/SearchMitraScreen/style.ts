import {StyleSheet} from 'react-native';
import {colors} from '@src/const/colors';

export const style = StyleSheet.create({
  screenContainer: {
    backgroundColor: colors.white,
    minHeight: '100%',
  },
  searchBarContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: colors.T100,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  searchBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    columnGap: 10,
    borderColor: colors.T500,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.N100,
    flex: 1,
  },
  mitraListContainer: {
    backgroundColor: colors.white,
    paddingTop: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    paddingBottom: 160,
    minHeight: '100%',
  },
  mitraCardContainer: {
    padding: 12,
    backgroundColor: colors.white,
    elevation: 4,
    borderRadius: 5,
  },
  mitraCardTextAddrees: {
    color: colors.N500,
    fontSize: 12,
    fontWeight: '400',
  },
  mitraCardTextHour: {
    color: colors.T600,
    fontSize: 12,
    fontWeight: '600',
  },
  mitraCardTextPhone: {
    color: colors.T800,
    fontSize: 12,
    fontWeight: '400',
  },
  mitraCardTextDistance: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.T800,
  },
});
