import { Image } from "react-bootstrap";
import LeftSideMenu from "./components/LeftSideMenu";
import UserNav from "./components/UserNav";
import calendar from "../src/assets/images/calendar.svg";

import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="pagecontent">
        <UserNav />
        <LeftSideMenu />
        <div className="pagecontentbox">
          <div className="pagetitlediv">
            <h2 className="title">Welcome, Dr. Stephen!</h2>
          </div>
          <div className="flexbox">
            <div className="cards appointmentcard">
              <div className="table-content">
                <div>
                  <Image src={calendar} className="cardimg" />
                </div>
                <div className="cardcontent">
                  <h4 className="sub-heading">24.4k</h4>
                  <p className="content">Appointments</p>
                </div>
              </div>
            </div>

            <div className="cards patientcard">
              <div className="table-content">
                <div>
                  <Image src={calendar} className="cardimg" />
                </div>
                <div className="cardcontent">
                  <h4 className="sub-heading">166.4k</h4>
                  <p className="content">Total Patients</p>
                </div>
              </div>
            </div>

            <div className="cards cliniccard">
              <div className="table-content">
                <div>
                  <Image src={calendar} className="cardimg" />
                </div>
                <div className="cardcontent">
                  <h4 className="sub-heading">54.k</h4>
                  <p className="content">Clinic Consulting</p>
                </div>
              </div>
            </div>

            <div className="cards consultingcard">
              <div className="table-content">
                <div>
                  <Image src={calendar} className="cardimg" />
                </div>
                <div className="cardcontent">
                  <h4 className="sub-heading">28.8k</h4>
                  <p className="content">Video Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
