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
  titleText: {
    color: colors.T500,
    fontWeight: '600',
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
  inputWeightContainer: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.N500,
  },
  inputWeight: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    color: colors.T900,
    fontSize: 14,
    fontWeight: '500',
    paddingVertical: 0,
  },
  inputWeightLogo: {
    backgroundColor: colors.T500,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDetailDelivery: {
    fontWeight: '600',
    color: colors.T500,
    fontSize: 12,
  },
});
