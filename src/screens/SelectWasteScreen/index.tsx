import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {style} from './style';
import {TransactionContext} from '@src/store/context/TransactionContext';
import CheckBox from '@react-native-community/checkbox';

const data = [
  {id: 1, name: 'Plastik'},
  {id: 2, name: 'Jelantah'},
  {id: 3, name: 'Kaca'},
  {id: 4, name: 'Metal'},
  {id: 5, name: 'Kertas'},
  {id: 6, name: 'UBC'},
  {id: 7, name: 'Styrofoam'},
];

const SelectWasteScreen = () => {
  const {state, dispatch} = React.useContext(TransactionContext);
  const [checkedItems, setCheckedItems] = React.useState<any>([]);

  const handleCheckedItems = (id: number) => {
    const isChecked = checkedItems.includes(id);
    if (isChecked) {
      const filteredItems = checkedItems.filter((itemId: any) => itemId !== id);
      setCheckedItems(filteredItems);
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const renderCheckboxes = () =>
    data.map(item => (
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
      <Text style={style.titleScreen}>
        Berikut adalah material yang bisa Anda kirimkan ke Bank Sampah Bumi
        Lestari
      </Text>
      <View style={{paddingHorizontal: 12, paddingVertical: 8}}>
        <Text style={style.textInfo}>
          Harap untuk tidak mengirim jenis sampah selain yang tertera pada
          daftar ini karena material tersebut tidak diterima oleh Drop Point
          Bank Sampah Bumi Lestari.
        </Text>
      </View>
      <Text style={style.textInfo2}>
        Pilih opsi berikut sesuai dengan jenis sampah yang akan Anda kirimkan!
      </Text>
      <View style={{rowGap: 12}}>{renderCheckboxes()}</View>
    </SafeAreaView>
  );
};

export default SelectWasteScreen;
