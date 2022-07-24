import React, { Component } from 'react'

import Navigaton from './components/Navigation/Navigation.js';
import FrontPage from './components/FrontPage/FrontPage.js'
import MusicPage from './components/MusicPage/MusicPage.js'
import SpotifyProjectPage from './components/SpotifyProjectPage/SpotifyProjectPage.js';
import StretchedProjectPage from './components/StretchedProjectPage/StretchedProjectPage.js'
import HealthCheckProjectPage from './components/HealthCheckProjectPage/HealthCheckProjectPage.js';
import TradingSimulationProjectPage from './components/TradingSimulationProjectPage/TradingSimulationProjectPage.js';
import AboutMePage from './components/AboutMePage/AboutMePage.js'
import Footer from './components/Footer/Footer.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Navigaton></Navigaton>
        <Switch>
          <Route exact path='/luke_lind'>
            <FrontPage></FrontPage>
          </Route>
          <Route path='/music'>
            <MusicPage></MusicPage>
          </Route>
          <Route path='/about'>
            <AboutMePage></AboutMePage>
          </Route>
          <Route path='/projects/stretched'>
            <StretchedProjectPage></StretchedProjectPage>
          </Route>
          <Route path='/projects/spotify'>
            <SpotifyProjectPage></SpotifyProjectPage>
          </Route>
          <Route path='/projects/ms-api-healthcheck'>
            <HealthCheckProjectPage></HealthCheckProjectPage>
          </Route>
          <Route path='/projects/trading-simulation'>
            <TradingSimulationProjectPage></TradingSimulationProjectPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
