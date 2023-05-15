import React from 'react';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';

export const useSelectWaste = () => {
  const {state, dispatch} = React.useContext(TransactionContext);
  const [checkedItems, setCheckedItems] = React.useState<number[]>([]);
  const navigation = useNavigation<TransactionStackProps['navigation']>();

  const handleCheckedItems = (id: number) => {
    const isChecked = checkedItems.includes(id);
    if (isChecked) {
      const filteredItems = checkedItems.filter((itemId: any) => itemId !== id);
      setCheckedItems(filteredItems);
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  return {
    state,
    checkedItems,
    navigation,
    dispatch,
    setCheckedItems,
    handleCheckedItems,
  } as const;
};
