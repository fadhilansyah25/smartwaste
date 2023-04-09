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

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 4,
  },
  mainBannerGradient: {
    borderRadius: 10,
    width: '100%',
  },
  illustration: {
    resizeMode: 'contain',
  },
});
