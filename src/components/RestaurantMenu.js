
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import { useState } from "react"; 
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>{
   
    
    const {resId} =useParams();

    const resInfo=useRestaurantMenu(resId);
    const [showIndex,setshowIndex]=useState(null);
   if(resInfo==null) return <Shimmer/>;
    
   const { name , cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
   const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
      
   //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

   const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]==(
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
   );

   //console.log(categories);
   return (

     <div className="Menu text-center">

        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        
        <p className="font-bold text-lg">

          {cuisines.join(",")}-{costForTwoMessage}

        </p>
        {/* {categories accordions} */}
        {/* Lifting the state up */}

        {/* {categories.map((category,index)=>
          <RestaurantCategory 
          key={category.card?.card?.title}
          data={category.card.card}
          showItems={index ==showIndex ? true: false}
          setshowIndex={()=>setshowIndex(index)}
          />
        )} */}

        {categories.map((category,index)=>
          <RestaurantCategory 
          key={category.card?.card?.title}
          data={category.card.card}
          showItems={index ==showIndex ? true: false}
          setshowIndex={(val)=> val=="Hide"?setshowIndex(null):setshowIndex(index)}   //toggle functionality
          />
        )}

     </div>
   );
};

export default RestaurantMenu;