import RestaurantCard from "./RestaurantCard";
import React, { useState } from "react";
import resList from "../Utils/MockData";
let resObj = resList;

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resObj);
  console.log("resobject", resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredList = listOfRestaurant.filter((res) => {
              const numericRating = parseFloat(
                res.ratings.replace("❇️", "").trim()
              );
              return numericRating > 4;
            });

            console.log("filterList", FilteredList);

            setListOfRestaurant(FilteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
