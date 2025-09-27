export interface Wallet {
  address: string;
  balance: string;
  mnemonic?: string;
}

export interface Transaction {
  id: string;
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
}

export interface TokenBalance {
  symbol: string;
  balance: string;
  network: 'ETH' | 'BSC' | 'TRON';
}