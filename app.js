import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 * Logo
 * Nav items
 * Body
 * -Search
 * -Restaurant container
 * RestaurantCard
 * -img
 * -name of res,star rating,cuisine,deliveryTime, etc
 * Footer
 * -copyright
 * -links
 * -address
 * -contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.shutterstock.com/image-vector/burger-food-logo-icon-vector-600w-1493310305.jpg"
        />
      </div>
      <div className="search">
        <input type="text" placeholder="Serach items"></input>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const resObj = [
  {
    id: "1",
    resImage:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/yvwyn6ekrqcjzctyknvj",
    resName: "Meghana Food",
    cuisian: ["Biryani", "North Indian", "Asian"],
    ratings: "❇️ 4.4",
    minutes: "40 mins",
    price: "₹400 FOR TWO",
  },
  {
    id: "2",
    resName: "KFC",
    cuisian: "Burger,Fast Food",
    ratings: "❇️ 4.2",
    minutes: "20 mins",
    price: "₹200 FOR TWO",
    resImage:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/12/12/eb4650ba-e950-4953-b1a7-c03a691ac0d2_6ca20c30-4c62-462a-b46d-9d1f21786b49.png",
  },
  {
    id: "3",

    resImage:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/ec4502f3c9ba5f6d94252f81d09f7260",
    resName: "Chinese",
    cuisian: "Noodels, manturian ",
    ratings: "❇️ 4.0",
    minutes: "20 mins",
    price: "₹600 FOR TWO",
  },
  {
    id: "4",

    resImage:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/20/fe85d766-f9b9-4586-b40c-ef9a4a8a5a20_25d8f52d-d20f-4df7-84b9-59607783362f.png",
    resName: "McDonald's",
    cuisian: "Feel the crunch with Crispy Veggie Burger+ McVeggie + Fries (M)",
    ratings: "❇️ 3.1",
    minutes: "45 mins",
    price: "₹500 FOR TWO",
  },
  {
    id: "5",

    resName: "Mix Aloo And Methi Paratha",
    cuisian: "Served with butter and dahi",
    ratings: "❇️ 4.4",
    minutes: "20 mins",
    price: "₹200 FOR TWO",
    resImage:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/f70d8f6f489f280b143f5baa0d46adb6",
  },
  {
    id: "6",

    resImage:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/yvwyn6ekrqcjzctyknvj",
    resName: "Meghana Food",
    cuisian: "Biryani,North Indian, Asian",
    ratings: "❇️ 4.4",
    minutes: "40 mins",
    price: "₹400 FOR TWO",
  },
  {
    id: "7",

    resName: "KFC",
    cuisian: "Burger,Fast Food",
    ratings: "❇️ 4.2",
    minutes: "20 mins",
    price: "₹200 FOR TWO",
    resImage:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/12/12/eb4650ba-e950-4953-b1a7-c03a691ac0d2_6ca20c30-4c62-462a-b46d-9d1f21786b49.png",
  },

  {
    id: "8",

    resName: "Mix Aloo And Methi Paratha",
    cuisian: "Served with butter and dahi",
    ratings: "❇️ 4.4",
    minutes: "20 mins",
    price: "₹200 FOR TWO",
    resImage:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/f70d8f6f489f280b143f5baa0d46adb6",
  },
];
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={resData.resImage} />
      <h3>{resData.resName}</h3>
      <h5>
        {Array.isArray(resData.cuisian)
          ? resData.cuisian.join(", ")
          : resData.cuisian}
      </h5>
      <div className="causian">
        <ul className="causian">
          <li className="rating" style={{ height: "15px", width: "35px" }}>
            {resData.ratings}
          </li>
          <li>{resData.minutes}</li>
          <li>{resData.price}</li>
        </ul>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const APPLayout = () => {
  return (
    <div className="app">
      {/*Header */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<APPLayout />);
