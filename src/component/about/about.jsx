import React from 'react'
import './about.css'
import Me from '../../assets/view.jpeg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuFolderEdit } from "react-icons/lu";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="no image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
        
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
         
            <article className='about__card'>
              <LuFolderEdit className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
          Looking for an opportunity to work as technician position with 
          hands on experience in handling aircraft maintenance with knowledge 
          of engineering activities to aircraft systems.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About