import React from 'react'
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer-body'>
            <div className='contact-container'>
                <h1 className='footer-header-one'>Get In Touch</h1>
                <h3 className='footer-header-two'>Want to chat about something? Feel free to send me a message</h3>
                <a className='contact-me' href='mailto:youngchang8660@gmail.com'>CONTACT ME</a>    
            </div>
            <div className='profiles-container'>
                <a className='github-profile' href='https://github.com/youngchang8660' />
                <a className='linkedin-profile' href='https://www.linkedin.com/in/young-lee-1ba5b718b/' />
                <a className='instagram-profile' href='https://www.instagram.com/youngchovy/' />
            </div>
        </div>
    )
}

export default Footer