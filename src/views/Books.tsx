import { Box, Typography } from "@mui/material";

import BookIcon from '../assets/book-icon-black.svg';

import Quote from "../components/Quote";
import { BOOKS } from "../data/books";

interface BookProps {
    title: string;
    author: string;
    review: string[];
    quote?: string;
}

const Book = ({ title, author, review, quote }: BookProps) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', m: '0 0 1rem 0' }}>
                <img src={BookIcon} style={{ width: '1.4rem', height: '1.4rem', margin: '0 .5rem 0 0', opacity: 0.5 }} />
                <Typography variant='body1' sx={{ textDecoration: 'underline', m: '0 0.5rem 0 0' }}>
                    <strong>
                        {title}
                    </strong>
                </Typography>
                <Typography variant='body1'>
                    by {author}
                </Typography>
            </Box>
            {review.map((review) => (
                <Typography variant='body1' sx={{ m: '0 0 1rem 0' }}>
                    {review}
                </Typography>
            ))}
            {quote && (<Quote text={quote} author={author} />)}
        </Box>
    )
};

const Books = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='body1' sx={{ m: '0 0 1rem 0' }}>
                Books are one of the best ways to learn from the greats, and there&apos;s nothing like starting your Saturday morning with a big cup of coffee and a good book.
            </Typography>
            <Quote
                text='I believe in the discipline of mastering the best that other people have ever figured out. I don’t believe in just sitting down and trying to dream it all up yourself. Nobody’s that smart.'
                author='Charlie Munger'
            />
            <Typography variant='body1' sx={{ m: '0 0 2rem 0' }}>
                I&apos;ve read a lot of books, and I&apos;ve learned a ton. Here are some of my favorites:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', m: '0 0 4rem 0' }}>
                {BOOKS.map((book) => (
                    <Book
                        title={book.title}
                    author={book.author}
                    review={book.review}
                        quote={book.quote}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Books;