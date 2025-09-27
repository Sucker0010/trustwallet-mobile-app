import axios from 'axios';

const ETH_USDT_ADDRESS = '0xdac17f958d2ee523a2206206994597c13d831ec7'; // USDT Contract address on Ethereum
const BSC_USDT_ADDRESS = '0xdac17f958d2ee523a2206206994597c13d831ec7'; // USDT Contract address on BSC

export const getUSDTBalance = async (address: string, chain: 'ETH' | 'BSC') => {
  let url = '';
  if (chain === 'ETH') {
    url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=YOUR_ETHERSCAN_API_KEY`;
  } else if (chain === 'BSC') {
    url = `https://api.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=YOUR_BSCSCAN_API_KEY`;
  }

  const response = await axios.get(url);
  return response.data.result;
};