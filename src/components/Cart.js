import { clearCart } from "../utils/cartSlice.js";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
const Cart=()=>{
    
    const cartItems=useSelector((store)=>store.cart.items);
    
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    };

    return (

        <div className="text-center m-4 p-4">

          <h1 className="text-2xl font-bold">Cart</h1> 
           <div className="w=6/12 m-auto">
              <button className="p-2 m-2 bg-orange-400 rounded-lg"
               onClick={handleClearCart}>Clear Cart
              </button>
              {cartItems.length==0 && <h1>Cart is Empty. Add items to the cart !</h1>}
             <div className="w-6/12 m-auto">
              <ItemList items={cartItems}/>
             </div>
           </div>        
        </div>
    );    
}

export default Cart;
