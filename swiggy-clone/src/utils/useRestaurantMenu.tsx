import { useEffect, useState } from "react";
import { MENU_API, Menu_API_Residual } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null); //ye hmne baad me likha jese ki normally apne pass state variable hote h yhan b bna skte h

  //what is the job of this custom hook, i.e to take a resId and return restaurant information
  //fetch data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId + Menu_API_Residual);
      const json = await data.json();

      console.log("Response JSON:", json);

      if (json?.data?.cards?.[2]?.card?.card?.info) {
        setResInfo(json.data);
        console.log(
          "info name is ",
          json?.data?.cards?.[2]?.card?.card?.info?.name
        );
      } else {
        console.error("Unexpected response structure:", json);
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
