// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         cartProductIds: []
//     },
//     reducer: {
//         addToCart: (state, action) => {
//             //old redux core syntax..state should not be mutate
//             //state.cartProductIds = [action.payload, ...state.cartProductIds];
            
//             //here we are not mutating the state. RTK underhood does execute above line.
//             // We can do this only in slice
//             state.cartProductIds.push(action.payload);

//         },
//         removeFromCart: (state, action) => {
//             return state.cartProductIds.filter(item => item !== action.payload)
//         }   
//     }
// })

// export const {addToCart, removeFromCart} = cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
        //old redux core syntax..state should not be mutate
        //state.cartProductIds = [action.payload, ...state.cartProductIds];

        //here we are not mutating the state. RTK underhood does execute above line.
        // We can do this only in slice
        state.cartProductIds.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const indexOfId = state.cartProductIds.indexOf(action.payload)
      state.cartProductIds.splice(indexOfId, 1)
    },
    clearAllItems: (state) => {
      state.cartProductIds = []
    },
  },
})

export const {addToCart, removeFromCart, clearAllItems} = cartSlice.actions;

export default cartSlice.reducer;