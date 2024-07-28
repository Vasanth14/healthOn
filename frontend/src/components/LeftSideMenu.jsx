import React, { useEffect } from "react";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Link to={"#"}>About</Link>
            <Link to={"#"}>Services</Link>
            <Link to={"#"}>Clients</Link>
            <Link to={"#"}>Contact</Link>
          </div>
          <div className="sidenavend">
            <Link to={"#"}>Logout</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideMenu;
