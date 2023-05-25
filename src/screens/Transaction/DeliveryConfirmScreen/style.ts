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
    paddingBottom: 28 + 100,
    marginTop: 20,
  },
  dashedLine: {
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    flex: 1,
    width: 1,
  },
  mitraHeaderCard: {
    marginTop: 20,
    justifyContent: 'center',
    marginBottom: 5,
  },
  inputText: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.N100,
    color: colors.T900,
    fontSize: 14,
    fontWeight: '500',
    borderColor: colors.T500,
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
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
