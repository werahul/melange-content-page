import React, { useState } from "react";
import { logo } from "../../assets/images";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import { div } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // const [isActive, setIsActive] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bg-white z-10 shadow-md w-full">
      <div className="flex max-container justify-between items-center px-4 md:px-12 lg:px-24 h-16 sm:h-[4.6rem] font-nunito">
        <div
          style={{
            width: "176px",
            height: "45px",
            overflow: "hidden",
          }}
        >
          <div>
            <img
              src={logo}
              alt="Logo"
              className="w-[100%] md:w-auto h-[100%]  md:h-auto "
            />
          </div>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <RiCloseLine className="hamburger-icon w-10 h-8" />
            ) : (
              <RiMenu3Line className="hamburger-icon w-10 h-8" />
            )}
          </button>
        </div>
        <div
          className={`hidden sm:flex font-extrabold text-[17px] justify-around items-center w-2/3 md:w-[60%] lg:w-[70%] ${
            isMenuOpen ? "hidden" : ""
          }`}
        >
          <div className="navbar-div cursor-pointer">
            <div
              to=""
              activeClassName="active-div"
              exact
              className={` nav-div`}
            >
              Clients
            </div>
          </div>
          <div className="navbar-div cursor-pointer">
            <div
              to=""
              activeClassName="active-div"
              exact
              className={` nav-div`}
            >
              Services
            </div>
          </div>
          <div className="navbar-div cursor-pointer">
            <div
              to=""
              activeClassName="active-div"
              exact
              className={` nav-div`}
            >
              Portfolio
            </div>
          </div>
          <div className="navbar-div cursor-pointer">
            <div
              to=""
              activeClassName="active-div"
              exact
              className={` nav-div`}
            >
              Industries Served
            </div>
          </div>
          <div className="navbar-div cursor-pointer">
            <div to="" activeClassName="active-div" exact className={`nav-div`}>
              Our Approach
            </div>
          </div>
          <div className="navbar-contact shadow-lg rounded-full px-3 py-1.5 hover:bg-blue-600 transition-all cursor-pointer bg-[#1A1A1A] font-medium text-[17px] text-[#fff] hidden sm:block">
            <div to="" activeClassName="active-div" exact className="nav-div">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="bg-[submit-bg] flex flex-col items-start pt-6 pl-4 hover:multiverse-text pb-20 justify-between h-[40%] font-medium">
            <div className="navbar-div cursor-pointer ">
              <div
                to=""
                activeClassName="active-div"
                exact
                className="nav-div text-[25px] my-8 "
              >
                Services
              </div>
            </div>
            <div className="navbar-div cursor-pointer">
              <div
                to=""
                activeClassName="active-div"
                exact
                className="nav-div text-[25px] "
              >
                Work
              </div>
            </div>
            <div className="navbar-div cursor-pointer">
              <div
                to=""
                activeClassName="active-div"
                exact
                className="nav-div text-[25px] py-4 "
              >
                About Us
              </div>
            </div>
            <div className="navbar-div cursor-pointer">
              <div
                to=""
                activeClassName="active-div"
                exact
                className="nav-div text-[25px] py-2 px-3"
              >
                Contact Us
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
