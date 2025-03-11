import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
import addProductReducer from "../slices/addProduct"

const store = configureStore({
  reducer: {
    products: productReducer,
    addProduct: addProductReducer,
  },
});

export default store;
