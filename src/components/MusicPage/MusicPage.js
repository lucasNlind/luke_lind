import React, { useEffect } from "react"

import heroTest from '../../assets/hero-test.png'

import './MusicPage.css'
import 'aos/dist/aos.css'
import Aos from 'aos';

const MusicPage = () => {

    useEffect(() => {
        Aos.init( {duration: 2000} )
        window.scrollTo(0, 0)
    }, [])

    return (
        <div data-aos='fade-zoom-in' data-aos-delay='700'>
            <div className="musicPageHeroWrapper">
                <img className="musicPageHeroImage" src={heroTest}></img>
            </div>
            <div className='subHeroWrapper'>
                <p className="subHeroHeader">
                    Artistry: Bigger than music
                </p>
            </div>
            <div className="postContent">
                <p>
                    I've loved music since I was a kid, but never realized I could make it myself until I was about seventeen. 
                    I started tinkering with synth plugins in a software called FL Studio, and learned the basics of sound design
                    and arrangement through simple trial and error. After this, I graduated to more advanced techniques like 
                    equalization, compression, and audio effects like reverbs and delays. 
                </p>
                <p>
                    Using what I knew, I began making remixes of some of my favorite songs and posting beats to Soundcloud. I got a much better
                    response than I expected, so I kept refining my techniques with the hope of eventually producing my own material. A little over
                    two years ago, I posted my first original song to SoundCloud and the response was overwhelming. 
                </p>
                <p>
                    Knowing that my music was enjoyable to others gave me the confidence to continue releasing original songs to SoundCloud. I was able to explore
                    different genres and refined techniques for live instrumentation and vocal recording. The more music I released, the more I fell in love with the 
                    whole marketing and brand image side of music as well. Each song gave me the opportunity to create album art that not only fit the theme of the song
                    but also helped build a brand image for my page.  
                </p>
                <p>
                    More recently, I've taken this concept further and have been exploring the process of releasing full-length projects. These days,
                    artists are so focused on developing a brand with a captivating story than ever before. Strangely enough, music is getting less
                    about music and more about the story it tells and the image it portrays.
                </p>
                <p>
                    Go check out my latest release on <a 
                    className="spotifyLink"
                    target='_blank' 
                    href='https://open.spotify.com/album/0a497HzTX1MGOMx4ZPTvRC?si=eSOIOGfbTSSbvXSG0_fKhQ'>
                        Spotify
                    </a>.
                </p>
            </div>
        </div>
    )
}

export default MusicPage
