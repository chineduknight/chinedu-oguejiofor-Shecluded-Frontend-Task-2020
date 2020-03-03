import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class RightMenu extends Component {
  render() {
    return (
      <Menu mode='horizontal'>
        <Menu.Item key='mail'>
          <Link to='/login'>Sign In</Link>
        </Menu.Item>
        <Menu.Item key='app'>
          <Link to='/register'>Sign Up</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
