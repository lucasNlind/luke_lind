import React from 'react'
import { NavLink } from 'react-router-dom'

import spotifyThumbnail from '../../../../assets/SPOTIFY_PROJECT_THUMBNAIL.png'

import './ProjectPostSpotify.css'

const ProjectPostSpotify = () => (
  <div className="projectPost">
    <div className="projectPostLeft">
        <NavLink to='/projects/spotify'>
            <img className="projectPostThumbnail" src={spotifyThumbnail} alt="spotify-thumbnail"></img>
        </NavLink>
    </div>
    <div className="projectPostRight">
      <p className="projectPostHeader">Spotify Weather Playlist Generator</p>
      <p className="projectPostSubHeader">2021 - Python, Spotify API</p>
    </div>
  </div>
)

export default ProjectPostSpotify