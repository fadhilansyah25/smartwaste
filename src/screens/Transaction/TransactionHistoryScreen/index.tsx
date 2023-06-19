import {SafeAreaView, View, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {style} from './style';
import {useTransactionHistory} from './hook';
import {TransactionHistoryCard} from '@src/component';

const TransactionHistoryScreen = () => {
  const {transactionData} = useTransactionHistory();

  return (
    <SafeAreaView style={style.container}>
      {transactionData ? (
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 20,
            marginTop: 20,
            paddingBottom: 40,
          }}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          showsVerticalScrollIndicator={false}
          data={transactionData.smart_waste_transaction_waste}
          renderItem={({item}) => (
            <TransactionHistoryCard
              mitraName={item.transaction_waste_mitra.name}
              packageCode={item.package_code}
              status={item.status}
              transactionDate={item.transaction_date}
              userName={item.user_name}
              key={item.id}
            />
          )}
        />
      ) : (
        <ActivityIndicator style={{marginTop: 20}} />
      )}
    </SafeAreaView>
  );
};

export default TransactionHistoryScreen;
