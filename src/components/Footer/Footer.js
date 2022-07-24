import React from "react";

import './Footer.css'

const Footer = () => {

    return (
        <div className="footerWrapper">
            <p className="footerMainText">
                Thanks for making it to the bottom!
            </p>
            <p className="footerSubText">
                <a
                className='footerLink'
                target='_blank' 
                href='https://www.linkedin.com/in/lucas-lind-a7197a1b4'>
                    LinkedIn
                    </a> • <a 
                        className='footerLink'
                        target='_blank' 
                        href='https://drive.google.com/file/d/1ANRAjGkP8LYylwOE3Zon0zn75-imV-ai/view?usp=sharing'>
                            Resume</a>
            </p>
        </div>
    )
}

export default Footer
