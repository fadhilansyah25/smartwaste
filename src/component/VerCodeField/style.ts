import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../const/colors';

export const CELL_SIZE = 52;
export const CELL_BORDER_RADIUS = 5;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const style = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    paddingHorizontal: 2,
    justifyContent: 'space-between',
  },
  cell: {
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: colors.T500,
    backgroundColor: '#fff',

    // Android
    elevation: 3,
  },
});

export default style;
