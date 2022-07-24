import React from 'react'

import aboutMeHero from '../../assets/AboutMeHero.png'
import morningstarLogo from '../../assets/morningstar_logo.png'
import kryLogo from '../../assets/livi_logo.jpg'
import juniLogo from '../../assets/juni_logo.png'

import './AboutMePage.css'

const AboutMePage = () => {
    return (
        <div data-aos='fade-zoom-in' data-aos-delay='700'>
            <div className="musicPageHeroWrapper">
                <img className="musicPageHeroImageAbout" src={aboutMeHero}></img>
            </div>
            <div className='subHeroWrapperSpotify'>
                <p className="subHeroHeaderAboutMe">
                    About Me
                </p>
            </div>
            <div className="postContent">
                <p>
                    Hey! I'm Luke. I'm a third year Finance turned Computer Science major at UGA, but I've been
                    programming since my Sophomore year of high school. I've always been drawn to the amount of
                    different opportunities available in tech, and love integrating my creative endeavors with
                    Computer Science. Here are some places I've worked:
                </p>
                <div className='workCards'>
                    <div className='cardWrapper'>
                        <img className="projectPostThumbnail" src={morningstarLogo} alt="spotify-thumbnail"></img>
                    </div>
                    <img className="projectPostThumbnail" src={kryLogo} alt="spotify-thumbnail"></img>
                    <img className="projectPostThumbnail" src={juniLogo} alt="spotify-thumbnail"></img>
                </div>
                <p>
                    It's because of technology that I've been awarded these opportunities, and I'd love to continue exploring
                    more of what it has to offer. My primary focus is on frontend development and design. I'm very comfortable
                    using frameworks and libraries like Vue.js and React.js to build both nice looking and usable web page applications. 
                    I'm also really into Image Processing and its applications in Computer Vision. 
                </p>
                <p>
                    Outside of work and school I write, record, produce, and release my own music to major streaming
                    platforms like Spotify and Apple Music. Along with this, I love to cook, travel, and take pictures just
                    about everywhere I go. If you've made it this far, don't be shy - let's connect!
                </p>
                <p>

                </p>
            </div>
        </div>
    )
}

export default AboutMePage