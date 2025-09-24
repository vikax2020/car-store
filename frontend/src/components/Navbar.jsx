import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaUserPlus, FaShoppingCart } from "react-icons/fa"; // icons

const Navbar = () => {
  return (
    <>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/Home">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Models">
                    Models
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navbar-brand" to="/Home">
                    <span>
                      <span>OB</span>erlo
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Price">
                    Price
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>

                 <li className="nav-item">
                  <Link className="nav-link" to="/ProductData">
                    Product
                  </Link>
                </li>

        
               
              </ul>
            </div>
            <li className="nav-item">
                  <Link className="nav-link fs-5" to="/Login">
                    <FaUser style={{ color: "#0c68eaff",fontSize:"20px"}} /> 
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/Signup">
                    <FaUserPlus style={{ color: "#0c68eaff",fontSize:"24px" }} /> 
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/cart">
                    <FaShoppingCart style={{ color: "red",fontSize:"23px"}} /> 
                  </Link>
                </li>

          </nav>
          
        </div>
      </header>
    </>
  );
};

export default Navbar;
