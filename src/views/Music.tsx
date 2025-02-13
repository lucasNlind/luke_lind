import { Box, Divider, Typography } from "@mui/material";

const Music = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='body1' sx={{ m: '0 0 1rem 0' }}>
                I also make music. It's actually not terrible, check it out:
            </Typography>
            <Divider sx={{ m: '0 0 1.5rem 0' }} />
            <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/album/1CF9sz7WrQuxBYifLWLBNJ?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Box>
    )
}

export default Music;
