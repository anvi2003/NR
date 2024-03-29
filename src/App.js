import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js" ; 
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"; 
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Error from "./components/Error.js";   
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
//import Grocery from "./components/Grocery.js"; 
  
   


   const Grocery=lazy(()=>import( "./components/Grocery.js"));
   
   const AppLayout=()=>{


    const [userName,setuserName]=useState();

    //authentication
    useEffect(()=>{
      //Make an API call and send username and password
      const data={
        name:"Avishka Karn",
      };
      setuserName(data.name);
    },[]);



     return (
      <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setuserName}}>
         <div className="app">
         <Header/>
         <Outlet/>
         </div>
       </UserContext.Provider>
      </Provider>
     );
   };     

   const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children: [
        {
          path:"/",
          element:<Body/>,
        },
        {
          path:"/about",
          element:<About/>,
          
        },
        {
          path:"/grocery",
          element:(
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery/>
            </Suspense>
          ),
          
        },
        {
          path:"/contact",
          element:<Contact/>,
        },
        {
          path:"/restaurants/:resId", //resId can be changed
          element:<RestaurantMenu/>,
        },
        {
          path:"/cart", 
          element:<Cart/>,
        }
      ],
      errorElement: <Error/>,
    },
    
  ]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);