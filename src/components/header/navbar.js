import React from "react";
import { NavLink } from "react-router-dom";
import BarIcon from "../../Assets/bar-icon";
import Heading from "./Heading";
import { MdHome } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

let navigationLinkStyle =
  "text-green-500  text-lg hover:text-green-600 outline-none";
let navigationLinkStyleHome = `${navigationLinkStyle}`;
let navigationLinkStyleServices = `${navigationLinkStyle}`;
let navigationLinkStyleContactUs = `${navigationLinkStyle} md:font-semibold`;
const navigationStyleMobile = "grid grid-flow-col place-items-center";
const NavigationGridStyle = "grid grid-flow-col place-items-center gap-2";

export default class Navigation extends React.Component {
  state = {
    status: false,
    className: "h-0",
  };
  navClick() {
    this.setState({
      status: !this.state.status,
      className: !this.state.status
        ? "h-96 block transition-height duration-75 delay-100 ease-out "
        : "h-0 transition-height delay-75 duration-100 ease-in",
    });
  }

  navigationLinks() {
    return (
      <nav className={this.state.className}>
        <ul
          className=" grid h-full md:grid-flow-col md:gap-8 py-4 px-6 divide-y divide-green-500
                                  md:divide-y-0 md:justify-end md:relative 
                                   md:-top-14 md:place-content-center md:px-0 md:pr-4 "
        >
          <li className={navigationStyleMobile}>
            <NavLink
              exact
              to="/"
              activeStyle={{
                borderBottomColor: "#22c55e",
                borderBottomWidth: "3px",
              }}
            >
              <button className={navigationLinkStyleHome}>
                <div className={NavigationGridStyle}>
                  Home
                  <MdHome />
                </div>
              </button>
            </NavLink>
          </li>
          <li className={navigationStyleMobile}>
            <NavLink
              exact
              to="/services"
              activeStyle={{
                borderBottomColor: "#22c55e",
                borderBottomWidth: "3px",
              }}
            >
              <button className={navigationLinkStyleServices}>
                <div className={NavigationGridStyle}>
                  Services
                  <MdSettings />
                </div>
              </button>
            </NavLink>
          </li>
          <li className={navigationStyleMobile}>
            <NavLink
              exact
              to="/contact-us"
              activeStyle={{
                borderBottomColor: "#22c55e",
                borderBottomWidth: "3px",
              }}
            >
              <button className={navigationLinkStyleContactUs}>
                <div className={NavigationGridStyle}>
                  Contact Us
                  <MdLocalPhone />
                </div>
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    let renderNavigationLinks = this.navigationLinks();
    return (
      <React.Fragment>
        <div
          className="bg-white relative z-10 shadow-md
                      grid grid-flow-col auto-cols-max 
                      justify-between items-center py-2 font-raleway"
        >
          <Heading />
          <div
            className="md:hidden mr-4 pl-3 pt-1 sm:mr-8 cursor-pointer "
            onClick={this.navClick.bind(this)}
          >
            <BarIcon switchStatus={this.state.status} />
          </div>
        </div>
        <div
          className=" shadow-2xl relative z-0 md:z-10 mx-2 -mt-1 rounded-b-2xl 
                         border-t-0 border border-green-500 border-solid
                        md:border-0 md:shadow-none md:h-0"
        >
          {renderNavigationLinks}
        </div>
      </React.Fragment>
    );
  }
}
