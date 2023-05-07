import {colors} from '@src/const/colors';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    justifyContent: "space-between"
  },
  titleScreen: {
    fontSize: 18,
    color: colors.T800,
    fontWeight: '600',
    marginTop: 12,
  },
  cardContainer: {
    padding: 12,
    backgroundColor: colors.N100,
    elevation: 2,
    borderRadius: 5,
    marginTop: 18,
  },
  cardHourInfoText: {
    color: colors.T600,
    fontSize: 12,
    fontWeight: '600',
  },
  cardPhoneInfoText: {
    color: colors.T800,
    fontSize: 12,
    fontWeight: '400',
  },
  cardAdreesInfoText: {
    color: colors.N500,
    fontSize: 12,
    fontWeight: '400',
  },
  mapContainer: {
    position: 'relative',
    // width: '100%',
    // height: 350,
    flex: 1,
    marginTop: 10,
  },
  mapMarker: {
    position: 'absolute',
    zIndex: 10,
    right: '44.5%',
    top: '42%',
  },
  map: {
    flex: 1,
  },
});
