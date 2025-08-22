import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { colors } from '../utils/colors';

export default function SecurityScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Security</Text>
            <View style={styles.option}>
                <Text style={styles.optionText}>Biometric Authentication</Text>
                <Switch />
            </View>
            <View style={styles.option}>
                <Text style={styles.optionText}>Auto Lock</Text>
                <Switch />
            </View>
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
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderLight,
    },
    optionText: {
        fontSize: 16,
        color: colors.text,
    },
});