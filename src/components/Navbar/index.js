import React from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='menuBar'>
      <div className='logo'>
        <Link to='/'>LOTRCat</Link>
      </div>
      <div className='menuCon'>
        <div className='leftMenu'>
          <LeftMenu />
        </div>
        <div className='rightMenu'>
          <RightMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
