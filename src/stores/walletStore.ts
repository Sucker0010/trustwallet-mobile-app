import { create } from 'zustand';

interface Wallet {
    address: string;
    privateKey: string;
    name?: string;
}

interface WalletStore {
    wallet: Wallet | null;
    setWallet: (wallet: Wallet) => void;
    clearWallet: () => void;
}

export const useWalletStore = create<WalletStore>((set) => ({
    wallet: null,
    setWallet: (wallet) => set({ wallet }),
    clearWallet: () => set({ wallet: null }),
}));