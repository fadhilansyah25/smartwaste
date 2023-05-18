import {TouchableOpacity, View, Text, ImageProps, Image} from 'react-native';
import {style} from './style';

export const DeliveryServiceCard = ({
  handlePress,
  serviceName,
  startingPrice,
  serviceLogo,
}: {
  handlePress?: () => void;
  serviceName?: string;
  startingPrice?: string;
  serviceLogo?: string | ImageProps['source'];
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={!handlePress}
      activeOpacity={0.8}>
      <View style={style.cardContainer}>
        <Text>{serviceName}</Text>
        {serviceLogo ? (
          <Image
            source={
              typeof serviceLogo === 'string' ? {uri: serviceLogo} : serviceLogo
            }
            style={style.imageStyle}
          />
        ) : null}
        {startingPrice && (
          <Text style={{fontSize: 10}}>
            Mulai dari{'  '}
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {startingPrice}
            </Text>
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default DeliveryServiceCard;
