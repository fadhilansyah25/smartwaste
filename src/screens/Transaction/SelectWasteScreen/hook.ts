import React from 'react';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import WasteTypeUsecase from '@src/services/bussines/wasteTypeUsecase';

export const useSelectWaste = () => {
  const {state, dispatch} = React.useContext(TransactionContext);
  const [checkedItems, setCheckedItems] = React.useState<number[]>([]);
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const [wasteType, setWasteType] =
    React.useState<WasteTypeModels.WasteType[]>([]);
  const wasteTypeUsecase = new WasteTypeUsecase();

  const handleCheckedItems = (id: number) => {
    const isChecked = checkedItems.includes(id);
    if (isChecked) {
      const filteredItems = checkedItems.filter((itemId: any) => itemId !== id);
      setCheckedItems(filteredItems);
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  React.useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const data = await wasteTypeUsecase.getAllWasteType();
        if (isMounted) {
          setWasteType(data);
        }
      } catch (error) {}
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    state,
    checkedItems,
    navigation,
    wasteType,
    dispatch,
    setCheckedItems,
    handleCheckedItems,
  } as const;
};
