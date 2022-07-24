import React, { useEffect } from 'react'

import stretchedHero from '../../assets/stretched_hero.png'
import stretchedDemoOne from '../../assets/stretched_demo_image_1.png'
import stretchedDemoTwo from '../../assets/stretched_demo_image_2.png'
import stretchedDemoThree from '../../assets/stretched_demo_image_3.png'

import './StretchedProjectPage.css'

const StretchedProjectPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div data-aos='fade-zoom-in' data-aos-delay='700'>
            <link rel="stylesheet" href="https://use.typekit.net/tru2emh.css"></link>
            <div className="demoImagesWrapper">
                <div className='imageCol1'>
                    <img alt='spotifyHero' className="stretchedDemoImage" src={stretchedHero}></img>
                    <img alt='spotifyHero' className="stretchedDemoImage" src={stretchedDemoThree}></img>
                </div>
                <div className='imageCol2'>
                    <div className='colTwoHeader'>
                        <h2 className='headerClass'>Stretched</h2>
                    </div>
                    <img alt='spotifyHero' className="stretchedDemoImage" src={stretchedDemoOne}></img>
                    <img alt='spotifyHero' className="stretchedDemoImage" src={stretchedDemoTwo}></img>   
                </div>
            </div>
            <div className='subHeroWrapperSpotify'>
                <p className="subHeroHeaderSpotify">
                    The Journey
                </p>
            </div>
            <div className="postContentSpotify">
                <p>
                    Stretched was my first extensive project I ever built out for a client. I got in touch
                    with a woman named Amy who had this idea to build out a high-end peer-to-peer marketplace
                    for women's athleisurewear products. She had recognized the crazy demand for second-hand products
                    on Facebook marketplace, and wanted to create her own platform.
                </p>
                <p>
                    There are, in fact, several Facebook marketplaces with over 40 thousand members each that
                    exist solely for the purpose of buying and selling secondhand Lululemon products. She and I both knew
                    that we could make our own marketplace that not only looked and felt better but also 
                    provided something unique to the user. And so, Stretched was born.
                </p>
                <h2>
                    The Platform
                </h2>
                <p>
                    Since the inception of the idea, the platform itself has been mine to design, implement, and maintain from
                    the ground up. It was an incredible opportunity for me to both demonstrate and test my skill set in
                    a number of different areas. 
		        </p>
                <p>
                    For our specific platform, we needed a peer-to-peer marketplace. This is different from a traditional marketplace
                    in that the platform allows anyone to become a seller once they sign up. We wanted to build a community of users
                    based on trust, so we needed the right platform to do so.
                </p>
		        <p> 
		            One of the first platforms I came across was an open-source marketplace software developed by a company 
                    called <a target='_blank' href='https://www.sharetribe.com/' className='spotifyLink'>ShareTribe</a>.
                    I have nothing but good things to say about this company. 
                </p>
                <p>
                    Not only do they provide complete templates for peer-to-peer marketplaces, but their support system
                    and developer network is so rich. I pulled their codebase as well as their design files and started
                    putting together a vision for the marketplace. 
                </p>
                <h2>
                    Design
                </h2>
                <p>
                    Many of these athleisure brands stress elegance and simplicity when it comes to their image and design. 
                    With the platform, I wanted to capture this same essence with my own design. The template provided by ShareTribe
                    offered me a really good place to start, and I was able to complete my aesthetic changes about 2 months into the project. 
                </p>
                <p>
                    I got to a point where I was really happy with the way the website looked, but there was a lot of core functionality that
                    was missing before we could get the platform up and running. To do so, I got in touch with ShareTribe asking
                    for a connection to a team of developers that could finish out the rest of the work.
                </p>
                <h2>
                    The Commission
                </h2>
                <p>
                    I spent a good month laying out a roadmap for the developers before they started their work. When they started,
                    I ensured that there were weekly meetings between us where we could go over updates, changes, and problems. It
                    was my first experience leading a project with a team of my own. 
                </p>
                <p>
                    I was thouroughly impressed by the team's work and feel that the entire process went really smoothly. As they
                    were working on their portion of the project, I continued laying out the details of the platform in regards to
                    the nit-picky specifics of user to user and user to platform interactions. 
                </p>
                <h2>
                    Wrapped
                </h2>
                <p>
                    I ended my involvement with the project once the platform had been built out and my job was done. Overall,
                    I couldn't be more grateful for the opportunity to flex my entrepreneurial muscles and feel that the end product
                    turned out really nice!
                </p>
            </div>
        </div>
    )

}

export default StretchedProjectPage
