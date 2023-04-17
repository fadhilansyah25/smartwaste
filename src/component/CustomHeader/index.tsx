import {Image, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../const/colors';
import Octicons from 'react-native-vector-icons/Octicons';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

interface Props {
  backButton?: boolean;
  headerRight?: React.ReactNode;
  headerCenter?: React.ReactNode;
  headerProps?: NativeStackHeaderProps;
  rightTitle?: string;
  elevation?: number;
  logo?: boolean;
}

const CustomHeader = ({
  headerProps,
  backButton,
  headerRight,
  rightTitle,
  elevation = 5,
  logo = true,
  headerCenter,
}: Props) => {
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
        elevation: elevation,
      }}>
      {backButton ? (
        <TouchableOpacity onPress={headerProps?.navigation.goBack}>
          <Octicons
            size={28}
            name="chevron-left"
            style={{padding: 5}}
            color={colors.N700}
          />
        </TouchableOpacity>
      ) : null}
      {logo ? (
        <Image
          style={{height: 40, resizeMode: 'contain', width: 100}}
          source={require('../../assets/image/companylogo-small.png')}
        />
      ) : null}
      {headerCenter ? headerCenter : null}
      {rightTitle ? (
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            fontWeight: '600',
            color: colors.T500,
            fontSize: 14,
          }}>
          {rightTitle}
        </Text>
      ) : (
        headerRight
      )}
    </View>
  );
};

export default CustomHeader;
