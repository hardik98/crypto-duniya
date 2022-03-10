import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CoinList, TrendingCoins, SingleCoin } from "../../config/api";

export const getTrendingCrypto = createAsyncThunk(
  "crypto/trendingCrypto",
  async ({ currency }) => {
    const res = await fetch(TrendingCoins(currency));
    const result = await res.json();
    console.log("result", result);
    return result;
  }
);

export const getCryptoes = createAsyncThunk(
  "crypto/getCrypto",
  async ({ currency }) => {
    const res = await fetch(CoinList(currency));
    const result = await res.json();
    return result;
  }
);

export const getSelectedCrypto = createAsyncThunk(
  "crypto/getSelectedCrypto",
  async ({ coinId }) => {
    console.log("test", SingleCoin(coinId));
    const res = await fetch(SingleCoin(coinId));
    const result = await res.json();
    console.log("result", result);
    return result;
  }
);

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    loading: false,
    cryptoes: [],
    currency: "INR",
    symbol: "₹",
    tredingCrypto: [],
    selectedCoin: {
      loading: false,
      data: {},
    },
  },
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload.currency;
      if (action.payload.currency === "INR") {
        state.symbol = "₹";
      } else {
        state.symbol = "$";
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrendingCrypto.fulfilled, (state, action) => {
      state.tredingCrypto = action.payload;
    });
    builder.addCase(getCryptoes.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCryptoes.fulfilled, (state, action) => {
      state.cryptoes = action.payload;
      state.loading = false;
    });
    builder.addCase(getSelectedCrypto.pending, (state, action) => {
      state.selectedCoin.loading = true;
    });
    builder.addCase(getSelectedCrypto.fulfilled, (state, action) => {
      state.selectedCoin.data = action.payload;
      state.selectedCoin.loading = false;
    });
  },
});

export const { changeCurrency } = cryptoSlice.actions;
export default cryptoSlice.reducer;
