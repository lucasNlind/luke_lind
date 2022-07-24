import React, { useEffect } from "react"

import healthcheck_ui from '../../assets/ms-healthcheck-ui.png'

import './HealthCheckProjectPage.css'
import 'aos/dist/aos.css'
import Aos from 'aos';

const HealthCheckProjectPage = () => {

    useEffect(() => {
        Aos.init( {duration: 2000} )
        window.scrollTo(0, 0)
    }, [])

    return (
        <div data-aos='fade-zoom-in' data-aos-delay='700'>
            <div className='subHeroWrapper'>
                <p className="subHeroHeader">
                    API Health Check
                </p>
            </div>
            <div className="postContent">
                <p>
                    During my most recent internship at Morningstar, I learned that engineers rely 
                    heavily on APIs. They need them to function at their best whenever the need arises, but
                    this usually never happens. API's are bound to malfunction, but it is not always easy to determine
                    when and why this is happening. 
                </p>
                <p>
                   A good start to solving this problem is having a single source of truth for the status of all the
                   API's your team works with. Having a consolodated platform to view the status of your microservices, at
                   the very least, gives you a good place to start when debugging. 
                </p>
                <p>
                   This is how my project was born, and throughout the course of the Summer I implemented this application
                   alongside members of my Managed Portfolios team. The frontend was built with Vue.js alongside a Nest.js
                   BFF for making API calls and storing sensitive data. We pushed the application to production on AWS using
                   AWS Lambda. 
                </p>
                <div className='aside-image-section-alt'>
                    <div className='aside-image-section-text-alt'>
                        <p>
                            I began sketching up ideas in Figma, and focused on presenting as much necessary information
                            as possible while still keeping things simple. I ended up going with a card-based
                            display where users could easily read the name and status indicators without having to
                            do much work.
                        </p>
                        <p>
                            Along with the name and status indicator, I included some more detailed information like the
                            actual status code, the timestamp of the most recent call, as well as links to some additional
                            resources for documentation. 
                        </p>
                        <p>
                            At the top of the application, I built a bar for searching, sorting, and filtering the API cards
                            based on what you're looking for. 
                        </p>
                    </div>
                    <div className='aside-image-section-image-alt'>
                        <img className="aside-image-wrapper-alt" src={healthcheck_ui}></img>
                    </div>
                </div>
                <p>
                   I made sure to get continuous feedback from my team and others on the look and feel of the application, and
                   I was happy to find that most people really liked the look and simplicity it provided. The next step was
                   building a modal component for viewing even more detailed information on an API, as well as adding a button for
                   calling the API's status endpoint on command. 
                </p>
            </div>
        </div>
    )
}

export default HealthCheckProjectPage
