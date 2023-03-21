import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';
import { Dimensions } from 'react-native';

const HEIGHT = Dimensions.get("screen").height

export const style = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    minHeight: HEIGHT,
    flexDirection: "column",
    justifyContent: "space-between"
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
  horizontalRule: {
    marginTop: 18,
    borderBottomColor: colors.T500,
    borderBottomWidth: 1,
  },
  ctaRegsiterText: {
    marginTop: 18,
    textAlign: 'center',
    fontWeight: '700',
    color: colors.T500,
  },
});
