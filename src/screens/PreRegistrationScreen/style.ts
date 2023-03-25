import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export const style = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  illustration: {
    height: 150,
    width: 282,
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
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
    color: colors.T700,
    fontFamily: 'Inter-re',
    textTransform: 'capitalize',
  },
  discText: {
    fontSize: 12,
    color: colors.T500,
    marginTop: 14,
    textAlign: 'justify',
  },
});
