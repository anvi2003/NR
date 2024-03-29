import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore= configureStore({
    reducer:{              //this big reducer contains all small reducers
        cart:cartReducer,
    },
});
export default appStore;