import React, { Fragment, useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import {
  AiOutlineLogout,
  AiOutlineMenuUnfold,
  AiOutlineUser
} from "react-icons/ai";
import { RiDashboardLine } from "react-icons/all";
import { FcBusinessman } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { getUserDetails, removeSessions } from "../../helper/SessionHelper";

const MasterLayout = (props) => {
  let contentRef,
    sideNavRef = useRef();

  const onLogout = () => {
    removeSessions();
  };

  const MenuBarClickHandler = () => {

    let sideNav = sideNavRef;
    let content = contentRef;
    if (sideNav.classList.contains("side-nav-open")) {
      sideNav.classList.add("side-nav-close");
      sideNav.classList.remove("side-nav-open");
      content.classList.add("content-expand");
      content.classList.remove("content");
    } else {
      sideNav.classList.remove("side-nav-close");
      sideNav.classList.add("side-nav-open");
      content.classList.remove("content-expand");
      content.classList.add("content");
    }
    
  };

  return (
    <Fragment>
      <Navbar className="fixed-top px-0 shadow-sm ">
        <Container fluid={true}>
          <Navbar.Brand>
            <a className="icon-nav m-0 h5" onClick={MenuBarClickHandler}>
              <AiOutlineMenuUnfold />
            </a>
            <b>Authentication & Authorization</b>
          </Navbar.Brand>

          <div className="float-right h-auto d-flex">
            <div className="user-dropdown">
              <FcBusinessman/>
              <div className="user-dropdown-content ">
                <div className="mt-4 text-center">
                  
                  <FcBusinessman/>
                  <h6>
                    {getUserDetails()["name"]}
                  </h6>
                  <small>{getUserDetails()["email"]}</small>
                  <hr className="user-dropdown-divider  p-0" />
                </div>
                <NavLink to="/Profile" className="side-bar-item">
                  <AiOutlineUser className="side-bar-item-icon" />
                  <span className="side-bar-item-caption">Profile</span>
                </NavLink>
                <a onClick={onLogout} className="side-bar-item">
                  <AiOutlineLogout className="side-bar-item-icon" />
                  <span className="side-bar-item-caption">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>

      <div
        ref={(div) => {
          sideNavRef = div;
        }}
        className="side-nav-open"
      >
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/"
          end
        >
          <RiDashboardLine className="side-bar-item-icon" />
          <span className="side-bar-item-caption">User Info</span>
        </NavLink>


      </div>

      <div ref={(div) => (contentRef = div)} className="content">
        {props.children}
      </div>
    </Fragment>
  );
};

export default MasterLayout;
