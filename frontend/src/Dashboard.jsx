import LeftSideMenu from "./components/LeftSideMenu";
import UserNav from "./components/UserNav";
import '../public/assets/css/user.css'

import React from 'react'

const Dashboard = () => {
  return (
    <>
        <UserNav />
        <LeftSideMenu />
    </>
  )
}

export default Dashboard