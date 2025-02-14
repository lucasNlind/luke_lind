import { Box, Typography } from "@mui/material"

import Quote from "../components/Quote";

const Home = () => {

    const quoteRotation = [
        {
            text: 'Writers are remembered for their best work, politicians for their worst mistakes, and businessmen are almost never remembered',
            author: 'Nassim Nicholas Taleb'
        },
        {
            text: 'I suspect they put Socrates to death because there is something terribly unattractive, alienating, and nonhuman in thinking with too much clarity.',
            author: 'Nassim Nicholas Taleb'
        },
        {
            text: 'Unless we manipulate our surroundings, we have as little control over what and whom we think about as we do over the muscles of our hearts.',
            author: 'Nassim Nicholas Taleb'
        }
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='body1' sx={{ m: '0 0 1rem 0' }}>
                Hi, I'm Luke - a founder and creative bridging form with function; work with play.
            </Typography>
            <Typography variant='body1' sx={{ m: '0 0 1rem 0' }}>
                I said “no” to a six-figure postgraduate role at McKinsey and founded a company instead. Now, I&apos;m helping make the digital real estate market a safer place.
            </Typography>
            <Typography variant='body1' sx={{ m: '0 0 1rem 0' }}>
                In my free time I enjoy reading, writing music, and making fun of consultants.
            </Typography>
            <Quote
                text='I suspect they put Socrates to death because there is something terribly unattractive, alienating, and nonhuman in thinking with too much clarity.'
                author='Nassim Nicholas Taleb'
            />
            <Typography variant='body1' sx={{ m: '0 0 1rem 0' }}>
                Entrepreneurship is hard, and can be lonely. Instead of sitting down to cry, I brought together a group of remarkable founders with a friend of mine. 
            </Typography>
            <Typography variant='body1' sx={{ m: '0 0 1rem 0' }}>
                We host public events for founders across the city, and work on empowering our private, hand-selected cohort with the resources they need to succeed.
            </Typography>
            <Typography variant='body1' sx={{ m: '0 0 6rem 0' }}>
                I&apos;m Atlanta based, but no stranger to the road - I hope our paths cross one day. 
            </Typography>
        </Box>
    )
}

export default Home;