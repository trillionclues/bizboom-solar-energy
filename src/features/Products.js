import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { product_url } from '../utils/airtable';

const initialState = {
  allProducts: [],
  isLoading: false,
  error: null,
  total: 0,
};

// fetch products from endpoint
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(product_url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
  reducers: {
    // featuredItem: (state, action) => {
    //   state.allProducts = state.allProducts.filter(
    //     (item) => item.featured === true
    //   );
    // },
  },
});

// export const { featuredItem, filterByCompany } = ProductSlice.actions;

export default ProductSlice.reducer;
