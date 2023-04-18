import {SafeAreaView, Text, View} from 'react-native';
import {style} from './style';
import Mapbox from '@rnmapbox/maps';
import {MAP_BOX_TOKEN_ACCESS} from '@env';

Mapbox.setAccessToken(MAP_BOX_TOKEN_ACCESS);

function PickPointScreen() {
  return (
    <SafeAreaView style={style.screenContainer}>
      <Text>Pick Poin</Text>
      <View style={style.container}>
        <Mapbox.MapView style={style.map} />
      </View>
    </SafeAreaView>
  );
}

export default PickPointScreen;
