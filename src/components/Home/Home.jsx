import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import homeAnime from './../../assets/home_anime.gif';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className='home-container'>
                <div className='header-text'>
                    <h1>Welcome to my portfolio!</h1>
                    <p>I'm Sagnik, a Data Engineer with 2+ years of experience in designing and optimizing data pipelines and architectures. I specialize in transforming raw data into actionable insights using tools like Python, SQL, and cloud platforms. My expertise spans ETL/ELT processes, big data technologies, and scalable cloud solutions. Explore my work to see how I turn complex data challenges into valuable business solutions.</p>
                </div>
                <div className='head-btns'>
                    <Link to='/about' className='btn btn-white'>
                        <p className='btn-text'>Know more about me</p>
                    </Link>
                    <Link to='/contact' className='btn btn-transparent'>
                        <p className='btn-text'>Connect with me</p>
                    </Link>
                    <a href='https://drive.google.com/file/d/1G8LKutyLQ_Afzm5TME8O0nETCrYRwVsA/view' className='btn btn-white'>
                        <p className='btn-text'>Get My Resume</p>
                    </a>
                </div>
                <div className='splash-image'>
                    <img
                        src={homeAnime}
                        alt='animation'
                        className='home-anime'
                    />
                </div>
            </div>
        );

    }
}

export default Home;
