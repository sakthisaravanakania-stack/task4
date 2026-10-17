import React from 'react'
import HeadingImg from './heading.jpeg'

const Heading = () => {
  return (
      <div className='heading'>
          <div className='heading-content'>
              <h2>We're here to  <br />
                  Increase your <br />
                  Productivity
        </h2>
        
        <img src={HeadingImg} alt="" />
        
      </div>
      

      <div className='heading-paragrah'>
        <h4>Let's make your work more organize and easily using  <br />
          the Taskio Dashboard with many of the latest  <br />
          featuresin managing work every day.
        </h4>
      </div>


      <div className='heading-btn'>
        <button>Try free trial</button>
      </div>

      <div className='view'>
        <button><i class="fa-solid fa-circle-play"></i> View Demo</button>
      </div>

      <div className='heading-main'>
        <h3>More than 25,000 teams use Collabs</h3>
      </div>

      <div className='head'>
        <h4><i class="fa-brands fa-unsplash"></i> Unsplash</h4>
        <h4> <i class="fa-brands fa-notion"></i> Notion</h4>
        <h4><i class="fa-brands fa-intercom"></i> INTERCOM</h4>
        <h4><i class="fa-solid fa-audio-description"></i> descript</h4>
        <h4><i class="fa-solid fa-spell-check"></i> grammarly</h4>


      </div>
      
    </div>
  )
}

export default Heading
