import React, { useEffect } from 'react'

import swedishFlag from '../../assets/FLAG-ICON.png';
import profileImage from '../../assets/profile-image.jpeg'

import ProjectPostSpotify from './Posts/ProjectPostSpotify/ProjectPostSpotify';
import ProjectPostStretched from './Posts/ProjectPostStretched/ProjectPostStretched';
import ProjectPostHealthCheck from './Posts/ProjectPostHealthCheck/ProjectPostHealthCheck';
import ProjectPostTradingSimulation from './Posts/ProjectPostTradingSimulation/ProjectPostTradingSimulation';

import './FrontPage.css'
import 'aos/dist/aos.css'
import Aos from 'aos';

const FrontPage = () => {

  useEffect(() => {
    Aos.init( {duration: 1500} )
  }, [])

  return (
    <div className="master">
      <link rel="stylesheet" href="https://use.typekit.net/tru2emh.css"></link>
      <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
      <div className="hero">
        <div className="heroLeft">
          <img className="heroImage" src={profileImage} alt="profile-image"></img>
        </div>
        <div className="heroRight">
          <p className="centralHeader">
            Hej, I'm Luke.
          </p>
          <div className="subHeader">
            <p className="subHeaderText">
              That's Swedish for hi. I'm half viking 
            </p>
            <p className="subHeaderFlagWrapper">
              <img className="subHeaderFlag"src={swedishFlag} alt="logo"></img>
          </p>
        </div>
      </div>
      </div>
      <div data-aos='fade-up' className="projectsWrapper">
            <p className="projectsHeader">I code.</p>
            <p className="projectsHeader">I design.</p>
            <p className="projectsHeader">And I love music.</p>
            <p className="projectsHeader">(here are a couple things i'm proud of)</p>
	          <div className="myPostsWrapper">
                <ProjectPostTradingSimulation></ProjectPostTradingSimulation>
                <ProjectPostHealthCheck></ProjectPostHealthCheck>
                <ProjectPostSpotify></ProjectPostSpotify>
                <ProjectPostStretched></ProjectPostStretched>
            </div>
      </div>
    </div>
  )
}

export default FrontPage
