import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchNFTList, NFTItem } from '@/app/services/coingecko';

interface NFTState {
  nfts: NFTItem[];
  loading: boolean;
  error: string | null;
  currentIndex: number;
}

const initialState: NFTState = {
  nfts: [],
  loading: false,
  error: null,
  currentIndex: 0,
};

// Async thunk for fetching NFTs
export const fetchNFTs = createAsyncThunk(
  'nft/fetchNFTs',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchNFTList();
      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Failed to fetch NFTs'
      );
    }
  }
);

const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    nextSlide: (state) => {
      if (state.currentIndex < state.nfts.length - 1) {
        state.currentIndex += 1;
      }
    },
    prevSlide: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0 && action.payload < state.nfts.length) {
        state.currentIndex = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNFTs.fulfilled, (state, action) => {
        state.loading = false;
        state.nfts = action.payload;
        state.currentIndex = 0;
      })
      .addCase(fetchNFTs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { nextSlide, prevSlide, setCurrentIndex } = nftSlice.actions;
export default nftSlice.reducer;
