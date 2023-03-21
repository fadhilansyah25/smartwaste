import {Image, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../const/colors';
import Octicons from 'react-native-vector-icons/Octicons';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

const CustomHeader = (props: {
  headerLeft?: React.ReactNode;
  HeaderProps?: NativeStackHeaderProps;
  LeftTitle?: string;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingVertical: 10,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <TouchableOpacity onPress={props.HeaderProps?.navigation.goBack}>
        <Octicons
          size={28}
          name="chevron-left"
          style={{padding: 5}}
          color={colors.N700}></Octicons>
      </TouchableOpacity>
      <Image
        style={{height: 40, resizeMode: 'contain', width: 100, marginLeft: 18}}
        source={require('../../assets/image/companylogo-small.png')}
      />
      {props.LeftTitle ? (
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            fontWeight: '600',
            color: colors.T500,
            fontSize: 16,
          }}>
          {props.LeftTitle}
        </Text>
      ) : (
        props.headerLeft
      )}
    </View>
  );
};

export default CustomHeader;
