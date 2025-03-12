import React from 'react'
import './Stories.css'


const Story = () => {
  return (
    <div className='story-container'>
      <div className="story">
        <div className="content-story">
          <iframe src="https://www.youtube.com/embed/VwodBMpgDgQ" frameborder="0" title='YouTube video player'></iframe>
        </div>
        <div className="content-story">
          <iframe src="https://www.youtube.com/embed/wIcdnMg__2s" frameborder="0" title='YouTube video player'></iframe>
        </div>
        <div className="content-story">
          <iframe src="https://www.youtube.com/embed/8zmVejNj5m8" frameborder="0" title='YouTube video player'></iframe>
        </div>
      </div>
      <div className="sec-cont">
        <div className="sec-content">
          <iframe src="https://www.youtube.com/embed/KLMpCkMN16I" frameborder="0" title='YouTube video player'></iframe>
        </div>      
        <div className="sec-content">
          <iframe src="https://www.youtube.com/embed/Fcuv_NeYv8Q" frameborder="0" title='YouTube video player'></iframe>
        </div>      
        <div className="sec-content">
          <iframe src="https://www.youtube.com/embed/TUtCvKETbtw" frameborder="0" title='YouTube video player'></iframe>
        </div>      
      </div>
    </div>
  )
}

export default Story
