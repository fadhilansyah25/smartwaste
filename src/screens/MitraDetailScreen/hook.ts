import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  TransactionStackParamaterList,
  TransactionStackProps,
} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {Types} from '@src/store/reducer/TransactionReducer';

export const useMitraDetail = () => {
  const route =
    useRoute<RouteProp<TransactionStackParamaterList, 'MitraDetail'>>();
  const dataMitra = route.params.mitra;
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const {state, dispatch} = React.useContext(TransactionContext);
  const [showElement, setShowElement] = React.useState(false);

  const handlePickMitra = () => {
    dispatch({type: Types.SetMitra, payload: dataMitra});
    navigation.navigate('SelectWaste');
  };

  // SideEffect
  React.useEffect(() => {
    let isMounted = true;

    const timer = setTimeout(() => {
      if (isMounted) {
        setShowElement(true);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      isMounted = false;
    };
  }, []);

  return {
    dataMitra,
    navigation,
    state,
    showElement,
    handlePickMitra,
  } as const;
};
