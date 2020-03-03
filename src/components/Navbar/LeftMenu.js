import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
class LeftMenu extends Component {
  render() {
    return (
      <Menu mode='horizontal'>
        <Menu.Item key='mail'>
          <Link to='/cats'>View Cats</Link>
        </Menu.Item>
        <Menu.Item key='alipay'>
          <Link to='/lotr'>LOTR Characters</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
