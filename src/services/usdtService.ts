import { ethers } from 'ethers';

const PROVIDERS = {
  ETH: new ethers.providers.InfuraProvider('mainnet', 'YOUR_INFURA_PROJECT_ID'),
  BSC: new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/'),
  TRON: new ethers.providers.JsonRpcProvider('https://api.trongrid.io')
};

// Function to get USDT balance
export const getTokenBalance = async (walletAddress: string, chain: string) => {
  const provider = PROVIDERS[chain];
  const tokenContract = new ethers.Contract(
    'USDT_CONTRACT_ADDRESS', 
    ['function balanceOf(address owner) view returns (uint256)'], 
    provider
  );
  
  const balance = await tokenContract.balanceOf(walletAddress);
  return ethers.utils.formatUnits(balance, 6); // USDT has 6 decimals
};