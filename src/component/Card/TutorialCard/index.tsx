import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  Image,
  ImageProps,
  StyleSheet,
} from 'react-native';
import {colors} from '../../../const/colors';

interface Props {
  imageUrl: string | ImageProps['source'];
}

const TutorialCard = ({imageUrl}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={style.cardContainer}>
      <Image
        source={typeof imageUrl === 'string' ? {uri: imageUrl} : imageUrl}
        style={style.imageStyle}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    marginRight: 20,
    width: Dimensions.get('window').width - 40,
    height: 190,
    elevation: 4,
    borderRadius: 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: colors.white,
  },
});

export default TutorialCard;
