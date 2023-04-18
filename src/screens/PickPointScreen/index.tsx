import {SafeAreaView, Text, View} from 'react-native';
import {style} from './style';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken(
  'pk.eyJ1IjoiZmFkaGlsYW5zeWFoMjUiLCJhIjoiY2t6MTJkdXU4MGZ4bjJ2cWZyYmxpcjRkeiJ9.M7A_UY3v9F8yFvyknwU5_g',
);

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
