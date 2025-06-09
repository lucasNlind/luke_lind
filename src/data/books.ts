interface Book {
    title: string;
    author: string;
    review: string[];
    quote?: string;
}

export const BOOKS: Book[] = [
    {
        title: 'Skin In The Game',
        author: 'Nassim Nicholas Taleb',
        review: [
            'Taleb is an absolute savage, and as much as I appreciate the way he chirps consultants and economists, his insights on risk are really eye-opening.',
            'Having skin in the game means you have something to lose, and in most cases that means you can be trusted. Consultants, on the other hand, assume low risk and high upside - an asymmetry. '
        ]
    },
    {
        title: 'Conscious Business',
        author: 'Fred Kofman',
        review: [
            'I’m an engineer by trade, so I’ve had to work really hard to develop my social intelligence - especially as our team grows. I know I won’t be coding forever, and this book helped me understand the right way to deal with people as a leader.',
            'Kofman opens your eyes to the benefits of humility and empathy in a organization, which can only be achieved by living consciously.'
        ],
        quote: 'Living consciously is a state of being mentally active rather than passive. It is the ability to look at the world through fresh eyes. It is intelligence taking joy in its own function.'
    },
    {
        title: 'Mastery',
        author: 'Robert Greene',
        review: [
            'Greene is renowned for conveying powerful messages through storytelling. In Mastery, you learn what it truly takes to gain achievement in your field of choice - and there’s no shortcut.',
            'Any master worth mentioning spent at least 7 - 10 years of their life with their head down, honing their craft through apprenticeship. The world will acknowledge you only when you’ve earned it.'
        ],
    },
    {
        title: 'The Sovereign Individual',
        author: 'James Dale Davidson',
        review: [
            'One of the most forward-thinking books I’ve read, by far. It might even be considered prescient 100 or so years from now.',
            'The authors explain how governments come to power through the monopolization of violence, which is becoming increasingly democratized. The picture they paint of the future is really unlike anything I’ve ever read - well worth the read.'
        ]
    },
    {
        title: 'Poor Charlie\'s Almanack',
        author: 'Charlie Munger',
        review: [
            'I find myself turning back to the ideas of this book constantly, particularly as it relates to incentives and the basics of human psychology.',
            'Besides Munger’s musings of human psychology, you get to step into the mind of one of the world’s greatest investors - which is an absolute treat.'
        ]
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        review: [
            'If you’re on the cusp of discovering your true self and life’s purpose, this book will hit home like no other. The story is so simple, but the messages within are really profound.',
            'It’s a quick read, and I think it came to me at the perfect time. It left me incredibly inspired, and I think it will leave you the same.'
        ],
        quote: 'We are afraid of losing what we have, whether it is our life or our possessions and property. But this fear evaporates when we understand that our life stories and the history of the world were written by the same hand.'
    },
    {
        title: 'The Emperor of All Maladies',
        author: 'Siddhartha Mukherjee',
        review: [
            'All of Sid’s books are awesome, but this one is a must-read for anyone interested in the history of cancer. The author keeps the text super engaging, and you walk away with a better understanding and appreciation for all of the advances we’ve made in the last century.',
            'It’s also a great read if you’re looking for some brain candy. The book is super digestible and can be easily finished in a weekend.'
        ]
    },
    {
        title: 'Antifragile',
        author: 'Nassim Nicholas Taleb',
        review: [
            'Yet another banger from Taleb, this one opens your eyes to the concept of anti-fragility - which is when something thrives when exposed to uncertainty and volatility (a paradox).',
            'The way he ties his concepts to the world at large and everyday life is really interesting, and I think it’s a must-read for anyone looking to understand the world just a little bit better.'
        ],
        quote: 'And, as expected, via negative is part of classical wisdom...keeping one’s distance from an ignorant person is equivalent to keeping company with a wise man.'
    },
    {
        title: 'Annhilation',
        author: 'Ted Chiang',
        review: [
            'No one does Science Fiction better than Ted Chiang, and this book is no exception. It’s filled with tons of super interesting scientific and technological concepts in the form of short stories, and I was left shook multiple times.',
            'It’s also a quick read if you’re just looking for some brain candy. They made a movie version out of one of the stories which is also really good.'
        ]
    },
    {
        title: 'The Almanack of Naval Ravikant',
        author: 'Naval Ravikant',
        review: [
            'Naval is, without a doubt, one of the most successful entrepreneurs and investors of our time - but he also has some incredible takes on life, work, and the pursuit of happiness.',
            'This book basically aggregates all of his best musings in one place, and it offers a great guide for anyone who might be lost or looking for some direction.'
        ],
        quote: 'The direction that you’re heading in matters more than how fast you’re moving. Being right about the direction is far more important than the speed that you’re traveling.'
    },
    {
        title: 'Digital Minimalism',
        author: 'Cal Newport',
        review: [
            'I think it goes without saying that the distractions of the digital age are insane - far more than we are capable of handling as humans. This book offers a practical guide for stripping down to the essentials.',
            'I’ve found myself returning to this book many times, and it’s a great reminder of how you can keep your sanity in the digital age.'
        ],
    },
    {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        review: [
            'Words cannot express how important this book has been to me. I discovered it at the perfect time - just before graduating college and entering the real world.',
            'It shows you that if you truly want something badly enough, you can achieve it. At the bare minimum, it will give you a framework for setting and achieving your goals - which is a must if you want to get anywhere.'
        ],
    },
    {
        title: 'The Courage to Be Disliked',
        author: 'Ichiro Kishimi',
        review: [
            'Another book that I find myself turning back to again and again - this one is perfect if you want a better grasp of your emotions and how to manage the expectations of others.',
            'The author argues that the past does not and cannot define you, and that no one has control over the way you deal with emotions but yourself.'
        ],
    },
]