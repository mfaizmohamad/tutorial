import React from 'react'
import RESUME from '../../assets/RESUME.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
      <a href={RESUME} download className='btn'>Download RESUME</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
