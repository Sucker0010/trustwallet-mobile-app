import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export default function BalanceCard({ balance, loading, address }) {
    return (
        <View style={styles.card}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balance}>
                {loading ? 'Loading...' : (balance || '0.00') + ' ETH'}
            </Text>
            <Text style={styles.address}>{address}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.primary,
        padding: 20,
        margin: 20,
        borderRadius: 15,
        alignItems: 'center',
    },
    balanceLabel: {
        color: 'white',
        fontSize: 14,
        opacity: 0.8,
    },
    balance: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    address: {
        color: 'white',
        fontSize: 12,
        opacity: 0.8,
        fontFamily: 'monospace',
    },
});