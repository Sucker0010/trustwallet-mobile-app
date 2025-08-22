import { ethers } from 'ethers';
import * as Keychain from 'react-native-keychain';
import { encryptData, decryptData } from './encryptionService';

export interface Wallet {
  address: string;
  privateKey: string;
  mnemonic?: string;
  name?: string;
}

export interface CreateWalletResult {
  wallet: Wallet;
  encryptedData: string;
}

class WalletService {
  private static instance: WalletService;
  
  private constructor() {}
  
  static getInstance(): WalletService {
    if (!WalletService.instance) {
      WalletService.instance = new WalletService();
    }
    return WalletService.instance;
  }

  async createWallet(password: string, name?: string): Promise<CreateWalletResult> {
    try {
      // Generate new wallet
      const wallet = ethers.Wallet.createRandom();
      
      const walletData: Wallet = {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic?.phrase,
        name: name || 'My Wallet',
      };

      // Encrypt wallet data
      const encryptedData = await encryptData(JSON.stringify(walletData), password);
      
      // Store encrypted data in keychain
      await Keychain.setInternetCredentials(
        'trustwallet',
        wallet.address,
        encryptedData
      );

      return {
        wallet: walletData,
        encryptedData,
      };
    } catch (error) {
      console.error('Error creating wallet:', error);
      throw new Error('Failed to create wallet');
    }
  }

  async importWallet(mnemonic: string, password: string, name?: string): Promise<CreateWalletResult> {
    try {
      // Validate mnemonic
      if (!ethers.utils.isValidMnemonic(mnemonic)) {
        throw new Error('Invalid mnemonic phrase');
      }

      // Import wallet from mnemonic
      const wallet = ethers.Wallet.fromMnemonic(mnemonic);
      
      const walletData: Wallet = {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic?.phrase,
        name: name || 'Imported Wallet',
      };

      // Encrypt wallet data
      const encryptedData = await encryptData(JSON.stringify(walletData), password);
      
      // Store encrypted data in keychain
      await Keychain.setInternetCredentials(
        'trustwallet',
        wallet.address,
        encryptedData
      );

      return {
        wallet: walletData,
        encryptedData,
      };
    } catch (error) {
      console.error('Error importing wallet:', error);
      throw new Error('Failed to import wallet');
    }
  }

  async loadWallet(address: string, password: string): Promise<Wallet> {
    try {
      // Get encrypted data from keychain
      const credentials = await Keychain.getInternetCredentials('trustwallet');
      
      if (!credentials || credentials.username !== address) {
        throw new Error('Wallet not found');
      }

      // Decrypt wallet data
      const decryptedData = await decryptData(credentials.password, password);
      const walletData: Wallet = JSON.parse(decryptedData);

      return walletData;
    } catch (error) {
      console.error('Error loading wallet:', error);
      throw new Error('Failed to load wallet');
    }
  }

  async getWalletList(): Promise<string[]> {
    try {
      const credentials = await Keychain.getAllInternetCredentials();
      return credentials
        .filter(cred => cred.service === 'trustwallet')
        .map(cred => cred.username);
    } catch (error) {
      console.error('Error getting wallet list:', error);
      return [];
    }
  }

  async deleteWallet(address: string): Promise<void> {
    try {
      await Keychain.resetInternetCredentials('trustwallet');
    } catch (error) {
      console.error('Error deleting wallet:', error);
      throw new Error('Failed to delete wallet');
    }
  }

  async signTransaction(transaction: any, privateKey: string): Promise<string> {
    try {
      const wallet = new ethers.Wallet(privateKey);
      const signedTx = await wallet.signTransaction(transaction);
      return signedTx;
    } catch (error) {
      console.error('Error signing transaction:', error);
      throw new Error('Failed to sign transaction');
    }
  }

  async validateAddress(address: string): Promise<boolean> {
    try {
      return ethers.utils.isAddress(address);
    } catch (error) {
      return false;
    }
  }
}

export default WalletService.getInstance();