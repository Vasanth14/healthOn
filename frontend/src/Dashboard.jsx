import { Button, Image, Table } from "react-bootstrap";
import LeftSideMenu from "./components/LeftSideMenu";
import UserNav from "./components/UserNav";
import calendar from "../src/assets/images/calendar.svg";
import avatar from '../src/assets/images/profile.png'

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
          <div className="flexbox analyticscard my-3">
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

          <div className="flexbox opanalytics my-4">
            <div className="oprequest">
              <div className="cardtitle">
                <h2>Appointment Request</h2>
              </div>
              <div className="contentbox">
                <Table hover>
                  <tbody>
                    <tr>
                      <td>
                        <div className="table-content">
                            <div>
                              <Image src={avatar} className="profileimg"/>
                            </div>
                            <div className="appoitmentcontent">
                              <h2>Arjun</h2>
                              <p>45 Male, 12 April 9:30</p>
                            </div>
                        </div>
                      </td>
                      <td>
                        <Button className="btn declinebtn">Declined</Button>
                      </td>
                    </tr>
                    <tr>
                    <td>
                        <div className="table-content">
                            <div>
                              <Image src={avatar} className="profileimg"/>
                            </div>
                            <div className="appoitmentcontent">
                              <h2>John</h2>
                              <p>45 Male, 12 April 9:30</p>
                            </div>
                        </div>
                      </td>
                      <td>
                        <Button className="btn declinebtn">Declined</Button>
                      </td>
                    </tr>
                    <tr>
                    <td>
                        <div className="table-content">
                            <div>
                              <Image src={avatar} className="profileimg"/>
                            </div>
                            <div className="appoitmentcontent">
                              <h2>Dani</h2>
                              <p>45 Male, 12 April 9:30</p>
                            </div>
                        </div>
                      </td>
                      <td>
                        <Button className="btn confirmbtn">Confirmed</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="patientrecord">
              <div className="cardtitle">
                <h2>Appointment Request</h2>
              </div>
              <div className="contentbox">
                <Table hover>
                  <tbody>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="tdyappointment">
              <div className="cardtitle">
                <h2>Appointment Request</h2>
              </div>
              <div className="contentbox">
                <Table hover>
                  <tbody>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
