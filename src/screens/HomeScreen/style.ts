import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export const style = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  greetingsBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
  },
  avatarBagde: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.T600,
  },
  mainBannerContainer: {
    marginTop: 20,
  },
  mainBannerGradient: {
    borderRadius: 10,
    width: '100%',
  },
  illustration: {
    resizeMode: 'contain',
  },
});
