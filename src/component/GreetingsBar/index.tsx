import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../const/colors';
import AvatarBadge from '../AvatarBadge';

interface Props {
  displayName: string | undefined;
}

const GreetingsBar = ({displayName}: Props) => {
  return (
    <View style={style.greetingsBarContainer}>
      <Text style={style.welcomeText}>Selamat Datang!</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* display name */}
        <View style={{marginRight: 10}}>
          <Text style={style.displayName}>{displayName}</Text>
          <Text style={{fontSize: 12, lineHeight: 12}}>volunter</Text>
        </View>

        {/* Avatar Badge */}
        <AvatarBadge label={displayName as string} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  greetingsBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    marginHorizontal: 20,
  },
  displayName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.T600,
  },
  welcomeText: {
    color: colors.T600,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default GreetingsBar;
