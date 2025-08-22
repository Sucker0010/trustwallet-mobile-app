import { useState, useEffect } from 'react';

export function useBalance(address: string) {
    const [balance, setBalance] = useState('0.00');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (address) {
            setLoading(true);
            // Simulate API call
            setTimeout(() => {
                setBalance('1.234');
                setLoading(false);
            }, 1000);
        }
    }, [address]);

    return { balance, loading };
}