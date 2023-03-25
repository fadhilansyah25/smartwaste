import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import CustomButton from '../../component/Button';
import InputDate from '../../component/InputDate';
import InputText from '../../component/InputText';
import SelectListDropDown from '../../component/SelectList';
import {minBirthday} from '../../utils/getInitialDate';
import {selectProvincies, selectRegions} from '../../utils/getProvincies';
import {style} from './style';

const PersonalDataFormScreen = () => {
  const [provSelected, setProvSelected] = React.useState('11');
  const [regSelected, setRegSelected] = React.useState('');
  let region = selectRegions(provSelected);

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{minHeight: '100%'}}>
        <KeyboardAvoidingView
          enabled
          style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={{marginTop: 24}}>
            <InputText
              placeholder="Nama sesuai KTP"
              label="Nama"
              returnKeyType="next"
            />
            <InputDate
              initialDate={minBirthday}
              placeholder="DD/MM/YYYY"
              label="Tanggal Lahir"
              keyboardType="numeric"
              editable={false}
              containerStyle={{marginTop: 14}}
            />
            <InputText
              placeholder="Alamat sesuai KTP"
              label="Alamat"
              returnKeyType="next"
              containerStyle={{marginTop: 14}}
              multiline={true}
              numberOfLines={3}
            />
            <SelectListDropDown
              label="Provinsi"
              setSelected={(val: any) => setProvSelected(val)}
              data={selectProvincies}
              boxStyles={{borderRadius: 5, paddingVertical: 15}}
              dropdownStyles={{borderRadius: 5}}
              defaultOption={{key: 11, value: 'ACEH'}}
              containerStyle={{marginTop: 14}}
              search={false}
            />
            <SelectListDropDown
              label="Kabupaten"
              setSelected={(val: any) => setRegSelected(val)}
              data={region}
              boxStyles={{borderRadius: 5, paddingVertical: 15}}
              dropdownStyles={{borderRadius: 5}}
              containerStyle={{marginTop: 14}}
              defaultOption={region[0]}
              search={false}
            />
          </View>
          <View style={{marginVertical: 20}}>
            <CustomButton
              label="Submit"
              type="fill"
              style={{paddingVertical: 11}}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalDataFormScreen;
