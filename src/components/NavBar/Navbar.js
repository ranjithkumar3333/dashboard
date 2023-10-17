import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HelpIcon from '@mui/icons-material/Help';
import Image from '../images/person1.jpeg';
import './Navbar.css';

function Navbar({ isSidebarOpen }) {
  return (
    <>
      <div className={`navbar ${isSidebarOpen ? 'open' : ''}`}>
        <a href="#">
          <h3>
            <HomeIcon /> Dashboard
          </h3>
        </a>
        <a href="#">
          <HomeIcon /> Dashboard
        </a>
        <a href="#">
          <InboxIcon /> Product
        </a>
        <a href="#">
          <PeopleIcon /> Customers
        </a>
        <a href="#">
          <AccountBalanceWalletIcon /> Income
        </a>
        <a href="#">
         <AutoGraphIcon /> Promote
        </a>
        <a href="#">
          <HelpIcon /> Help
        </a>
        <a className="user-portfolio">
          <img src={Image} alt="User" className="user-image" />
          Project Manager
        </a>
      </div>
    </>
  );
}

export default Navbar;
