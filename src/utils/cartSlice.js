import { createSlice, current} from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name: 'cart',   //first configuration that it takes
    initialState:{  // second configuration that it takes
        items:[],
    },
    reducers: {
        addItem: (state,action )=>{
          // mutating the state here
           state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state,action)=>{
            
            //console.log(current(state)); for debugging in redux
            
            
             state.items.length=0;
            //return {items:[]};
        },
    },
});

export const {addItem,removeItem,clearCart}=cartSlice.actions; //syntax created by redux toolkit
export default cartSlice.reducer;