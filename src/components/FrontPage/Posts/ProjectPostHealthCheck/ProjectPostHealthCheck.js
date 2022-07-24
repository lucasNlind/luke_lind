import React from 'react'
import { NavLink } from 'react-router-dom'

import msLogo from '../../../../assets/morningstar_logo.png'

import './ProjectPostHealthCheck.css'

const ProjectPostHealthCheck = () => (
  <div className="projectPost">
    <div className="projectPostLeft">
        <NavLink to='/projects/ms-api-healthcheck'>
            <img className="projectPostThumbnail" src={msLogo} alt="spotify-thumbnail"></img>
        </NavLink>
    </div>
    <div className="projectPostRight">
      <p className="projectPostHeader">Work Project: API Health Check</p>
      <p className="projectPostSubHeader">2022 - Vue.js, Nest.js, AWS Lambda</p>
    </div>
  </div>
)

export default ProjectPostHealthCheck