import React, { useEffect } from "react"

import healthcheck_ui from '../../assets/ms-trading-ui.png'

import './TradingSimulationProjectPage.css'
import 'aos/dist/aos.css'
import Aos from 'aos';

const TradingSimulationProjectPage = () => {

    useEffect(() => {
        Aos.init( {duration: 2000} )
        window.scrollTo(0, 0)
    }, [])

    return (
        <div data-aos='fade-zoom-in' data-aos-delay='700'>
            <div className='subHeroWrapper'>
                <p className="subHeroHeader">
                    Trading Simulation
                </p>
            </div>
            <div className="postContent">
                <p>
                    During my most recent internship at Morningstar, we were assigned teams as well as a prompt to tackle
                    for a case study competition. The prompt essentially told us to build a product or solution with
                    the intention of mitigating one of four investor biases. We chose to focus on investor overconfidence. 
                </p>
                <p>
                   We spent the first couple weeks as a team brainstorming potential ideas. There were some good ones, but we 
                   ultimately decided to build an event-driven trading simulation where users make trades in a controlled 
                   environment. Throughout the course of the simulation, the player follows five stocks.
                </p>
                <p>
                   
                </p>
                <div className='aside-image-section'>
                    <div className='aside-image-section-image'>
                        <img className="aside-image-wrapper" src={healthcheck_ui}></img>
                    </div>
                    <div className='aside-image-section-text'>
                        
                        <p>
                            Each of the five stocks model real historical stock data of five different tech companies. We 
                            replaced the names of each one with the intention of severing any existing connection or sentiment
                            towards a particular company. 
                        </p>
                        <p>
                            When the game starts, the news feed (right-hand side) is populated with news articles relevant for
                            each of the five companies. 
                        </p>
                        <p>
                            This gives users a chance to learn more about each company and make
                            more informed decisions when trading. 
                        </p>
                    </div>
                </div>
                <p>
                   In the background, the application is collecting a bunch of data about the user's behavior with the intention
                   of revealing their degree of investor overconfidence. There are a couple metrics you can track, but some of the
                   more important ones are:
                </p>
                <ul>
                    <li>How much money is being invested at the beginning of the simulation</li>
                    <li>How diverse a user's portfolio is</li>
                    <li>How many times a user clicks into a news feed to learn more</li>
                    <li>Whether or not a user wants to spend additional money to get 'expert' financial advice</li>
                </ul>
                <p>
                   Depending on how the user acts throughhout the course of the simulation, their overconfidence metric
                   will be higher or lower based on these indicators. 
                </p>
                <h2>Technology</h2>
                <p>
                   I built the UI using Vue.js, which is an excellent front-end framework that I personally think is a bit
                   better than React.js. Building out the components was fairly straightforward, but by far the most challenging
                   components to implement were the charts.
                </p>
                <p>
                   As you can see from the screenshot, there are two charts: a pie chart and a stock chart. I implemented both using
                   D3, a JavaScript library for producing dynamic charts. The biggest challenge wasn't necessarily initializing the charts
                   with the proper data, but rather it was making them dynamic. 
                </p>
                <p>
                   One day in the simulation is about 2.5 seconds in real time. Because each day reflects a new closing price
                   for every stock, I needed to make sure that the stock chart was being updated on a daily basis. I ended up solving
                   this issue by giving the stock chart component a key value and updating the key value at the end of each day in
                   the simulation. 
                </p>
            </div>
        </div>
    )
}

export default TradingSimulationProjectPage
