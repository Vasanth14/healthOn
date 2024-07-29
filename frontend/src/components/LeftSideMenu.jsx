import React, { useEffect } from "react";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPlusSquare, faHeart, faUser, faClock, faChartBar } from '@fortawesome/free-regular-svg-icons'

const LeftSideMenu = () => {
  useEffect(() => {
    document.body.classList.add("sidenav");
  }, []);

  const closeBtn = () => {
    console.log("hello");
    document.body.classList.toggle("closesidenav");
    document.body.classList.remove("sidenav");
  };

  return (
    <>
      <div className="leftsidemenu" id="mySidenav">
        {/* <Button onClick={closeBtn} className="closebtn">
          &times;
        </Button> */}
        <div className="sidenavflex">
          <div className="sidenavtop">
            <div className="brand">
              <Link to={"/"}>
                Health<span className="brandstyle">ON</span>
              </Link>
            </div>
            <Link to={"#"}><FontAwesomeIcon className="me-2" icon={faChartBar} />Overview</Link>
            <Link to={"#"}><FontAwesomeIcon className="me-2" icon={faClock} />Appointment</Link>
            <Link to={"#"}><FontAwesomeIcon className="me-2" icon={faHeart} />My Patients</Link>
            <Link to={"#"}><FontAwesomeIcon className="me-2" icon={faEnvelope} />Messages</Link>
          </div>
          <div className="sidenavend">
            <Link to={"#"}><FontAwesomeIcon className="me-2" icon={faUser} />Logout</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideMenu;
