import React from 'react';
import { Text } from 'react-native';

export default function TabBarIcon({ route, focused, color, size }) {
    const icons = {
        Home: '🏠',
        Wallet: '💼',
        Send: '📤',
        Receive: '📥',
        Settings: '⚙️',
    };

    return (
        <Text style={{ fontSize: size, color }}>
            {icons[route.name] || '📱'}
        </Text>
    );
}