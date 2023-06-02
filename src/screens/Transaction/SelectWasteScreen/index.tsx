import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import {style} from './style';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '@src/const/colors';
import {CustomButton} from '@src/component';
import {Types} from '@src/store/reducer/TransactionReducer';
import {useSelectWaste} from './hook';

const SelectWasteScreen = () => {
  const {
    state,
    checkedItems,
    navigation,
    wasteType,
    dispatch,
    handleCheckedItems,
  } = useSelectWaste();

  const renderCheckboxes = () =>
    wasteType.map(item => (
      <View key={item.id} style={style.checkBoxContainer}>
        <CheckBox
          value={checkedItems.includes(item.id)}
          onValueChange={() => handleCheckedItems(item.id)}
        />
        <Text style={{marginLeft: 8}}>{item.name}</Text>
      </View>
    ));

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        contentContainerStyle={style.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Text style={style.titleScreen}>
          Berikut adalah material yang bisa Anda kirimkan ke {state.mitra?.name}
        </Text>

        {/* Card Warning Info */}
        <View style={style.cardContainer}>
          <View style={style.cardHeaderContainer}>
            <Icon name="ios-warning" size={24} color={colors.O900} />
            <Text style={{color: colors.O900, fontWeight: '600'}}>
              PERHATIAN
            </Text>
          </View>
          <Text style={style.cardTextContent}>
            Harap untuk tidak mengirim jenis sampah selain yang tertera pada
            daftar ini karena material tersebut tidak diterima oleh Drop Point{' '}
            {state.mitra?.name}.
          </Text>
        </View>

        {/* Copywrite text */}
        <Text style={style.textInfo}>
          Pilih opsi berikut sesuai dengan jenis sampah yang akan Anda kirimkan!
        </Text>

        {/* CheckBox Render */}
        <View style={{rowGap: 12}}>{renderCheckboxes()}</View>
      </ScrollView>
      <View style={style.bottomNavContainer}>
        <CustomButton
          label="Selanjutnya"
          type="fill"
          activeOpacity={0.8}
          disabled={checkedItems.length === 0}
          buttonStyle={
            checkedItems.length === 0 ? {backgroundColor: colors.N300} : {}
          }
          onPress={() => {
            dispatch({
              type: Types.SetTransac,
              payload: {
                wasteType: checkedItems,
              },
            });
            navigation.navigate('DeliveryDetails');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectWasteScreen;
