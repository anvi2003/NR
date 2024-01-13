import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState,useEffect} from "react";

const Body=()=>{
   //Local State Variable
   // This is how you create a state variable
   const [ListOfRestaurants,setListOfRestaurants]=useState(resList);
   

   useEffect(()=>{
     fetchData();
   },[]);

   const fetchData=()=>{
      const data=fetch();
   }
    return (
       <div className="body">
         <div className="filter">
            <button className="filter-btn" onClick={()=>{
               //Filter logic here
               const filteredLis=ListOfRestaurants.filter((res)=>res.data.avgRating>4);
               setListOfRestaurants(filteredLis);
               }}>Top Rated Restaurant</button>
         </div>
         <div className="res-container"> 
             {
                
                ListOfRestaurants.map(restaurant=><RestaurantCard key={restaurant.data.id}resData={restaurant}/>)

             }
             
         </div>

       </div>
    );
 };

 export default Body;