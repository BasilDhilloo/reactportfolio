import React from 'react'
import './about.css'
import ME from "./../../assets/me-about.jpg"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5> Get to know </h5>
            <h2> About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me__image">
                        <img src={ME} alt="About Me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ years</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>50+ clients</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>
                    </div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus nihil ipsum error, dolore quas ipsa veniam
                        mollitia animi possimus ullam aliquid amet iure qui
                        sit ad aperiam molestiae laborum dignissimos.</p>
                    <a href="#contact" className='btn btn-primary'> Let's connect!</a>
                </div>
            </div>
        </section>
    )
}

export default About