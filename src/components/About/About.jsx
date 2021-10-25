import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Software Developer | Open Source Contributor | ML Enthusiast | Electronics & Instrumentation Engineer '
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Student</h3>
                    <p className='about-details'>
                        Currently I am Student at Heritage Institute of Technology pursuing my Bachelors in Electronics & Instrumentation, interested in 
                        Software Development,Machine Learning,Deep Learning.{' '}
                        <p>
                            <a
                                className='about-link-element'
                                href='https://github.com/Sagnik220'
                            >
                                Check out of My Github!
                            </a>
                        </p>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Technical Writer</h3>
                    <p className='about-details'>
                        I've been writing technical articles for over 1 year related to the latest technologies such as Digital 
                        Signal Processing, Machine Learning, Data Structure, Algorithms.{' '}
                        <p>
                            <a
                                className='about-link-element'
                                href='https://auth.geeksforgeeks.org/user/sagnikmukherjee2/articles'
                            >
                                My GeeksforGeeks articles!
                            </a>
                        </p>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>OpenSource Contributor</h3>
                    <p className='about-details'>
                        Being a passionate person interested in open source I would love to collaborate on projects
                        related to Machine Learning,Deep Learning!{' '}
                        <p>
                            <a
                                className='about-link-element'
                                href='mailto:sagnik2207@gmail.com'
                            >
                                Email me for collaboration!
                            </a>
                        </p>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
