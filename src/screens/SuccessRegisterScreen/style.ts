import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export const style = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  companyLogo: {
    marginTop: 30,
    height: 40,
    width: 105,
    resizeMode: 'contain',
  },
  illustration: {
    width: 280,
    resizeMode: 'contain',
    marginTop: 36,
  },
  mainText: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 14,
    textAlign: 'center',
    color: colors.T700,
    fontFamily: 'Inter-Bold',
  },
  descText: {
    width: 260,
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
    color: colors.T700,
    fontFamily: 'Inter-re',
    textTransform: 'capitalize',
  },
});
