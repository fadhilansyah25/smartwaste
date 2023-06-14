import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import DeliveryServiceUsecase from '@src/services/bussines/deliveryServiceUsecase';

export const useSelectDeliveryServiceScreen = () => {
  const deliveryServiceUsecase = new DeliveryServiceUsecase();
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const [deliveryServiceData, setDeliveryServiceData] = React.useState<
    DeliveryService.DeliveryService[]
  >([]);

  const handlePressCardDeliveryService = (id: string) => {
    navigation.navigate('DetailsDeliveryService', {delivery_id: id});
  };

  React.useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const data = await deliveryServiceUsecase.getAllDeliveryService();
        if (isMounted) {
          setDeliveryServiceData(data);
        }
      } catch (err) {
        console.log(err);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    deliveryServiceData,
    handlePressCardDeliveryService,
  } as const;
};
