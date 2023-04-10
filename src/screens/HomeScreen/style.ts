import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export const style = StyleSheet.create({
  screenContainer: {
    backgroundColor: colors.white,
  },
  greetingsBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    marginHorizontal: 20,
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
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    elevation: 4,
  },
  mainBannerGradient: {
    borderRadius: 11,
    width: '100%',
  },
  illustration: {
    resizeMode: 'contain',
  },
  linearCardContainer: {
    flex: 1,
    borderRadius: 11,
    padding: 12,
    justifyContent: 'space-between',
  },
});
