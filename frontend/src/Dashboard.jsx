import LeftSideMenu from "./components/LeftSideMenu";
import UserNav from "./components/UserNav";

import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="pagecontent">
        <UserNav />
        <LeftSideMenu />
        <div className="pagecontentbox">
          <h2>hello</h2>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
