import { ethers } from 'ethers';
import { randomBytes } from 'crypto';
import bip39 from 'bip39';

export const generateWallet = async () => {
  const mnemonic = bip39.generateMnemonic();
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  return { mnemonic, address: wallet.address };
};

export const importWallet = async (mnemonic: string) => {
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  return { address: wallet.address };
};