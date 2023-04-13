import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../const/colors';

interface Props {
  backgroundColor: string[];
  icon?: React.ReactNode;
  title: string;
  data: string | number | undefined;
  units: string;
  iconContainerColor?: string;
}

const AchivementCard = ({
  backgroundColor,
  title,
  data,
  units,
  icon,
  iconContainerColor,
}: Props) => {
  return (
    <View style={{flex: 1, height: 132}}>
      <LinearGradient
        colors={backgroundColor}
        style={style.linearCardContainer}
        start={{x: 0, y: 0}}
        end={{x: 0.7, y: 0}}>
        <View style={style.titleContainer}>
          <View
            style={{
              ...style.iconContainer,
              backgroundColor: iconContainerColor,
            }}>
            {icon}
          </View>
          <Text style={{fontWeight: '700', color: colors.white}}>{title}</Text>
        </View>
        <Text style={style.dataText}>{data}</Text>
        <Text style={{color: colors.white, fontWeight: '600'}}>{units}</Text>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  linearCardContainer: {
    flex: 1,
    borderRadius: 11,
    padding: 12,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataText: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
  },
});

export default AchivementCard;
