import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props: any) => {
  const { resData } = props;

  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  return (
    <>
      <div className="res-card p-2 m-4 w-48  bg-gray-50 hover:
      
      
      
      bg-amber-300">
        <img
          className="food-image rounded-lg text-lg h-52 "
          alt="img renderer"
          src={CDN_URL + cloudinaryImageId}></img>
        <h4 className="font-extrabold py-4">{name}</h4>
        <h4 className="font-bold py-2">
          {cuisines?.slice(0, 3).join(", ")}
          {cuisines?.length > 3 && "..."}
        </h4>
        <h4>{sla.deliveryTime} minutes</h4>

        <h4>{avgRating}</h4>
        <h4>Cost : {costForTwo}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
