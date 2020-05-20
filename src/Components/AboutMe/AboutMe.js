import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
    return(
        <div className='about-body'>
            <div className='about-me-container'>
                <div className='about-me-container-one'>
                    <h2 className='about-intro'>Hi I'm Young, nice to meet you. <br/>Take a look around my portfolio site and some works I've done!</h2>    
                </div>
                <div className='about-me-container-two'>
                    <p className='about-description'>I'm a full-stack web developer who's passionate about building cool websites. I love learning something new and find more efficient way to solve the problems. I'm self motivated person aspire toward a career and experiences that will make me better each day.  Coding is my favorite work, hobby, and game.</p>    
                </div>
            </div>
            <div className='skills-container'>
                {/* <p className='skills-title'>SOME TECHNOLOGIES I'VE WORKED WITH:</p> */}
                <p className='skills'>Javascript |</p>
                <p className='skills'>HTML5 |</p>
                <p className='skills'>CSS3 |</p>
                <p className='skills'>React |</p>
                <p className='skills'>Node JS |</p>
                <p className='skills'>Express JS |</p>
                <p className='skills'>PostgreSQL |</p>
                <p className='skills'>Java</p>
            </div>
        </div>
    )
}

export default AboutMe