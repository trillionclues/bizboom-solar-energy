import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { single_product_url } from '../utils/airtable';

const initialState = {
  productItem: [],
  isLoading: false,
  error: null,
  featured: [],
  amount: 1,
  isSideBarOpen: false,
};

// fetch products from endpoint
export const getSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${single_product_url}${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

const SingleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSingleProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productItem = action.payload;
    });
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
  reducers: {
    toggleAmount: (state, action) => {
      if (action.payload === 'inc') {
        state.amount += 1;
      } else if (action.payload === 'dec') {
        state.amount -= 1;
      }
    },
  },
});

export const { toggleAmount } = SingleProductSlice.actions;

export default SingleProductSlice.reducer;
