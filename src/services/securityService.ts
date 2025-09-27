import * as Keychain from 'react-native-keychain';
import FingerprintScanner from 'react-native-fingerprint-scanner';

export const setBiometricSecurity = async (pin: string) => {
  await Keychain.setGenericPassword('user', pin);
};

export const authenticateBiometric = async () => {
  return await FingerprintScanner.authenticate({
    description: 'Please use biometrics to authenticate',
  });
};