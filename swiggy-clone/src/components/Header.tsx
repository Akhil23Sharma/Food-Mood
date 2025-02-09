import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between m-2">
      <div className="logo-container">
        <img
          className="w-16"
          src="https://png.pngtree.com/png-vector/20230823/ourmid/pngtree-pizza-food-app-icon-with-a-slice-on-it-vector-png-image_6910377.png"
          alt="logo"
        />
        <h3>Food& Mood 😸</h3>
      </div>

      <div className="nav-container">
        <ul className="flex p-5 m-4 items-center">
          <li className="px-4">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4">
            <Link to="/">Cart </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
