import { randomBytes } from 'crypto';
import * as bip39 from 'bip39';
import { ethers } from 'ethers';

// Generate a new wallet
export const createWallet = async () => {
  const mnemonic = bip39.generateMnemonic();
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  return { mnemonic, seed: seed.toString('hex'), wallet };
};

// Import existing wallet
export const importWallet = (mnemonic: string) => {
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  return wallet;
};