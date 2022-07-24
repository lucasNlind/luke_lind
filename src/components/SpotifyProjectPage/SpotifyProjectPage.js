import React, { useEffect } from 'react'

import spotifyProjectHero from '../../assets/spotify-post-hero.jpg'
import valenceEmoji from './images/valence_emoji.png'
import energyEmoji from './images/energy_emoji.png'
import danceEmoji from './images/dance_emoji.png'
import sunEmoji from './images/sun_emoji.png'
import rainEmoji from './images/rain_emoji.png'
import nerdEmoji from './images/nerd_emoji.png'

import './SpotifyProjectPage.css'

const SpotifyProjectPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    

    return (
        <div data-aos='fade-zoom-in' data-aos-delay='700'>
            <link rel="stylesheet" href="https://use.typekit.net/tru2emh.css"></link>
            <div className="musicPageHeroWrapper">
                <img alt='spotifyHero' className="musicPageHeroImageSpotify" src={spotifyProjectHero}></img>
            </div>
            <div className='subHeroWrapperSpotify'>
                <p className="subHeroHeaderSpotify">
                    Atmosphere: how it makes us feel
                </p>
            </div>
            <div className="postContentSpotify">
                <p>
                    I love how well a certain song can bring you to another place. Music has a really close relationship
                    with atmoshpere in this way, and so I really wanted to explore how I could measure its strength with this project.
                </p>
                <p>
                    I had a basic understanding of the Spotify API and some Python background, but I really didn't
                    know where to start. It was all pretty intimidating at first, but I ended up finding this fantastic
                    Python library called <a 
                    target='_blank' 
                    className='spotifyLink'
                     href='https://spotipy.readthedocs.io/en/2.19.0/#'>Spotipy</a> that streamlined the entire process for me.
		    I needed only a Client ID and a Client Secret from my Spotify developer dashboard, as well as a redirect URI to verify my credentials. 
                </p>
                <p>
                    I started by creating playlists of my own on the Spotify App. In the spirit of simplicity I made
                    two:
                </p>
                <div className="sunnyPlaylistWrapper">
                    <div className="sunnyPlaylistWrapperLeft">
                        <iframe 
                        src="https://open.spotify.com/embed/playlist/6h5GNBGSdzPy0SE6NOMddo" 
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                    <div className="sunnyPlaylistWrapperRight">
                        <iframe 
                        src="https://open.spotify.com/embed/playlist/5BqayxS0OumOudUrK6Txek?theme=0" 
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
                <p>
                    Ultimately, I was trying to figure out how my standards for a certain playlist (in this case, weather) 
                    matched up with Spotify's standards. This meant pulling data from the API to see what was going on under the hood.
                </p>
                <h2>Setting Threshholds</h2>
                <p>
                    Spotify stores a lot about each song, but there are some key pieces of information that really stick
                    out. Valence, energy, and danceability are all song attributes that Spotify measures from a level 0 to 1:
                </p>
                <ul>
                    <li>Valence: How uplifting a song is<img alt='valenceEmoji' className='emojiWrapper' src={valenceEmoji}></img></li>
                    <li>Energy: How energetic a song feels<img alt='energyEmoji' className='emojiWrapper' src={energyEmoji}></img></li>
                    <li>Danceability: How danceable the song is<img alt='danceEmoji' className='emojiWrapper' src={danceEmoji}></img></li>
                </ul>
                <p>
                    There's a lot more going on than just these three variables of course, but I was really interested to 
                    see how these in particular came together to create some sort of song profile.
                </p>
                <p>
                    My approach involved using thresholds - meaning that I was tracking to see how many songs in a playlist
                    fell above or below a threshold of, let's say, 0.75 valence. 
                </p>
                <p>
                    In doing so I was mostly concerned with the percentage of songs falling below this threshold. Let me break down the 
                    example I used earlier:
                </p>
                <p>
                    <span className='underline'>Higher</span> valence means a more positive song - and positive songs are ones I'd put in a 'Sunny Day' playlist<img alt='sunEmoji' className='emojiWrapperOffLine' src={sunEmoji}></img>
                </p>
                <p>
                    <span className='underline'>Lower</span> valence means a more somber song - and somber songs are ones I'd put in a 'Rainy Day' playlist<img alt='rainEmoji' className='emojiWrapperOffLine' src={rainEmoji}></img>
                </p>
                <h3>Thus...</h3>
                <ul>
                    <li>
                        I can expect a <span className='underline'>lower</span> percentage of songs to fall below 0.75 valence for a 'Sunny Day' playlist.
                    </li>
                    <li>
                        I can also expect a <span className='underline'>higher</span> percentage of songs to fall below 0.75 valence for a 'Rainy Day' playlist.
                    </li>
                </ul>
                <p>
                    As straightforward as the approach was, I think it was effective in highlighting some of the factors that really
                    help a song fit some kind of atmoshpere. Valence, energy, and danceability were the three best indicators. 
                </p>
                <h2>Outliers</h2>
                <p>
                    There were, of course, other indicators. I mentioned earlier that Spotify stores more than just these three variables - two of them being
                    song key and tempo. Going into the project, I was expecting these two attributes to be at least somewhat indicative of where a song
                    fit based on weather. However, I couldn't find any reasonable correlation while tracking these variables.
                </p>
                <p>
                    My assumption was that a more uptempo song would indicate a more positive one and therefore it would fit in a Sunny weather playlist. Likewise,
                    I assumed that a song in a major key would fit in a Sunny weather playlist because major keys are typically more positive and uplifting. If you know
                    anything about music theory or production, it is not nearly this simple.  
                </p>
                <p>
                    The thing with tempo is that it's very difficult to put any kind of threshold on it, especially as it relates to measuring some level of positivty. 
                    The tempo of a song usually has to do with what genre it falls under. Dance music typically falls in the range of 112-124 BPM, RnB is typically anywhere
                    from 60-80 BPM, and Pop music falls anywhere from 100-130 BPM, etc. The amount of overlap makes it difficult to target a song's atmosphere, and a song's tempo
                    acts as more of a general basis from where you can take a song emotionally. 
                </p>
                <p>
                    Key is what suprised me the most. Basic music theory suggests that happier songs are typically written in major scales and vice versa with more somber ones.
                    The problem is, you can have a major scale that is the exact same sequence of notes as a minor scale. Take the scale of C major (all of the white notes on a
                    piano keyboard), for example. If you compare it with A minor, the sequence of notes is exactly the same. This overlap also made it difficult to use thresholds. 
                </p>
                <h2>
                    The Recommendations
                </h2>
                <p>
                    Understanding the metrics was important, but I needed some way of generating recommendations for each user. 
                    Luckily, Spotify's API provides a list of recommendations per user based on their short, medium, and long term listening
                    history. I used this to generate a large list of recommended songs. 
                </p>
                <p>
                    Once I had this, I simply had to pull weather data from a separate API to determine the current weather at a specific
                    location. If it were sunny, I'd take my list of recommendations and choose ones with higher levels of valence, danceability, and energy to give to the user.
		    If it were rainy or overcast, I'd do the opposite. 
                </p>
                <h2>
                    Conclusion
                </h2>
                <p>
                    I think it's difficult to put statistics on something as subjective as music, but I do think that Spotify has done an
                    incredible job at reflecting that subjectivity in their metrics. Ultimately, I had mixed feelings about the recommendations
                    from my application and think that the filtering mechanism could've benefitted from some genre matching.
                </p>
		<p>
		    I would have also liked to further explore song key and tempo. While it is difficult to use my method of setting thresholds for the both of these attributes,
		    there are other ways of finding correlations. I'd like to go a bit deeper into music theory and figure out what actually makes a key more positive or negative
		    , and I think I could replace my analysis of tempo by applying certain ranges to specific genres. 
		</p>
                <p>
                    Overall, however, I'm really happy with the way that it turned out and I learned a bunch!<img alt='nerdEmoji' className='emojiWrapper' src={nerdEmoji}></img>
                </p>
            </div>
        </div>
    )
}

export default SpotifyProjectPage
