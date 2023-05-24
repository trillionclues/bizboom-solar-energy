import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/Products';

export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});
