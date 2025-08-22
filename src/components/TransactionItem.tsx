import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export default function TransactionItem({ transaction }) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.type}>{transaction?.type || 'Transfer'}</Text>
                <Text style={styles.date}>{transaction?.date || 'Today'}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.amount}>
                    {(transaction?.amount || '0.00') + ' ETH'}
                </Text>
                <Text style={styles.status}>
                    {transaction?.status || 'Confirmed'}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderLight,
    },
    left: {
        flex: 1,
    },
    right: {
        alignItems: 'flex-end',
    },
    type: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.text,
    },
    date: {
        fontSize: 14,
        color: colors.textSecondary,
        marginTop: 2,
    },
    amount: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.text,
    },
    status: {
        fontSize: 14,
        color: colors.success,
        marginTop: 2,
    },
});