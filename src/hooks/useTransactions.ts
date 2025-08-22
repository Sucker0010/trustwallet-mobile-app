import { useState, useEffect } from 'react';

export function useTransactions(address: string) {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (address) {
            setLoading(true);
            // Simulate API call
            setTimeout(() => {
                setTransactions([
                    { type: 'Send', amount: '0.1', status: 'Confirmed', date: 'Today' },
                    { type: 'Receive', amount: '0.5', status: 'Confirmed', date: 'Yesterday' },
                ]);
                setLoading(false);
            }, 1000);
        }
    }, [address]);

    return { transactions, loading };
}