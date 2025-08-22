import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../utils/colors';

export default function SendScreen({ navigation }) {
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const sendTransaction = async () => {
        if (!address || !amount) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }
        
        setLoading(true);
        try {
            // Transaction logic
            Alert.alert('Success', 'Transaction sent successfully!');
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error', 'Transaction failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Send</Text>
            <TextInput
                style={styles.input}
                placeholder="Recipient Address"
                value={address}
                onChangeText={setAddress}
            />
            <TextInput
                style={styles.input}
                placeholder="Amount"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={sendTransaction}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? 'Sending...' : 'Send'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: colors.text,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});