import React from 'react'
import './Projects.css'

const Projects = () => {
    return(
        <div className='projects-body'>
            <div className='projects-container'>
                <h2 className='projects-header'>My Recent Work</h2>
                <div className='project-one'>
                    <div className='e-commerce-image'></div>
                    <div className='name-and-link'>
                        <h2>MODERN</h2>
                        <div className='website-and-github'>
                            <a className='website-link' href='http://165.227.31.155:4040/#/'>Visit Website</a> 
                            <a className='github-icon' href='https://github.com/youngchang8660/e-commerce-project' />
                        </div>
                        <p className='project-description'>This is my first full CRUD project e-commerce website for home furnishings. </p>  
                    </div>
                    
                </div>
                <div className='project-two'>
                    <div className='ramen-image'></div>
                    <div className='name-and-link'>
                        <h2>SHOYA RAMEN</h2>
                        <div className='website-and-github'>
                            <a className='website-link' href='http://165.227.31.155:3567/#/'>Visit Website</a>  
                            <a className='github-icon' href='https://github.com/youngchang8660/ramen-restaurant' />   
                        </div>  
                        <p className='project-description'>A single page restaurant website for helping customers find the menu and location and make a reservation.</p>   
                    </div>
                </div>
                <div className='project-three'>
                    <div className='real-estate-image'></div>
                    <div className='name-and-link'>
                        <h2>LEE'S REAL ESTATE</h2>
                        <div className='website-and-github'>
                            <a className='website-link' href='http://165.227.31.155:5678/#/'>Visit Website</a>  
                            <a className='github-icon' href='https://github.com/youngchang8660/real-estate-project' /> 
                        </div>
                        <p className='project-description'>This is the real estate website with simple smooth design with filtering function that shorten search cycle times. Try Salt Lake City</p> 
                    </div> 
                </div>
                <div className='project-four'>
                    <div className='chart-maker'></div>
                    <div className='name-and-link'>
                        <h2>Chart Maker</h2>
                        <div className='website-and-github'>
                            <a className='website-link' href='https://reverent-poitras-6c414b.netlify.app/#/'>Visit Website</a>  
                            <a className='github-icon' href='https://github.com/youngchang8660/chart' /> 
                        </div>
                        <p className='project-description'>This is the chart maker.</p> 
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Projects