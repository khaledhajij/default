import React from 'react'
import ImagesShow from './ImagesShow'

const Hero = () => {
  return (
    <div className='hero'>
      <ImagesShow />
      <p className='main-title'>
        Get Insights on Islamic Topics with{' '}
        <span className='project-name'>Adam Radar</span>
      </p>
      <p className='app-description'>
        Adam Radar is the ultimate monitoring tool for all things related to
        Islam. With our comprehensive data scraping technology, you can stay
        informed and up-to-date on the latest discussions and developments in
        the Islamic world.
      </p>
      <p className='copy-rights'>
        Copyright © Iadam Radar Analytics Private Limited 2018-2023. All rights
        reserved.
      </p>
    </div>
  )
}

export default Hero
