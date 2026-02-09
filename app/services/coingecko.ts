import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

const coingeckoClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface NFTItem {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
  symbol: string;
}

export const fetchNFTList = async (): Promise<NFTItem[]> => {
  try {
    const response = await coingeckoClient.get<NFTItem[]>('/nfts/list');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || 'Failed to fetch NFT list from CoinGecko API'
      );
    }
    throw error;
  }
};
