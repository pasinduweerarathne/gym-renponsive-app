import { Link } from "react-router-dom";
import "../pages/home/Home.css";
import Image from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="contaner main_header-container">
        <div className="main_header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join the legends of the Fitness world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ipsa, amet fugiat quam corrupti cumque alias necessitatibus dolorum
            maiores? Error!
          </p>
          <Link to="/plans" className="btn">
            Get Started
          </Link>
        </div>
        <div className="main_header-right ">
          <div className="main_header-circle"></div>
          <div className="main_header-img">
            <img src={Image} alt="Main_Header_Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
