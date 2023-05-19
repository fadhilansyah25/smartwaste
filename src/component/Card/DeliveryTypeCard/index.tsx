import {colors} from '@src/const/colors';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  icon: JSX.Element;
  type: string;
  desc: string;
};

const DeliveryTypeCard = ({icon, type, desc}: Props) => {
  return (
    <View style={style.containerCard}>
      <View style={style.headerContainer}>
        <View style={style.iconContainer}>{icon}</View>
        <Text style={{fontWeight: '600', color: colors.N700}}>{type}</Text>
      </View>
      <Text style={{fontSize: 12}}>{desc}</Text>
    </View>
  );
};

export default DeliveryTypeCard;

const style = StyleSheet.create({
  containerCard: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.N500,
    borderRadius: 5,
    gap: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconContainer: {
    backgroundColor: colors.T500,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
