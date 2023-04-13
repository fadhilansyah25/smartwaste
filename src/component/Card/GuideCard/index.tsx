import React from 'react';
import {View, Image, Text, ImageProps, StyleSheet} from 'react-native';
import {colors} from '../../../const/colors';

interface Props {
  title: string;
  desc: string;
  imageUrl: string | ImageProps['source'];
}

const GuideCard = ({imageUrl, title, desc}: Props) => {
  return (
    <View style={style.imageStyle}>
      <Image
        source={typeof imageUrl === 'string' ? {uri: imageUrl} : imageUrl}
        resizeMethod={'resize'}
        resizeMode={'contain'}
      />
      <Text style={style.titleText}>{title}</Text>
      <Text style={style.descText}>{desc}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  imageStyle: {
    width: 225,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2.5,
    marginRight: 20,
    borderRadius: 11,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    paddingBottom: 20,
    elevation: 4,
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 8,
  },
  descText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 12,
  },
});

export default GuideCard;
