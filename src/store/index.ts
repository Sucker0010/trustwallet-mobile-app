import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './slices/walletSlice';
import transactionReducer from './slices/transactionSlice';
import securityReducer from './slices/securitySlice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    transaction: transactionReducer,
    security: securityReducer,
  },
});