import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  label: string;
}

const AvatarBadge = ({label}: Props) => {
  return (
    <View style={style.avatarBagde}>
      <Text style={{textAlign: 'center'}}>
        {label.match(/\b(\w)/g)?.join('')}
      </Text>
    </View>
  );
};

export default AvatarBadge;

const style = StyleSheet.create({
  avatarBagde: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
