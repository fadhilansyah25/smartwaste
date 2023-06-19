import React from 'react';
import firebaseServices from '@src/services/firebaseServices';
import createApolloClient from '@src/services/apolllo/apollo';
import {GetTransactionByUserId} from '@src/services/apolllo/transactionWaste/transactionWaste.graphql';
import {
  GetTransactionByUserIdSubscription,
  GetTransactionByUserIdSubscriptionVariables,
} from '@src/services/generated/graphql';

export const useTransactionHistory = () => {
  const [transactionData, setTransactionData] =
    React.useState<GetTransactionByUserIdSubscription>();
  const user_id = firebaseServices.firebaseCheckCurrentUser();

  React.useEffect(() => {
    let isMounted = true;
    const apollloClient = createApolloClient();

    const subscription = apollloClient.subscribe<
      GetTransactionByUserIdSubscription,
      GetTransactionByUserIdSubscriptionVariables
    >({
      query: GetTransactionByUserId,
      variables: {user_id: user_id?.uid as string},
    });

    const subscriptionObserver = subscription.subscribe({
      next(data) {
        console.log('Received subscription data:', data);
        if (isMounted && data.data) {
          setTransactionData(data.data);
        }
      },
      error(error) {
        console.error('Error in subscription:', error);
        // Handle any subscription errors here
      },
    });

    return () => {
      subscriptionObserver.unsubscribe();
      isMounted = false;
    };
  }, []);

  return {transactionData} as const;
};
