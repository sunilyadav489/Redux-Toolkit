import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productList from './productList.json';

export const fetchAllProducts = createAsyncThunk('fetch-all-products', async (apiUrl) => {
  const response = await fetch(apiUrl)
  return response.json()
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        fetchStatus: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllProducts.pending, (state) => {
            state.fetchStatus = 'loading'
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.fetchStatus = 'success'
            })
            .addCase(fetchAllProducts.rejected, (state) => {
            state.fetchStatus = 'error';
            state.data = productList.products;
            })
    },
})

export default productSlice.reducer;