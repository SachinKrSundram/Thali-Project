import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartitem: [],
  cartQuantity: 0,
  cartTotalamount: 0,
};
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      const cut = state.cartitem.filter(
        (cartitem) => cartitem.id !== action.payload.id
      );
      state.cartitem = cut;
     
      state.cartitem.push(action.payload);
      // state.cartTotalamount += action.payload.Price;
      
     
    },
    Remove: (state, action) => {
      const cut = state.cartitem.filter(
        (cartitem) => cartitem.id !== action.payload.id
      );
      state.cartitem = cut;
    },

    Add: (state, action) => {
let increse=state.cartitem.map((cartitem1)=>{
if(cartitem1.id===action.payload.id){
  return {...cartitem1,Quantity:cartitem1.Quantity+1}
}
return cartitem1;
})
return {...state,cartitem:increse}
    },
    substract:(state,action)=>{

if(action.payload.Quantity>1){
  
  let increse=state.cartitem.map((cartitem1)=>{
    if(cartitem1.id===action.payload.id){
      return {...cartitem1,Quantity:cartitem1.Quantity-1}
    }
    return cartitem1;
    })
    return {...state,cartitem:increse}


}

},
    getTotal: (state,action) => {
      let{cartQuantity,cartTotalamount}=state.cartitem.reduce(
        (cartTotal,cartit)=>{
          const{Price,Quantity}=cartit;
          const itmtotal=Price*Quantity;
          cartTotal.cartTotalamount+=itmtotal;
          cartTotal.cartQuantity+=Quantity;
          return cartTotal;
        },
        {cartQuantity:0,cartTotalamount:0}
      )
      cartTotalamount=parseFloat(cartTotalamount.toFixed(2));
      return {...state,cartQuantity,cartTotalamount}
    },
  },
});
export const { addToCart, Remove, Add, getTotal,substract } = dataSlice.actions;
export default dataSlice.reducer;
