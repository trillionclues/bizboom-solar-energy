import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/Products';
import singleProductReducer from '../features/SingleProduct';

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    singleProduct: singleProductReducer,
  },
});
