import {colors} from '@src/const/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  label: string;
  size?: number;
}

const AvatarBadge = ({label, size = 40}: Props) => {
  return (
    <View style={[style.avatarBagde, {height: size, width: size}]}>
      {label ? (
        <Text style={{textAlign: 'center'}}>
          {label.match(/\b(\w)/g)?.join('')}
        </Text>
      ) : null}
    </View>
  );
};

export default AvatarBadge;

const style = StyleSheet.create({
  avatarBagde: {
    borderRadius: 40,
    backgroundColor: colors.N300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
