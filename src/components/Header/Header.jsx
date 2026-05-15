import logo from "../../assets/logofondoclaro.jpg";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to={"/"} className="logo-container">
        <img src={logo} />
        <span>Green Choices</span>
      </Link>

      <Nav />
    </header>
  );
};