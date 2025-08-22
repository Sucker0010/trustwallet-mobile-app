import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export default function ReceiveScreen() {
    const walletAddress = '0x1234...5678'; // Placeholder

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Receive</Text>
            <View style={styles.qrContainer}>
                <Text style={styles.qrPlaceholder}>QR Code</Text>
            </View>
            <Text style={styles.address}>{walletAddress}</Text>
            <Text style={styles.instruction}>
                Share this address to receive funds
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: colors.text,
    },
    qrContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.border,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    qrPlaceholder: {
        fontSize: 16,
        color: colors.textSecondary,
    },
    address: {
        fontSize: 16,
        fontFamily: 'monospace',
        color: colors.text,
        marginBottom: 10,
    },
    instruction: {
        fontSize: 14,
        color: colors.textSecondary,
        textAlign: 'center',
    },
});