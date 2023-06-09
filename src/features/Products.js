import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { product_url } from '../utils/airtable';

const initialState = {
  allProducts: [],
  isLoading: false,
  error: null,
  total: 0,
  // cartItems: [],
  itemAmount: parseInt(localStorage.getItem('itemAmount')) || 0,
};

// fetch products from endpoint
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(product_url);
      // console.log(response.data);
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
    calculateItemTotal: (state) => {
      state.itemAmount += 1;
      localStorage.setItem('itemAmount', state.itemAmount);
    },
    searchProducts: (state, action) => {
      const { query } = action.payload;
      if (!query) {
        return {
          ...state,
          allProducts: [...state.allProducts],
        };
      }

      return {
        ...state,

        allProducts: state.allProducts.filter((product) => {
          const productName = product.name.toLowerCase();

          return productName.includes(query);
        }),
      };
    },
    sortProductSelect: (state, action) => {
      const { sort } = action.payload;
      let sortedProducts = [];

      if (sort === 'price-lowest') {
        sortedProducts = [...state.allProducts].sort(
          (a, b) => a.price - b.price
        );
      } else if (sort === 'price-highest') {
        sortedProducts = [...state.allProducts].sort(
          (a, b) => b.price - a.price
        );
      } else if (sort === 'name-az') {
        sortedProducts = [...state.allProducts].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (sort === 'name-za') {
        sortedProducts = [...state.allProducts].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      return {
        ...state,
        allProducts: sortedProducts,
      };
    },
  },
});

export const { calculateItemTotal, searchProducts, sortProductSelect } =
  ProductSlice.actions;

export default ProductSlice.reducer;
