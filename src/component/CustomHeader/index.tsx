import {Image, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../const/colors';
import Octicons from 'react-native-vector-icons/Octicons';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

const CustomHeader = (props: {
  backButton?: boolean;
  headerRight?: React.ReactNode;
  headerProps?: NativeStackHeaderProps;
  rightTitle?: string;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingVertical: 16,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      {props.backButton ? (
        <TouchableOpacity onPress={props.headerProps?.navigation.goBack}>
          <Octicons
            size={28}
            name="chevron-left"
            style={{padding: 5}}
            color={colors.N700}
          />
        </TouchableOpacity>
      ) : null}
      <Image
        style={{height: 40, resizeMode: 'contain', width: 100}}
        source={require('../../assets/image/companylogo-small.png')}
      />
      {props.rightTitle ? (
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            fontWeight: '600',
            color: colors.T500,
            fontSize: 14,
          }}>
          {props.rightTitle}
        </Text>
      ) : (
        props.headerRight
      )}
    </View>
  );
};

export default CustomHeader;
