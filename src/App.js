import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Cats from './components/pages/Cats';
import LOTR from './components/pages/LOTR';
import Landing from './components/layout/Landing';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/cats' component={Cats} />
            <Route exact path='/lotr' component={LOTR} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
