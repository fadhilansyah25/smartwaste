import {colors} from '@src/const/colors';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    position: 'relative',
  },
  mapContainer: {
    position: 'relative',
    width: '100%',
    height: 400,
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
  searchBarContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    columnGap: 10,
    borderColor: colors.T500,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.N100,
    flex: 1,
  },
  getCurrentLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
