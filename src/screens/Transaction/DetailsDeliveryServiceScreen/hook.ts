import React from 'react';
import {
  TransactionStackParamaterList,
  TransactionStackProps,
} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import DeliveryServiceUsecase from '@src/services/bussines/deliveryServiceUsecase';

export const useDetailsDeliveryServiceScreen = () => {
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const [deliveryProduct, setDeliveryProduct] = React.useState('');
  const [weight, setWeight] = React.useState<number>(1);
  const [deliveryType, setDeliveryType] = React.useState<0 | 1>(0);
  const [deliveryServiceData, setDeliveryServiceData] =
    React.useState<DeliveryService.DeliveryServiceByID>();
  const route =
    useRoute<
      RouteProp<TransactionStackParamaterList, 'DetailsDeliveryService'>
    >();
  const deliveryServiceUsecase = new DeliveryServiceUsecase();

  React.useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const data = await deliveryServiceUsecase.getDeliveryServiceById(
          route.params.delivery_id,
        );
        if (isMounted) {
          setDeliveryServiceData(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      isMounted = false;
    };
  });

  return {
    navigation,
    deliveryProduct,
    weight,
    deliveryType,
    deliveryServiceData,
    setDeliveryType,
    setDeliveryProduct,
    setWeight,
  } as const;
};
