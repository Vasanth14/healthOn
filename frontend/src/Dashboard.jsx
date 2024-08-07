import { Badge, Button, Image, Table } from "react-bootstrap";
import LeftSideMenu from "./components/LeftSideMenu";
import UserNav from "./components/UserNav";
import { PieChart } from "react-minimal-pie-chart";
import calendar from "../src/assets/images/calendar.svg";
import avatar from "../src/assets/images/profile.png";
import rightarrow from "../src/assets/images/right-arrow.svg";
import pat from "../src/assets/images/pat.png";
import trend from "../src/assets/images/trendup.svg";

import React from "react";
import { Link } from "react-router-dom";

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
                <div>
                  <h2>Appointment Request</h2>
                </div>
                <div>
                  <Link to="#" className="linkbtn">
                    View All <Image src={rightarrow} alt="arrow" />
                  </Link>
                </div>
              </div>
              <div className="contentbox">
                <Table hover>
                  <tbody>
                    <tr>
                      <td>
                        <div className="table-content">
                          <div>
                            <Image src={avatar} className="profileimg" />
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
                            <Image src={avatar} className="profileimg" />
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
                            <Image src={avatar} className="profileimg" />
                          </div>
                          <div className="appoitmentcontent">
                            <h2>Dani</h2>
                            <p>45 Male, 12 April 9:30</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Button className="btn confirmbtn">Confirm</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table-content">
                          <div>
                            <Image src={avatar} className="profileimg" />
                          </div>
                          <div className="appoitmentcontent">
                            <h2>Dani</h2>
                            <p>45 Male, 12 April 9:30</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Button className="btn confirmbtn">Confirm</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table-content">
                          <div>
                            <Image src={avatar} className="profileimg" />
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
                    <tr>
                      <td>
                        <div className="table-content">
                          <div>
                            <Image src={avatar} className="profileimg" />
                          </div>
                          <div className="appoitmentcontent">
                            <h2>Dani</h2>
                            <p>45 Male, 12 April 9:30</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Button className="btn declinebtn">Decline</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="patientanalytics">
              <div className="patientrecord">
                <div className="cardtitle">
                  <h2>Patients</h2>
                </div>
                <div className="contentbox">
                  <Table hover>
                    <tbody>
                      <tr>
                        <td>
                          <div className="table-content">
                            <div>
                              <Image
                                src={pat}
                                alt="patient"
                                className="patimg"
                              />
                            </div>
                            <div className="patcontent">
                              <h4 className="sub-heading">166.4k</h4>
                              <p className="content">Total Patients</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="trend">
                            <Image
                              src={trend}
                              alt="trend"
                              className="trendimg"
                            />{" "}
                            15%
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-content">
                            <div>
                              <Image
                                src={pat}
                                alt="patient"
                                className="patimg"
                              />
                            </div>
                            <div className="patcontent">
                              <h4 className="sub-heading">200.4k</h4>
                              <p className="content">Old Patients</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="trend">
                            <Image
                              src={trend}
                              alt="trend"
                              className="trendimg"
                            />{" "}
                            12%
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="contentbox patientchart">
                <PieChart
                  data={[
                    { title: "One", value: 10, color: "#7a6efe" },
                    { title: "Two", value: 15, color: "#ff5363e6" },
                    { title: "Three", value: 20, color: "#ffa901" },
                  ]}
                />
                ;
              </div>
            </div>

            <div className="tdyappointment">
              <div className="cardtitle">
                <div>
                  <h2>Today Appointments</h2>
                </div>
                <div>
                  <Link to="#" className="linkbtn">
                    View All <Image src={rightarrow} alt="arrow" />
                  </Link>
                </div>
              </div>
              <div className="contentbox">
                <Table hover>
                  <tbody>
                    <tr>
                      <td>
                        <div className="table-content">
                          <div>
                            <Image src={avatar} className="profileimg" />
                          </div>
                          <div className="appoitmentcontent">
                            <h2>Dan Smith</h2>
                            <p>Out Patient</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6>
                          <Badge className="appstatus">Ongoing</Badge>
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table-content">
                          <div>
                            <Image src={avatar} className="profileimg" />
                          </div>
                          <div className="appoitmentcontent">
                            <h2>Miles</h2>
                            <p>In Patient</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6>
                          <Badge className="appstatus">10.25</Badge>
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table-content">
                          <div>
                            <Image src={avatar} className="profileimg" />
                          </div>
                          <div className="appoitmentcontent">
                            <h2>Robert</h2>
                            <p>Out Patient</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6>
                          <Badge className="appstatus">11.30</Badge>
                        </h6>
                      </td>
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
