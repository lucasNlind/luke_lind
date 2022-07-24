import React from 'react'
import { NavLink } from 'react-router-dom'

import stretchedThumbnail from '../../../../assets/STRETCHED_THUMBNAIL.png'

import './ProjectPostStretched.css'

const ProjectPostStretched = () => (
  <div className="projectPost">
    <div className="projectPostLeft">
        <NavLink to='/projects/stretched'>
            <img className="projectPostThumbnail" src={stretchedThumbnail} alt="spotify-thumbnail"></img>
        </NavLink>
    </div>
    <div className="projectPostRight">
      <p className="projectPostHeader">Stretched: An Ecommerce Platform</p>
      <p className="projectPostSubHeader">2021 - Figma, React.js</p>
    </div>
  </div>
)

export default ProjectPostStretched