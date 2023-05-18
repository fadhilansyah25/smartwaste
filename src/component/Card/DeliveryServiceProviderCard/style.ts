import {colors} from '@src/const/colors';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.N300,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.N100,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: colors.white,
  },
});
