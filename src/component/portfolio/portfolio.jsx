import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/istockphoto.jpeg'
import IMG2 from '../../assets/goldbackground.jpeg'
import IMG3 from '../../assets/maxresdefault.jpeg'
import IMG4 from '../../assets/Portfoliodesign.webp'
import IMG5 from '../../assets/uxdesign.jpeg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          
          <div className="portfolio__item-image">
            <img src={IMG1} alt="no image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
               <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

        </article>

        <article className='portfolio__item'>
          
          <div className="portfolio__item-image">
            <img src={IMG2} alt="no image" />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
               <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

        </article>

        <article className='portfolio__item'>
          
          <div className="portfolio__item-image">
            <img src={IMG3} alt="no image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
               <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

        </article>

        <article className='portfolio__item'>
          
          <div className="portfolio__item-image">
            <img src={IMG4} alt="no image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
               <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

        </article>

        <article className='portfolio__item'>
          
          <div className="portfolio__item-image">
            <img src={IMG5} alt="no image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
               <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

        </article>
      </div>
    </section>
  )
}

export default Portfolio