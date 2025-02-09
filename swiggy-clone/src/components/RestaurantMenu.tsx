import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API, Menu_API_Residual } from "../utils/constants";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

//Main Restaurant Component
const RestaurantMenu = () => {
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  const { resId } = useParams();
  console.log("useParams ne store kiya: ", resId);

  const resInfo = useRestaurantMenu(resId); //we are putting the fetch data logic inside this custom hook

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(MENU_API + resId + Menu_API_Residual);
  //     const json = await data.json();

  //     console.log("Response JSON:", json);

  //     if (json?.data?.cards?.[2]?.card?.card?.info) {
  //       setResInfo(json.data);
  //       console.log(
  //         "info name is ",
  //         json?.data?.cards?.[2]?.card?.card?.info?.name
  //       );
  //     } else {
  //       console.error("Unexpected response structure:", json);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching menu:", error);
  //   }
  // };

  if (resInfo === null) {
  }
  <Shimmer />;
  const { name, cuisines, costForTwo, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info || {}; // this || {} is to say if this is empty ,

  console.log(
    "item cards area here:",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards
  );
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  return (
    <div className="menu">
      <h1>Name is : {name}</h1>
      <h1>Famous for {cuisines}</h1>
      <h2>Cost for two : Rs.{costForTwo / 100}/- </h2>
      <h2>{totalRatingsString}</h2>
      <h2>Menu</h2>

      {itemCards.length > 0 ? (
        <ul>
          {itemCards.map((item) => (
            <div className="menu-item">
              <li key={item?.card?.info?.id} className="menu-item-content">
                <div className="menu-name-price">
                  <b>{item?.card?.info?.name}</b> -{" "}
                  <i>
                    Rs.
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </i>
                </div>
                <div className="menu-item-image">
                  <img
                    src={CDN_URL + item?.card?.info?.imageId}
                    alt="item-image"
                    width={100}
                    height={100}
                  />
                </div>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading or no items available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
