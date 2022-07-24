import React from 'react'
import { NavLink } from 'react-router-dom'

import msLogo from '../../../../assets/morningstar_logo.png'

import './ProjectPostTradingSimulation.css'

const ProjectPostTradingSimulation = () => (
  <div className="projectPost">
    <div className="projectPostLeft">
        <NavLink to='/projects/trading-simulation'>
            <img className="projectPostThumbnail" src={msLogo} alt="spotify-thumbnail"></img>
        </NavLink>
    </div>
    <div className="projectPostRight">
      <p className="projectPostHeader">Work Project: Case Study</p>
      <p className="projectPostSubHeader">2022 - Vue.js, D3, Yahoo Finance API</p>
    </div>
  </div>
)

export default ProjectPostTradingSimulation