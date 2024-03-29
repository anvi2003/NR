import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {
     cloudinaryImageId,
     name,
     cuisines,
     avgRating,
     costForTwo,
     sla,
    }=resData?.info;
    return (
       <div className="res-card m-4 p-4 h-[500px] w-[300px] rounded-lg bg-gray-300 hover:bg-gray-300" /*style={{backgroundColor: "#f0f0f0"}}*/>
          <img 
          className="rounded-lg h-[250px] w-[300px]"
          alt="Res-Logo"
          src={
           CDN_URL +
           cloudinaryImageId
         }
          />
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.slaString}</h4>
       </div>
    );
};


//Higher Order Component

//input-RestaurantCard => RestaurantCardOpen

export const withOpenLabel=(RestaurantCard)=>{
   
   
   
   return (props)=>{ //resData received here
      return (
         <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
            <RestaurantCard {...props}/>
         </div>
      );
   };


};

export default RestaurantCard;
