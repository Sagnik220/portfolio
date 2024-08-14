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
I'm Sagnik, a dedicated Data Engineer with a passion for turning data into actionable insights. With over 2 years of experience, I've honed my skills in building and optimizing data pipelines that empower businesses to make informed decisions. My expertise lies in working with a variety of tools and technologies, including Python, SQL, and cloud-based solutions, to create scalable and efficient data architectures.

I thrive on solving complex data problems and take pride in delivering solutions that are both innovative and practical. Whether it's designing ETL processes or handling large-scale data processing, my focus is always on adding value and improving business outcomes. Outside of work, I enjoy exploring new technologies and keeping up with the latest trends in data engineering.

Take a look at my work to see how I can help your business harness the power of data.{' '}
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
                        I've been writing technical articles for over 3 year related to the Data Engineering{' '}
                        <p>
                            <a
                                className='about-link-element'
                                href='https://medium.com/@nik.mukherjee22'
                            >
                                My Medium Articles
                            </a>
                        </p>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>OpenSource Contributor</h3>
                    <p className='about-details'>
                        Being a passionate person interested in open source I would love to collaborate on projects
                        related to Machine Learning,Deep Learning.Data Engineering!{' '}
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
