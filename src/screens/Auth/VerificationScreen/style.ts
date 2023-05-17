import {StyleSheet} from 'react-native';
import {colors} from '@src/const/colors';
import {Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;

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
});
