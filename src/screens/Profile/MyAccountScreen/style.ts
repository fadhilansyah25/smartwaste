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
    paddingBottom: 20,
    marginTop: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  mainBanner: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 182,
    rowGap: 10,
  },
  menuButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.N500,
    borderBottomWidth: 1,
    paddingVertical: 14,
  },
});
