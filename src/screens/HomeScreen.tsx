import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  RefreshControl,
} from 'react-native';
import { useWalletStore } from '../stores/walletStore';
import { useBalance } from '../hooks/useBalance';
import { useTransactions } from '../hooks/useTransactions';
import BalanceCard from '../components/BalanceCard';
import TransactionItem from '../components/TransactionItem';
import QuickActions from '../components/QuickActions';
import { colors } from '../utils/colors';

export default function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const { wallet } = useWalletStore();
  const { balance, loading: balanceLoading } = useBalance(wallet?.address);
  const { transactions, loading: txLoading } = useTransactions(wallet?.address);

  const onRefresh = async () => {
    setRefreshing(true);
    // Refresh data
    setRefreshing(false);
  };

  const handleSendPress = () => {
    if (!wallet) {
      Alert.alert('No Wallet', 'Please create or import a wallet first');
      return;
    }
    navigation.navigate('Send');
  };

  const handleReceivePress = () => {
    if (!wallet) {
      Alert.alert('No Wallet', 'Please create or import a wallet first');
      return;
    }
    navigation.navigate('Receive');
  };

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.header}>
        <Text style={styles.title}>TrustWallet</Text>
        <TouchableOpacity 
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.settingsText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {wallet ? (
        <>
          <BalanceCard 
            balance={balance} 
            loading={balanceLoading}
            address={wallet.address}
          />
          
          <QuickActions 
            onSend={handleSendPress}
            onReceive={handleReceivePress}
          />

          <View style={styles.transactionsSection}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            {txLoading ? (
              <Text style={styles.loadingText}>Loading transactions...</Text>
            ) : transactions.length > 0 ? (
              transactions.slice(0, 5).map((tx, index) => (
                <TransactionItem key={index} transaction={tx} />
              ))
            ) : (
              <Text style={styles.emptyText}>No transactions yet</Text>
            )}
          </View>
        </>
      ) : (
        <View style={styles.noWalletContainer}>
          <Text style={styles.noWalletTitle}>Welcome to TrustWallet</Text>
          <Text style={styles.noWalletSubtitle}>
            Create or import your wallet to get started
          </Text>
          <TouchableOpacity 
            style={styles.createWalletButton}
            onPress={() => navigation.navigate('Wallet')}
          >
            <Text style={styles.createWalletText}>Create Wallet</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  settingsButton: {
    padding: 10,
  },
  settingsText: {
    fontSize: 20,
  },
  transactionsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 15,
  },
  loadingText: {
    textAlign: 'center',
    color: colors.textSecondary,
    marginTop: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: colors.textSecondary,
    marginTop: 20,
  },
  noWalletContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noWalletTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  noWalletSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 30,
  },
  createWalletButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  createWalletText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});