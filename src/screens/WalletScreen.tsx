import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../utils/colors';

export default function WalletScreen({ navigation }) {
    const [loading, setLoading] = useState(false);

    const createWallet = async () => {
        setLoading(true);
        try {
            // Wallet creation logic
            Alert.alert('Success', 'Wallet created successfully!');
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error', 'Failed to create wallet');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Wallet</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={createWallet}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? 'Creating...' : 'Create New Wallet'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
    button: {
        backgroundColor: colors.primary,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});