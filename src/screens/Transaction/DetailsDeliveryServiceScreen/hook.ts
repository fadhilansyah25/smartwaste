import React, {useContext} from 'react';
import {
  TransactionStackParamaterList,
  TransactionStackProps,
} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import DeliveryServiceUsecase from '@src/services/bussines/deliveryServiceUsecase';
import {TransactionContext} from '@src/store/context/TransactionContext';
import {initialTime} from '@src/utils/getInitialDate';
import {Types} from '@src/store/reducer/TransactionReducer';

export const useDetailsDeliveryServiceScreen = () => {
  const deliveryServiceUsecase = new DeliveryServiceUsecase();
  const {dispatch} = useContext(TransactionContext);
  const navigation = useNavigation<TransactionStackProps['navigation']>();
  const route =
    useRoute<
      RouteProp<TransactionStackParamaterList, 'DetailsDeliveryService'>
    >();
  const [deliveryProduct, setDeliveryProduct] = React.useState('');
  const [weight, setWeight] = React.useState<number>(1);
  const [deliveryType, setDeliveryType] = React.useState<0 | 1>(0);
  const [deliveryServiceData, setDeliveryServiceData] =
    React.useState<DeliveryService.DeliveryServiceByID>();
  const [pickupDate, setPickupDate] = React.useState(initialTime);

  React.useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const data = await deliveryServiceUsecase.getDeliveryServiceById(
          route.params.delivery_id,
        );
        if (isMounted) {
          if (data) {
            setDeliveryServiceData(data);
            setDeliveryProduct(
              data?.delivery_service_delivery_service_products[0].id,
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleConfirm = () => {
    dispatch({
      type: Types.SetTransac,
      payload: {
        pickUpDate: deliveryType === 0 ? pickupDate : undefined,
        deliveryProvider:
          deliveryServiceData as unknown as DeliveryService.DeliveryService,
        deliveryServiceProduct:
          deliveryServiceData?.delivery_service_delivery_service_products.find(
            item => item.id === deliveryProduct,
          ),
        weight,
      },
    });
    navigation.navigate('DeliveryConfirm');
  };

  return {
    navigation,
    deliveryProduct,
    weight,
    deliveryType,
    deliveryServiceData,
    pickupDate,
    setPickupDate,
    setDeliveryType,
    setDeliveryProduct,
    setWeight,
    handleConfirm,
  } as const;
};
