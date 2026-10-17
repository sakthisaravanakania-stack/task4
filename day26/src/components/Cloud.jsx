import React from 'react'
import CloudImg from './cloud.jpeg'
const Cloud = () => {
  return (
    <div className='cloud'>
          <div className='clous-image'>
              <img src={CloudImg} alt="" />
      </div>
      
      <div className='cloud-content'>
          <div className='cloud-contant'>
              <h3>Collboration Teams</h3>
              <p>Here you can handle projects together <br />
              with team virtually</p>
      </div>
      
      <div className='cloud-storage'>
        <h3>Cloud Storage</h3>
        <p>No nedd to worry about storage <br />
        because we provide storage up to 2 TB</p>
      </div>

      <div className='daily'>
        <h3>Daily Analytics</h3>
        <p>We always provide useful information to <br />
        make it easier for you every day</p>
        </div>
      </div>
      </div>
      
  )
}

export default Cloud
