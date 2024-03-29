import RestaurantCard,{withOpenLabel} from "./RestaurantCard";
import {useState,useEffect,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{
   //Local State Variable
   // This is how you create a state variable
   const [ListOfRestaurants,setListOfRestaurants]=useState([]);
   const [filteredRestaurant,setfilteredRestaurant]=useState([]);
   const [searchText,setSearchText]=useState("");
   
   const RestaurantCardOpen = withOpenLabel(RestaurantCard);

   useEffect(()=>{
     fetchData();
   },[]);
   
   const fetchData= async()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6207991&lng=77.2144923&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      const json=await data.json();
      console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //Optional chaining
      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
      setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };
   //conditional Rendering
   // if(ListOfRestaurants.length==0){
   //    return <Shimmer/>;
   // }
   
   
   
  
    const onlineStatus=useOnlineStatus();
    if(onlineStatus==false) return <h1>Looks like you are offline!! Please check your internet connection</h1>
    
    const {loggedInUser, setuserName} =useContext(UserContext);

    return ListOfRestaurants.length==0? <Shimmer/>:(
       <div className="body">
         <div className="filter flex">
            <div className=" search m-4 p-4">
               <input type="text" className="border border-solid border-black" value={searchText} 
               onChange={(e)=>{
                  setSearchText(e.target.value);
                   
               }
                  
               }/>
               <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                  
                  
                  const filteredList= ListOfRestaurants.filter((res)=>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );

                  setfilteredRestaurant(filteredList);

               }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
               //Filter logic here
               const filteredList=ListOfRestaurants.filter((res)=>res.info.avgRating>=4.5);
               setfilteredRestaurant(filteredList);
               }}>Top Rated Restaurants
               </button>
            </div>
            <div className="search m-4 p-4 flex items-center">
               <label>UserName&nbsp;</label>
               <input value={loggedInUser}
               className="border border-black p-2" onChange={(e)=>setuserName(e.target.value)}/>
            </div>
         </div>
         <div className="res-container flex flex-wrap"> 
             {
                
                filteredRestaurant.map(restaurant=>
                
                <Link
                 key={restaurant.info.id}
                  to={"/restaurants/"+restaurant.info.id}>

                     {restaurant.info.isOpen ? 
                     (<RestaurantCardOpen resData={restaurant}/>)
                     : (<RestaurantCard resData={restaurant}/>
                     )}
                     
               </Link>)
                 
             }
             
         </div>

       </div>
    );
 };

 export default Body;