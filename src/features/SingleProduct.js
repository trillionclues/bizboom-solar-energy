import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { single_product_url } from '../utils/airtable';

const initialState = {
  productItem: [],
  isLoading: false,
  error: null,
  featured: [],
  amount: 1,
  cartItems: [],
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
    // toggle productItem amount property
    toggleAmount: (state, action) => {
      const { type } = action.payload;
      const { amount } = state.productItem;

      if (type === 'inc') {
        console.log('inc', state.productItem.amount);
        state.productItem.amount += 1;
      } else if (type === 'dec' && amount > 1) {
        state.productItem.amount -= 1;
      }

      // // store the update productItem to local storage
      // localStorage.setItem('amountToggle', state.productItem.amount);
    },
    addToCart: (state, action) => {
      const { productItem } = action.payload;
      // check if item is already in cart
      const existingItem = state.cartItems.find(
        (item) => item.id === productItem.id
      );
      if (existingItem) {
        existingItem.amount += state.amount;
      }
      // if not, add item to cart
      else {
        state.cartItems.push({ ...productItem });
      }
      // store the update productItem to local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeCartItem: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      // After removing an item from the cart
      // store the update productItem to local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      // clear bothe the localstorage and the state
      localStorage.removeItem('cartItems');
    },
  },
});

export const { toggleAmount, addToCart, removeCartItem, clearCart } =
  SingleProductSlice.actions;

export default SingleProductSlice.reducer;
