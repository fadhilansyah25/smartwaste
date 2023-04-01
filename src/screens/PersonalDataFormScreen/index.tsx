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
import {
  selectDistrict,
  selectProvincies,
  selectRegency,
} from '../../utils/regionSorts';
import {usePersonalDataFromScreen} from './hook';
import {style} from './style';

const PersonalDataFormScreen = (screenProps: AuthStackProps) => {
  const {handleSubmit, state, dispatch} =
    usePersonalDataFromScreen(screenProps);

  let regionData = selectRegency(state.provincesID);
  let districtData = selectDistrict(state.regencyID);

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
              onChangeText={text =>
                dispatch({
                  type: 'Handle_Input',
                  payload: {
                    fullName: text,
                  },
                })
              }
            />
            <InputDate
              initialDate={state.birthDate}
              onChangeDate={(_, date) =>
                dispatch({
                  type: 'Handle_Input',
                  payload: {
                    birthDate: date,
                  },
                })
              }
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
              onChangeText={text =>
                dispatch({
                  type: 'Handle_Input',
                  payload: {
                    address: text,
                  },
                })
              }
            />
            <SelectListDropDown
              label="Provinsi"
              setSelected={(val: any) =>
                dispatch({
                  type: 'Handle_Input',
                  payload: {
                    provincesID: val,
                  },
                })
              }
              data={selectProvincies}
              boxStyles={{borderRadius: 5, paddingVertical: 15}}
              dropdownStyles={{borderRadius: 5}}
              defaultOption={{key: 11, value: 'ACEH'}}
              containerStyle={{marginTop: 14}}
              search={false}
            />
            <SelectListDropDown
              label="Kabupaten"
              setSelected={(val: any) =>
                dispatch({
                  type: 'Handle_Input',
                  payload: {
                    regencyID: val,
                  },
                })
              }
              data={regionData}
              boxStyles={{borderRadius: 5, paddingVertical: 15}}
              dropdownStyles={{borderRadius: 5}}
              containerStyle={{marginTop: 14}}
              defaultOption={regionData[0]}
              search={false}
            />
            <SelectListDropDown
              label="Kecamatan"
              setSelected={(val: any) =>
                dispatch({
                  type: 'Handle_Input',
                  payload: {
                    districtID: val,
                  },
                })
              }
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
