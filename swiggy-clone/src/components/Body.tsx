import RestaurantCard from "./RestaurantCard";
import AdCard from "./AdCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  console.log("body rendered");

  const onlineStatusCheck = useOnlineStatus();

  if (!onlineStatusCheck) {
    console.log("Online check triggered, user is offline.");
    return (
      <div>
        <h1>Oops! You are offline!</h1>
        <p>Please check your internet connection and try again.</p>
      </div>
    );
  }

  let [listOfRestaurants, setListofRestaurants] = useState([]);
  let [listOffilteredRestaurants, setlistOffilteredRestaurants] = useState([]);
  let [searchText, setsearchText] = useState("");

  useEffect(() => {
    console.log("Attaching data fetching useEffect");
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Attaching scroll event listener");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.425946&lng=77.1087831&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (!restaurants) {
        console.error("Invalid API response structure:", json);
        return;
      }

      setListofRestaurants(restaurants);
      setlistOffilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      loadMoreRestaurants();
    }
  };

  const loadMoreRestaurants = async () => {
    console.log("load more please");
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter FLEX items-center" >
        <div className="Search p-4 m-4">
          <input
            type="text"
            className="border border-solid"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-2 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setlistOffilteredRestaurants(filteredRestaurants);
            }}>
            Search
          </button>
       
        <button
          className="px-2 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const modifiedList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setlistOffilteredRestaurants(modifiedList);
          }}>
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="restaurantContainer flex flex-wrap">
        {listOffilteredRestaurants.map((restaurant) => {
          if (!restaurant.info.id) {
            console.error("Invalid restaurant ID:", restaurant);
            return null;
          }
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
      {<p>Loading..</p>}
      <AdCard />
    </div>
  );
};

export default Body;
