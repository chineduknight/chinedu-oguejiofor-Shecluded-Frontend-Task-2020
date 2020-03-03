import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='lot-title'>LORD OF THE CATS</h1>
          <p className='lot-sub-title'>The Furrllowship Of The Ring</p>
          <div className='buttons'>
            <Link to='/cats' className='ant-btn ant-btn-primary'>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
