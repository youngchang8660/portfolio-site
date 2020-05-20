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
                        <p className='project-description'>Ramen restaurant in Tokyo. Used Google Map API to display the location of the restaurant on the map. Users can make a reservation by selecting number of group, time, and date</p>   
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
                        <p className='project-description'>This is the real estate website that allows users to search for homes in specific zip code and city.</p> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Projects