import {colors} from '@src/const/colors';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchBarContainer: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 10,
    elevation: 5,
    columnGap: 10,
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
  searchResultCard: {
    paddingVertical: 10,
    borderBottomColor: colors.N500,
    borderBottomWidth: 1
  }
});
