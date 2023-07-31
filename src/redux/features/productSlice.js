import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    addProduct: (state, action) => {
      const product = action.payload;

      const categoryExsist = state.products.find(pd => pd.category === product.category);

      if (!categoryExsist) {
        state.products.push(product);
      }
    },

    removeProduct: (state, action) => {
      const product = action.payload;

      state.products = state.products.filter((pd) => pd._id !== product._id);
    },

    emptyProduct: (state) => {
      return initialState;
    },

  },
})

export const { addProduct, removeProduct, emptyProduct } = productSlice.actions;

export default productSlice.reducer