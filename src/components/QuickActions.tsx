import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export default function QuickActions({ onSend, onReceive }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.action} onPress={onSend}>
                <Text style={styles.actionIcon}>📤</Text>
                <Text style={styles.actionText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={onReceive}>
                <Text style={styles.actionIcon}>📥</Text>
                <Text style={styles.actionText}>Receive</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    action: {
        alignItems: 'center',
        backgroundColor: colors.backgroundSecondary,
        padding: 20,
        borderRadius: 15,
        flex: 1,
        marginHorizontal: 10,
    },
    actionIcon: {
        fontSize: 24,
        marginBottom: 5,
    },
    actionText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.text,
    },
});