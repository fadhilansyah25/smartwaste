import {SafeAreaView, ScrollView} from 'react-native';
import {style} from './style';

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"></ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
