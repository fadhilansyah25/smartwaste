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
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {minBirthday} from '../../utils/getInitialDate';
import {
  selectDistrict,
  selectProvincies,
  selectRegency,
} from '../../utils/regionSorts';
import {usePersonalDataFromScreen} from './hook';
import {style} from './style';

const PersonalDataFormScreen = (screenProps: AuthStackProps) => {
  const {handleSubmit} = usePersonalDataFromScreen(screenProps);
  const [provSelected, setProvSelected] = React.useState(11);
  const [regcSelected, setRegcSelected] = React.useState(1101);
  const [distSelected, setDistSelected] = React.useState(1101010);

  let regionData = selectRegency(provSelected);
  let districtData = selectDistrict(regcSelected);

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
              setSelected={(val: any) => setRegcSelected(val)}
              data={regionData}
              boxStyles={{borderRadius: 5, paddingVertical: 15}}
              dropdownStyles={{borderRadius: 5}}
              containerStyle={{marginTop: 14}}
              defaultOption={regionData[0]}
              search={false}
            />
            <SelectListDropDown
              label="Kecamatan"
              setSelected={(val: any) => setDistSelected(val)}
              data={districtData}
              boxStyles={{borderRadius: 5, paddingVertical: 15}}
              dropdownStyles={{borderRadius: 5}}
              containerStyle={{marginTop: 14}}
              defaultOption={districtData[0]}
              search={false}
            />
          </View>
          <View style={{marginTop: 32, marginBottom: 72}}>
            <CustomButton
              label="Submit"
              type="fill"
              style={{paddingVertical: 11}}
              onPress={handleSubmit}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalDataFormScreen;
