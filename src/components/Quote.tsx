import { Box, Divider, Typography, useTheme } from "@mui/material";

interface QuoteProps {
    text: string;
    author: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', m: '0 0 1rem 0' }}>
            <Divider sx={{ m: '0 0 1rem 0' }} />
            <Typography variant='body1' color='GrayText'>
                <em>
                    "{text}"
                </em>
            </Typography>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', m: '0.5rem 0 0 0' }}>
                <Typography sx={{ mr: '0.5rem' }} color='GrayText'>
                    <strong>
                        -
                    </strong>
                </Typography>
                <Typography
                    variant='body2'
                    color={theme.palette.primary.main}
                >
                    <strong>{author}</strong>
                </Typography>
            </Box>
            <Divider sx={{ m: '1rem 0 0 0' }} />
        </Box>
    )
}

export default Quote;